import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const roles = ['Cloud Engineering', 'DevOps Engineering'];

export default function TypingHeadline() {
  const reducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [length, setLength] = useState(5);
  const [deleting, setDeleting] = useState(false);
  const role = roles[roleIndex];

  useEffect(() => {
    if (reducedMotion) return;

    const complete = length === role.length;
    const timer = setTimeout(() => {
      if (!deleting && complete) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setRoleIndex(index => (index + 1) % roles.length);
      } else {
        setLength(count => count + (deleting ? -1 : 1));
      }
    }, !deleting && complete ? 2000 : deleting ? 45 : 100);

    return () => clearTimeout(timer);
  }, [length, deleting, role, reducedMotion]);

  return (
    <h1 className="typing-headline">
      <span className="sr-only">Cloud Engineering &amp; DevOps Engineering</span>
      {reducedMotion ? (
        <span aria-hidden="true">Cloud Engineering &amp; DevOps Engineering</span>
      ) : (
        <span aria-hidden="true" className="typing-stage">
          {roles.map(text => <span key={text} className="typing-placeholder">{text}<span className="typing-cursor">|</span></span>)}
          <span className="typing-text">{role.slice(0, length)}<span className="typing-cursor">|</span></span>
        </span>
      )}
    </h1>
  );
}
