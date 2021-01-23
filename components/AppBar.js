import React from 'react';
import DarkModeButton from '../components/DarkModeButton';

export default function AppBar(props) {
  return (
    <div className="flex justify-between py-8">
      <button className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-all rounded flex items-center justify-center h-7 w-7">
        <a href={props.path}>
          <svg
            className="w-4 h-4 stroke-current text-blackish dark:text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </a>
      </button>
      <DarkModeButton />
    </div>
  );
}
