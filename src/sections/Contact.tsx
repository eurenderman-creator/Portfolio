import { siteConfig, contactData } from "../data";
import { Mail, Phone, MapPin, ArrowUp, ExternalLink, MessageCircle } from "lucide-react";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const waMessage = encodeURIComponent("Halo, saya tertarik untuk berdiskusi mengenai proyek.");
  const waLink = `https://wa.me/${contactData.phone.replace(/[^0-9]/g, "").replace(/^0/, "62")}?text=${waMessage}`;
  const emailLink = `mailto:${contactData.email}?subject=Project%20Inquiry&body=Halo%2C%20saya%20tertarik%20untuk%20berdiskusi.`;

  return (
    <section id="contact" className="section-padding bg-[#F8F8F8]">
      <div className="container-main">
        <div className="text-center mb-20 md:mb-32">
          <h2 className="font-display text-[#111111] text-[48px] md:text-[72px] lg:text-[96px] leading-[0.95] mb-8">
            {contactData.heading}
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666666] font-body max-w-xl mx-auto mb-12">
            {contactData.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={emailLink}
              className="flex items-center gap-3 bg-[#111111] text-white px-8 py-4 text-[13px] font-medium uppercase tracking-[2px] font-body hover:bg-[#333333] transition-colors"
            >
              <Mail size={16} />
              email us
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 text-[13px] font-medium uppercase tracking-[2px] font-body hover:bg-[#1da851] transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20 md:mb-32">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <Mail size={24} strokeWidth={1} className="text-[#111111]" />
            </div>
            <p className="text-label text-[#999999] mb-2">EMAIL</p>
            <a
              href={emailLink}
              className="font-display text-[20px] md:text-[24px] text-[#111111] hover:underline transition-all"
            >
              {contactData.email}
            </a>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <Phone size={24} strokeWidth={1} className="text-[#111111]" />
            </div>
            <p className="text-label text-[#999999] mb-2">WHATSAPP</p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[20px] md:text-[24px] text-[#111111] hover:underline transition-all"
            >
              {contactData.phone}
            </a>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <MapPin size={24} strokeWidth={1} className="text-[#111111]" />
            </div>
            <p className="text-label text-[#999999] mb-2">LOCATION</p>
            <p className="font-display text-[20px] md:text-[24px] text-[#111111]">
              {contactData.location}
            </p>
          </div>
        </div>

        <div className="border-t border-[#E5E5E5] pt-12">
          <p className="text-label text-[#999999] mb-6 text-center">
            {contactData.socialHeading}
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12">
            <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#111111] hover:opacity-70 transition-opacity">
              <span className="text-[14px] font-medium uppercase tracking-[2px] font-body">X (Twitter)</span>
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#111111] hover:opacity-70 transition-opacity">
              <span className="text-[14px] font-medium uppercase tracking-[2px] font-body">LinkedIn</span>
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#111111] hover:opacity-70 transition-opacity">
              <span className="text-[14px] font-medium uppercase tracking-[2px] font-body">Instagram</span>
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[13px] text-[#999999] font-body">{contactData.availability}</p>
        </div>
      </div>

      <footer className="container-main mt-20 md:mt-32 pt-8 border-t border-[#E5E5E5]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] font-medium uppercase tracking-[2px] text-[#999999] font-body">
            ANDREAS STUDIO © {new Date().getFullYear()}
          </p>
          <button onClick={scrollToTop} className="group flex items-center gap-2 text-[12px] font-medium uppercase tracking-[2px] text-[#999999] hover:text-[#111111] transition-colors font-body">
            BACK TO TOP
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </footer>
    </section>
  );
}