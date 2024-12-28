import React from "react";
import logo from "../Images/WebLogo.png";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white px-6 py-2 flex justify-between items-center">
      <div className="flex items-center">
        <svg
          class="h-7 w-7 text-neutral-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>

        <img src={logo} className="w-[150px] ml-7" alt="Logo" />
      </div>

      <div className="flex gap-3 items-center">
        <svg
          class="h-7 w-7 text-neutral-100"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <rect x="3" y="4" width="18" height="16" rx="2" />{" "}
          <line x1="7" y1="8" x2="7" y2="8.01" />{" "}
          <line x1="12" y1="8" x2="12" y2="8.01" />{" "}
          <line x1="17" y1="8" x2="17" y2="8.01" />{" "}
          <line x1="7" y1="12" x2="7" y2="12.01" />{" "}
          <line x1="12" y1="12" x2="12" y2="12.01" />{" "}
          <line x1="17" y1="12" x2="17" y2="12.01" />{" "}
          <line x1="7" y1="16" x2="17" y2="16" />
        </svg>
        <h1 className="text-xl">Admin {">"} User</h1>
        <svg
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="white"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <svg
          class="h-7 w-7 text-neutral-100"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
          <line x1="16" y1="3" x2="16" y2="7" />{" "}
          <line x1="8" y1="3" x2="8" y2="7" />{" "}
          <line x1="4" y1="11" x2="20" y2="11" />{" "}
          <line x1="10" y1="16" x2="14" y2="16" />{" "}
          <line x1="12" y1="14" x2="12" y2="18" />
        </svg>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 gap-4">
          <span className="text-lg">Enhanzer</span>
          <div className="w-8 h-8 bg-blue-500 text-center rounded-full flex items-center justify-center">
            L
          </div>
          <svg
            class="h-7 w-7 text-neutral-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />{" "}
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <svg
            class="h-7 w-7 text-neutral-100"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
          </svg>
          <svg
            class="h-7 w-7 text-neutral-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <circle cx="12" cy="12" r="3" />{" "}
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
