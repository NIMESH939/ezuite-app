import React from "react";

const Sidebar = () => {
  const menus = [
    {
      icon: (
        <svg
          class="h-6 w-6 text-neutral-100"
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
      ),
      label: "Admin",
    },
    {
      icon: (
        <svg
          class="h-6 w-6 text-neutral-100"
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
          <rect x="8" y="15" width="2" height="2" />
        </svg>
      ),
      label: "Core",
    },
    {
      icon: (
        <svg
          class="h-6 w-6 text-neutral-100"
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
          <rect x="4" y="3" width="16" height="18" rx="2" />{" "}
          <rect x="8" y="7" width="8" height="3" rx="1" />{" "}
          <line x1="8" y1="14" x2="8" y2="14.01" />{" "}
          <line x1="12" y1="14" x2="12" y2="14.01" />{" "}
          <line x1="16" y1="14" x2="16" y2="14.01" />{" "}
          <line x1="8" y1="17" x2="8" y2="17.01" />{" "}
          <line x1="12" y1="17" x2="12" y2="17.01" />{" "}
          <line x1="16" y1="17" x2="16" y2="17.01" />
        </svg>
      ),
      label: "Procurement",
    },
    {
      icon: (
        <svg
          class="h-6 w-6 text-neutral-100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />{" "}
          <polyline points="7.5 4.21 12 6.81 16.5 4.21" />{" "}
          <polyline points="7.5 19.79 7.5 14.6 3 12" />{" "}
          <polyline points="21 12 16.5 14.6 16.5 19.79" />{" "}
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />{" "}
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      label: "Inventory",
    },
    {
      icon: (
        <svg
          class="h-6 w-6 text-neutral-100"
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
          <circle cx="12" cy="12" r="5" /> <path d="M12 7v-4m-1 0h2" />{" "}
          <path d="M12 7v-4m-1 0h2" transform="rotate(45 12 12)" />{" "}
          <path d="M12 7v-4m-1 0h2" transform="rotate(90 12 12)" />{" "}
          <path d="M12 7v-4m-1 0h2" transform="rotate(135 12 12)" />{" "}
          <path d="M12 7v-4m-1 0h2" transform="rotate(180 12 12)" />{" "}
          <path d="M12 7v-4m-1 0h2" transform="rotate(225 12 12)" />{" "}
          <path d="M12 7v-4m-1 0h2" transform="rotate(270 12 12)" />{" "}
          <path d="M12 7v-4m-1 0h2" transform="rotate(315 12 12)" />
        </svg>
      ),
      label: "Manufacture",
    },
    {
      icon: (
        <svg
          class="h-6 w-6 text-neutral-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      label: "Sales",
    },
    {
      icon: (
        <svg
          class="h-6 w-6 text-neutral-100"
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
          <circle cx="12" cy="12" r="9" />{" "}
          <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />{" "}
          <path d="M12 6v2m0 8v2" />
        </svg>
      ),
      label: "Finance",
    },
    {
      icon: (
        <svg
          class="h-6 w-6 text-neutral-100"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 15v3c0 .5523.44772 1 1 1h10.5M3 15v-4m0 4h11M3 11V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v5M3 11h18m0 0v1M8 11v8m4-8v8m4-8v2m1 4h2m0 0h2m-2 0v2m0-2v-2"
          />
        </svg>
      ),
      label: "Assets",
    },
    {
      icon: (
        <svg
          class="h-6 w-6 text-neutral-100"
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
          <circle cx="12" cy="12" r="9" />{" "}
          <line x1="3.6" y1="9" x2="20.4" y2="9" />{" "}
          <line x1="3.6" y1="15" x2="20.4" y2="15" />{" "}
          <path d="M11.5 3a17 17 0 0 0 0 18" />{" "}
          <path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>
      ),
      label: "Services",
    },
    {
      icon: (
        <svg
          class="h-6 w-6 text-neutral-100"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
          />
        </svg>
      ),
      label: "CRM",
    },
    {
      icon: (
        <svg
          class="h-6 w-6 text-neutral-100"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"
          />
        </svg>
      ),
      label: "Analytics",
    },
    {
      icon: (
        <svg
          class="h-6 w-6 text-neutral-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside className="w-20 bg-blue-700 text-white flex flex-col">
      <ul className="flex-1 p-0 space-y-0 items-center">
        {menus.map((menu, index) => (
          <li
            key={index}
            className="flex flex-col items-center space-x-0 hover:bg-blue-500 pl-2 pr-2 pb-2 pt-1 rounded-md cursor-pointer"
          >
            <span className="">{menu.icon}</span>
            <span className="text-[12px]">{menu.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
