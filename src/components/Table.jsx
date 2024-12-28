import React from "react";

const Table = () => {
  const data = [
    {
      firstName: "John",
      lastName: "Doe",
      address: "123 Elm Street",
      mobile: "555-1234",
      email: "john.doe@example.com",
      department: "Sales",
      designation: "Manager",
      updated: "2024-05-08 1:45PM",
      number: "1",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Oak Avenue",
      mobile: "555-5678",
      email: "jane.smith@example.com",
      department: "Marketing",
      designation: "Director",
      updated: "2024-03-08 2:10PM",
      number: "2",
    },
    // Add more rows...
  ];

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded-full">
            Drafts 40
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
            Active 40
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-full">
            Inactive 40
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-full">
            Deleted 40
          </button>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">First Name</th>
            <th className="p-2 border">Last Name</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Mobile</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Department</th>
            <th className="p-2 border">Designation</th>
            <th className="p-2 border">Updated</th>
            <th className="p-2 border">Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border">{row.firstName}</td>
              <td className="p-2 border">{row.lastName}</td>
              <td className="p-2 border">{row.address}</td>
              <td className="p-2 border">{row.mobile}</td>
              <td className="p-2 border">{row.email}</td>
              <td className="p-2 border">{row.department}</td>
              <td className="p-2 border">{row.designation}</td>
              <td className="p-2 border">{row.updated}</td>
              <td className="p-2 border">{row.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
