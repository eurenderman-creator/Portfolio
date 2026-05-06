import { useState } from "react";
import { freeRenderData } from "../data";
import { CheckCircle, Send } from "lucide-react";

export default function FreeRender() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="free-render" className="section-padding bg-[#F8F8F8]">
      <div className="container-main">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-white p-8 md:p-16">
            <h2 className="font-display text-[#111111] section-title mb-4 text-center">
              {freeRenderData.heading}
            </h2>
            <p className="text-[16px] text-[#666666] font-body text-center mb-12 max-w-lg mx-auto">
              {freeRenderData.description}
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle size={48} className="mx-auto text-[#111111] mb-4" />
                <h3 className="font-display text-[28px] text-[#111111] mb-2">
                  Request Received
                </h3>
                <p className="text-[16px] text-[#666666] font-body">
                  We will review your project and get back to you within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-minimal"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-minimal"
                  />
                </div>

                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="input-minimal appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select Project Category
                  </option>
                  {freeRenderData.eligibleCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>

                <textarea
                  name="description"
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="input-minimal resize-none"
                />

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-4">
                  <p className="text-[12px] text-[#999999] font-body max-w-sm">
                    {freeRenderData.note}
                  </p>
                  <button type="submit" className="btn-primary gap-2">
                    <Send size={14} />
                    SUBMIT REQUEST
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
