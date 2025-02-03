"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);

      setStatus("success");
      setFormData({ name: "", lastName: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending form:", error);
      setStatus("error");
      setFormData({ name: "", lastName: "", email: "", message: "" });
    }
  };

  return (
    <main className="container mx-auto">
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
              disabled={status === "sending"}
              className={`bg-primary text-white py-2 px-4 rounded transition-colors duration-300 ${
                status === "sending"
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-opacity-80"
              }`}
            >
              {status === "sending" ? "Sending..." : "Send"}
            </button>
          </div>
          {status === "success" && (
            <p className="text-green-600 text-center">
              Your message has been sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center">
              Oops! Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
