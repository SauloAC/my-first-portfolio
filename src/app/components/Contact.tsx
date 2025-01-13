"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log(formData);
    // Reset form after submission
    setFormData({ name: "", lastName: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">
            First Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-primary rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block mb-2">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-primary rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-primary rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-2 border border-primary rounded"
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded hover:bg-opacity-80 transition-colors duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
