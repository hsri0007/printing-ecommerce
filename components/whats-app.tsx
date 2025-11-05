'use client';

import { useEffect } from 'react';

export default function WhatsAppButton() {
//   useEffect(() => {
//     // Optional: load CSS for animation if you want
//   }, []);

  const phone = '918121146633'; // replace with your WhatsApp number (no +)
  const message = encodeURIComponent('Hi! I’m interested in your services.');
  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="Chat on WhatsApp"
        className="w-14 h-14 drop-shadow-lg hover:scale-110 transition-transform"
      />
    </a>
  );
}
