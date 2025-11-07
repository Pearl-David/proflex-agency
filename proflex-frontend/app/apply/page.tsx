"use client";
import { useState } from "react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    skills: "",
    experience: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Applicant Data:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-blue-800 mb-4">Application Submitted ✅</h1>
          <p className="text-gray-700">Thank you for applying! We’ll get back to you soon.</p>
          <a href="/" className="mt-6 inline-block bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Back to Home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-blue-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full"
      >
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Freelancer Application
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Preferred Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Select Role</option>
              <option value="Data Entry Specialist">Data Entry Specialist</option>
              <option value="Virtual Assistant">Virtual Assistant</option>
              <option value="Typist">Typist</option>
              <option value="Graphic Designer">Graphic Designer</option>
              <option value="Web Developer">Web Developer</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Key Skills</label>
            <textarea
              name="skills"
              rows={3}
              placeholder="e.g. Excel, Canva, WordPress..."
              value={formData.skills}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Experience (in years)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </main>
  );
}
