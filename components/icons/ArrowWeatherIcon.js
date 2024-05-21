import React from "react";

export default function ArrowIcon({ degree = 0 }) {
  const calculateRotation = (degree) => `rotate(${degree} 12 12)`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="40"
      height="40"
    >
      <path
        d="M16.707,13.293c-0.391-0.391-1.023-0.391-1.414,0L13,15.586V8c0-0.552-0.447-1-1-1s-1,0.448-1,1v7.586l-2.293-2.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L12,19.414l4.707-4.707C17.098,14.316,17.098,13.684,16.707,13.293z"
        fill="none"
        stroke="black"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={calculateRotation(degree)}
      />
    </svg>
  );
}
