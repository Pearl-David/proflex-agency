"use client";

import React, { FormEvent } from "react";

export default function Apply() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Application submitted successfully! Our team will contact you soon.");
  };

  return (
    <main className="font-sans bg-gray-50 text-gray-900 min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-blue-800 text-white py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
          <div className="flex items-center space-x-3">
            <img
              src="/Screenshot_20251102-130002.jpg"
              alt="ProFlex Logo"
              className="w-12 h-12 rounded-full border-2 border-white shadow"
            />
            <h1 className="text-2xl font-bold">ProFlex Freelance Agency</h1>
          </div>

          <ul className="flex flex-wrap justify-center space-x-6 mt-3 sm:mt-0 text-sm font-medium">
            <li><a href="/" className="hover:text-blue-200">Home</a></li>
            <li><a href="/#about" className="hover:text-blue-200">About</a></li>
            <li><a href="/#services" className="hover:text-blue-200">Services</a></li>
            <li><a href="/#contact" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-blue-700 text-white py-10 text-center shadow-md">
        <h2 className="text-3xl font-bold">Apply to Join ProFlex Freelance Agency</h2>
        <p className="text-lg mt-2 text-blue-100">
          Take the next step in your freelance career. Fill out the application below to get started.
        </p>
      </header>

      {/* Application Form Section */}
      <section className="flex-grow py-12">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
            Freelancer Application Form
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Position Applying For</label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              >
                <option value="">-- Select a Role --</option>
                <option value="data-entry">Data Entry Specialist</option>
                <option value="typist">Typist</option>
                <option value="virtual-assistant">Virtual Assistant</option>
                <option value="creative-designer">Creative Designer</option>
              </select>
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Upload Resume (PDF or DOCX)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Cover Letter</label>
              <textarea
                required
                rows={4}
                placeholder="Write a short cover letter highlighting your experience..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 shadow transition-all"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-4 mt-auto">
        <p>© 2025 ProFlex Freelance Agency. All rights reserved.</p>
      </footer>
    </main>
  );
}
