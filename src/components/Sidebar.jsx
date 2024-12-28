import React from "react";

const Sidebar = () => {
  const menus = [
    { icon: "🏠", label: "Admin" },
    { icon: "📦", label: "Core" },
    { icon: "🛒", label: "Procurement" },
    { icon: "📊", label: "Inventory" },
    { icon: "⚙️", label: "Manufacture" },
    { icon: "💰", label: "Sales" },
    { icon: "📂", label: "Finance" },
    { icon: "🖇️", label: "Assets" },
    { icon: "🔧", label: "Services" },
    { icon: "🤝", label: "CRM" },
    { icon: "📈", label: "Analytics" },
  ];

  return (
    <aside className="w-20 bg-blue-700 text-white flex flex-col">
      <ul className="flex-1 p-4 space-y-4">
        {menus.map((menu, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 hover:bg-blue-500 p-2 rounded-md cursor-pointer"
          >
            <span>
              {menu.icon}
              <br />
              {menu.label}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
