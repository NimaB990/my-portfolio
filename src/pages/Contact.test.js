import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import emailjs from '@emailjs/browser';
import Contact from './Contact';

jest.mock('@emailjs/browser', () => ({ sendForm: jest.fn() }));

beforeEach(() => jest.clearAllMocks());

function fillForm() {
  fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Test visitor' } });
  fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'visitor@example.com' } });
  fireEvent.change(screen.getByLabelText('Your message'), { target: { value: 'A project inquiry.' } });
  return screen.getByRole('button', { name: /send message/i }).closest('form');
}

test('prevents duplicate sends and resets the form after a successful response', async () => {
  let finish;
  emailjs.sendForm.mockImplementation(() => new Promise(resolve => { finish = resolve; }));
  render(<Contact />);
  const form = fillForm();
  fireEvent.submit(form);
  fireEvent.submit(form);
  expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
  expect(emailjs.sendForm.mock.calls[0][2]).toBe(form);
  expect(screen.getByRole('button', { name: /sending message/i })).toBeDisabled();
  await act(async () => finish({ status: 200 }));
  expect(screen.getByRole('status')).toHaveTextContent('Your message has been sent');
  expect(screen.getByLabelText('Your name')).toHaveValue('');
  expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();
});

test('preserves the message on failure and lets the visitor retry', async () => {
  emailjs.sendForm.mockRejectedValueOnce(new Error('Offline')).mockResolvedValueOnce({ status: 200 });
  render(<Contact />);
  const form = fillForm();
  await act(async () => fireEvent.submit(form));
  expect(screen.getByRole('status')).toHaveTextContent("Your message couldn't be sent");
  expect(screen.getByLabelText('Your message')).toHaveValue('A project inquiry.');
  expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();
  await act(async () => fireEvent.submit(form));
  expect(emailjs.sendForm).toHaveBeenCalledTimes(2);
  expect(screen.getByRole('status')).toHaveTextContent('Your message has been sent');
});
