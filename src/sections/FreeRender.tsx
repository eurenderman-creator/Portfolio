import { useState } from "react";
import { freeRenderData } from "../data";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

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

    const message = encodeURIComponent(
      `✦ FREE RENDER REQUEST\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Project Type: ${formData.projectType}\n\n` +
      `Project Brief:\n${formData.description}`
    );

    const phone = "628000000000"; // ← GANTI DENGAN NOMOR WA KAMU
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
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

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", projectType: "", description: "" });
  };

  return (
    <section id="free-render" className="section-padding bg-[#111111]">
      <div className="container-main">
        <div className="max-w-[760px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#ffffff30]" />
              <span className="text-[11px] font-medium uppercase tracking-[3px] text-[#999999] font-body">
                Complimentary Service
              </span>
              <div className="h-px w-8 bg-[#ffffff30]" />
            </div>
            <h2 className="font-display text-white text-[40px] md:text-[64px] lg:text-[80px] leading-[0.95] mb-6">
              {freeRenderData.heading}
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#888888] font-body max-w-lg mx-auto leading-relaxed">
              {freeRenderData.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {freeRenderData.eligibleCategories.map((cat) => (
              <span
                key={cat}
                className="text-[11px] font-medium uppercase tracking-[2px] text-[#666666] border border-[#2a2a2a] px-4 py-2 font-body"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="border border-[#2a2a2a] p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-8 md:py-12">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[#2a2a2a]">
                  <CheckCircle size={28} className="text-white" strokeWidth={1} />
                </div>
                <h3 className="font-display text-white text-[28px] md:text-[36px] mb-3">
                  Request Submitted
                </h3>
                <p className="text-[15px] text-[#666666] font-body mb-2">
                  Your request has been sent via WhatsApp.
                </p>
                <p className="text-[15px] text-[#666666] font-body mb-10">
                  We will review your project and respond within 2 business days.
                </p>
                <button
                  onClick={resetForm}
                  className="text-[11px] font-medium uppercase tracking-[3px] text-[#666666] hover:text-white transition-colors font-body border-b border-[#333333] hover:border-white pb-1"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-medium uppercase tracking-[2px] text-[#555555] font-body">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Andreas Visuals"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-transparent border-b border-[#2a2a2a] focus:border-white outline-none text-white text-[15px] font-body py-3 placeholder:text-[#333333] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-medium uppercase tracking-[2px] text-[#555555] font-body">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@studio.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-transparent border-b border-[#2a2a2a] focus:border-white outline-none text-white text-[15px] font-body py-3 placeholder:text-[#333333] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium uppercase tracking-[2px] text-[#555555] font-body">
                    Project Category
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="bg-[#111111] border-b border-[#2a2a2a] focus:border-white outline-none text-[15px] font-body py-3 cursor-pointer transition-colors appearance-none text-white"
                  >
                    <option value="" disabled className="text-[#333333]">
                      Select a category
                    </option>
                    {freeRenderData.eligibleCategories.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#111111] text-white">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-medium uppercase tracking-[2px] text-[#555555] font-body">
                    Project Brief
                  </label>
                  <textarea
                    name="description"
                    placeholder="Describe your space, style preferences, dimensions, and any references you have in mind..."
                    rows={5}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="bg-transparent border-b border-[#2a2a2a] focus:border-white outline-none text-white text-[15px] font-body py-3 placeholder:text-[#333333] resize-none transition-colors"
                  />
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-4 border-t border-[#1a1a1a]">
                  <div className="flex items-start gap-3">
                    <Sparkles size={14} className="text-[#444444] mt-0.5 flex-shrink-0" />
                    <p className="text-[12px] text-[#444444] font-body leading-relaxed max-w-xs">
                      {freeRenderData.note}
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="group flex items-center gap-3 bg-white text-[#111111] px-8 py-4 text-[11px] font-medium uppercase tracking-[3px] font-body hover:bg-[#f0f0f0] transition-colors flex-shrink-0"
                  >
                    Submit Request
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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