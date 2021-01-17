import React from 'react';

export default function MainLink(props) {
  return (
    <div>
      <a
        href={props.path}
        className="cursor-pointer flex space-x-2 items-center stroke-current text-yellow-600 hover:text-gray-800 dark:text-yellow-400 dark:hover:text-white transition-all"
      >
        <p className="text-sm font-semibold">{props.text}</p>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </a>
    </div>
  );
}
