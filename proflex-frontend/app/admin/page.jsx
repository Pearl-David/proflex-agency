"use client";
import React, { useState, useEffect } from "react";

export default function AdminPage() {
  const [applications, setApplications] = useState([]);

  // Load applications stored in localStorage (temporary)
  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("applications") || "[]");
    setApplications(savedApps);
  }, []);

  return (
    <main className="font-sans bg-gray-50 min-h-screen text-gray-900">
      <header className="bg-blue-800 text-white py-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-sm mt-2 text-blue-100">
          Managing Freelancer Applications
        </p>
      </header>

      <section className="p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Submitted Applications
        </h2>

        {applications.length === 0 ? (
          <p className="text-gray-600 italic">
            No applications submitted yet.
          </p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow bg-white">
            <table className="w-full border-collapse">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Experience</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-blue-50 transition-colors"
                  >
                    <td className="p-3">{app.name}</td>
                    <td className="p-3">{app.email}</td>
                    <td className="p-3">{app.role}</td>
                    <td className="p-3">{app.experience}</td>
                    <td className="p-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <footer className="bg-blue-800 text-white text-center py-4 mt-10">
        <p>© 2025 ProFlex Freelance Agency. Admin Portal</p>
      </footer>
    </main>
  );
}
