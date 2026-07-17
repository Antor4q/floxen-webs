"use client";

import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: apnar backend / API route e connect korun
  };

  return (
    <div className="w-full my-16 flex items-center justify-center bg-[#050505] p-6">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8">
      

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <div>
              <label className="block text-sm text-white/80 mb-2">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-purple-500/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
           
          </div>

        
             <div>
              <label className="block text-sm text-white/80 mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-purple-500/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
    

          <div>
            <label className="block text-sm text-white/80 mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us more about your message..."
              rows={5}
              className="w-full resize-y rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-purple-500/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          <div className="flex items-center justify-between pt-2 flex-wrap gap-4">
            <button
              type="submit"
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 pl-6 pr-2 py-2 text-sm font-medium text-white shadow-lg shadow-purple-600/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </button>

            <div className="flex items-center gap-2 text-xs text-white/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0 text-white/30"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>
                We respect your privacy.
                <br />
                No spam, ever.
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}