import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header at the top */}
      <Header />

      {/* Sidebar and Table section */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-5 overflow-y-auto">
          <Table />
        </main>
      </div>
    </div>
  );
}

export default App;
