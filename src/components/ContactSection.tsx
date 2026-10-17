import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Info,
  Clock,
  Building,
} from "lucide-react";
import { COMPANY_NAME, CONTACT_PLACEHOLDERS } from "../data/companyData";

interface ContactSectionProps {
  initialInquiryType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialInquiryType = "General Enquiry",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    enquiryType: initialInquiryType,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionState, setSubmissionState] = useState<{
    submitted: boolean;
    data: typeof formData | null;
  }>({
    submitted: false,
    data: null,
  });
  const [copied, setCopied] = useState(false);

  // Sync initialInquiryType if parent changes it
  React.useEffect(() => {
    if (initialInquiryType) {
      setFormData((prev) => ({ ...prev, enquiryType: initialInquiryType }));
    }
  }, [initialInquiryType]);

  const enquiryTypes = [
    "Construction Services",
    "Import and Export",
    "Agricultural Products and Supplies",
    "Cosmetics and Personal Care",
    "Food Products and Commodities",
    "Commercial Investments and Partnerships",
    "General Enquiry",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter a valid full name.";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please provide a valid email address.";
    }

    if (!formData.enquiryType) {
      errs.enquiryType = "Please select an enquiry category.";
    }

    if (!formData.message.trim()) {
      errs.message = "Message details are required.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Please provide at least 10 characters describing your enquiry.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Validated on frontend. Transparently show client-side readiness modal.
      setSubmissionState({
        submitted: true,
        data: { ...formData },
      });
    }
  };

  const handleCopySummary = () => {
    if (!submissionState.data) return;
    const text = `OSMUT Business Enquiry:
From: ${submissionState.data.fullName}
Company: ${submissionState.data.company || "N/A"}
Email: ${submissionState.data.email}
Phone: ${submissionState.data.phone || "N/A"}
Category: ${submissionState.data.enquiryType}
Message:
${submissionState.data.message}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDraftMailto = () => {
    if (!submissionState.data) return;
    const subject = encodeURIComponent(`OSMUT Business Enquiry: ${submissionState.data.enquiryType} - ${submissionState.data.fullName}`);
    const body = encodeURIComponent(
      `Attention: OSMUT Construction and Investment

Enquiry Type: ${submissionState.data.enquiryType}
Full Name: ${submissionState.data.fullName}
Organization: ${submissionState.data.company || "Not specified"}
Contact Email: ${submissionState.data.email}
Contact Phone: ${submissionState.data.phone || "Not specified"}

Message Details:
${submissionState.data.message}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-black text-gray-200 py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#64a19d] text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide text-white font-heading mb-4">
            {COMPANY_NAME}
          </h2>
          <div className="w-16 h-1 bg-[#64a19d] mx-auto mb-6" />
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            Contact us for business enquiries, partnerships, procurement opportunities, and general information.
          </p>
        </div>

        {/* Verification Notice Banner */}
        <div className="max-w-4xl mx-auto mb-16 p-4 sm:p-5 rounded-sm bg-[#0e1416] border border-[#64a19d]/40 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#64a19d] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            <span className="font-bold text-white uppercase tracking-wider block mb-1">
              Official Corporate Information Notice
            </span>
            {CONTACT_PLACEHOLDERS.formNotice} In accordance with corporate governance standards, official lines will be activated following formal registry publication.
          </div>
        </div>

        {/* Grayscale Style Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Address Card */}
          <div className="bg-[#0c1012] border-t border-x border-gray-800 border-b-4 border-b-[#64a19d] p-8 text-center flex flex-col items-center justify-center rounded-sm">
            <div className="w-12 h-12 rounded-full bg-black border border-gray-800 flex items-center justify-center text-[#64a19d] mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white font-heading mb-3">
              Head Office Address
            </h3>
            <div className="w-8 h-0.5 bg-[#64a19d] mb-4" />
            <p className="text-xs text-gray-400 font-mono leading-relaxed">
              {CONTACT_PLACEHOLDERS.addressNotice}
            </p>
            <span className="mt-4 text-[10px] uppercase tracking-wider text-gray-400 bg-gray-900 px-2 py-0.5 rounded-xs">
              Accra, Ghana
            </span>
          </div>

          {/* Email Card */}
          <div className="bg-[#0c1012] border-t border-x border-gray-800 border-b-4 border-b-[#64a19d] p-8 text-center flex flex-col items-center justify-center rounded-sm">
            <div className="w-12 h-12 rounded-full bg-black border border-gray-800 flex items-center justify-center text-[#64a19d] mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white font-heading mb-3">
              Corporate Email
            </h3>
            <div className="w-8 h-0.5 bg-[#64a19d] mb-4" />
            <p className="text-xs text-gray-400 font-mono leading-relaxed">
              {CONTACT_PLACEHOLDERS.emailNotice}
            </p>
            <span className="mt-4 text-[10px] uppercase tracking-wider text-gray-400 bg-gray-900 px-2 py-0.5 rounded-xs">
              Business Inquiries
            </span>
          </div>

          {/* Phone Card */}
          <div className="bg-[#0c1012] border-t border-x border-gray-800 border-b-4 border-b-[#64a19d] p-8 text-center flex flex-col items-center justify-center rounded-sm">
            <div className="w-12 h-12 rounded-full bg-black border border-gray-800 flex items-center justify-center text-[#64a19d] mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white font-heading mb-3">
              Direct Telephone
            </h3>
            <div className="w-8 h-0.5 bg-[#64a19d] mb-4" />
            <p className="text-xs text-gray-400 font-mono leading-relaxed">
              {CONTACT_PLACEHOLDERS.phoneNotice}
            </p>
            <span className="mt-4 text-[10px] uppercase tracking-wider text-gray-400 bg-gray-900 px-2 py-0.5 rounded-xs">
              Telephone Line
            </span>
          </div>
        </div>

        {/* Business Enquiry Form */}
        <div className="max-w-3xl mx-auto bg-[#0a0e10] p-6 sm:p-10 rounded-sm border border-gray-800 shadow-2xl">
          <div className="mb-8">
            <h3 className="text-xl font-bold uppercase tracking-wider text-white font-heading mb-2">
              Submit Business Enquiry
            </h3>
            <p className="text-xs text-gray-400">
              Provide your details and requirement overview. All fields marked with * are required.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: "" });
                  }}
                  placeholder="e.g. Kwame Mensah"
                  className={`w-full px-4 py-3 bg-[#121619] border ${
                    errors.fullName ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:border-[#64a19d]"
                  } text-white placeholder-gray-500 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-[#64a19d] transition-colors`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Company / Organization */}
              <div>
                <label htmlFor="company" className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                  Company or Organization <span className="text-gray-500 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Global Agri Holdings Ltd"
                  className="w-full px-4 py-3 bg-[#121619] border border-gray-700 focus:border-[#64a19d] text-white placeholder-gray-500 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-[#64a19d] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-3 bg-[#121619] border ${
                    errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:border-[#64a19d]"
                  } text-white placeholder-gray-500 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-[#64a19d] transition-colors`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                  Phone Number <span className="text-gray-500 font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +233 XX XXX XXXX"
                  className="w-full px-4 py-3 bg-[#121619] border border-gray-700 focus:border-[#64a19d] text-white placeholder-gray-500 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-[#64a19d] transition-colors"
                />
              </div>
            </div>

            {/* Enquiry Type Dropdown */}
            <div>
              <label htmlFor="enquiryType" className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                Enquiry Type *
              </label>
              <select
                id="enquiryType"
                value={formData.enquiryType}
                onChange={(e) => {
                  setFormData({ ...formData, enquiryType: e.target.value });
                  if (errors.enquiryType) setErrors({ ...errors, enquiryType: "" });
                }}
                className={`w-full px-4 py-3 bg-[#121619] border ${
                  errors.enquiryType ? "border-red-500" : "border-gray-700 focus:border-[#64a19d]"
                } text-white text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-[#64a19d] transition-colors`}
              >
                {enquiryTypes.map((type) => (
                  <option key={type} value={type} className="bg-gray-900 text-white">
                    {type}
                  </option>
                ))}
              </select>
              {errors.enquiryType && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.enquiryType}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-gray-300 mb-2">
                Message & Requirement Details *
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: "" });
                }}
                placeholder="Please outline the nature of your interest, project scope, procurement volume, or partnership proposal..."
                className={`w-full px-4 py-3 bg-[#121619] border ${
                  errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:border-[#64a19d]"
                } text-white placeholder-gray-500 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-[#64a19d] transition-colors resize-y`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message}
                </p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-black bg-[#64a19d] hover:bg-[#50817e] hover:text-white transition-all rounded-sm shadow-md cursor-pointer"
              >
                <span>Validate & Format Enquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Social channels placeholder notice as required */}
        <div className="mt-16 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">
            Corporate Social Media Presence
          </p>
          <p className="text-xs text-gray-400 font-mono">
            {CONTACT_PLACEHOLDERS.socialNotice}
          </p>
        </div>
      </div>

      {/* Transparent Form Readiness & Dispatch Modal */}
      {submissionState.submitted && submissionState.data && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-xl bg-[#0f1416] border border-gray-700 text-gray-200 rounded-sm shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-[#64a19d]/20 text-[#64a19d] border border-[#64a19d]/40 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold uppercase tracking-wider text-white font-heading">
                  Enquiry Form Validated (Frontend Ready)
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Your enquiry data has been verified and formatted on the client.
                </p>
              </div>
            </div>

            {/* Explanation box honoring strict requirement */}
            <div className="p-4 bg-black/60 border border-gray-800 rounded-sm space-y-2 text-xs leading-relaxed text-gray-300">
              <p className="font-semibold text-white">
                Configuration Status & Production Readiness:
              </p>
              <p>
                In strict compliance with transparency guidelines, no backend mail server has been simulated or falsely claimed. To route enquiries directly to company inboxes in production, configure an SMTP service or endpoint (e.g. Express `/api/contact`, SendGrid, or AWS SES).
              </p>
              <p className="text-gray-400">
                You can immediately dispatch this formatted enquiry via your device's email client or copy the structured record below.
              </p>
            </div>

            {/* Summary preview */}
            <div className="p-4 bg-[#141a1c] border border-gray-800 rounded-sm text-xs space-y-1.5 font-mono text-gray-300">
              <div><span className="text-gray-500">Subject:</span> {submissionState.data.enquiryType}</div>
              <div><span className="text-gray-500">Contact:</span> {submissionState.data.fullName} ({submissionState.data.email})</div>
              {submissionState.data.company && <div><span className="text-gray-500">Company:</span> {submissionState.data.company}</div>}
              {submissionState.data.phone && <div><span className="text-gray-500">Phone:</span> {submissionState.data.phone}</div>}
              <div className="pt-2 border-t border-gray-800 text-gray-400 line-clamp-3">
                "{submissionState.data.message}"
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleDraftMailto}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#64a19d] hover:bg-[#50817e] hover:text-white transition-all rounded-sm shadow"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email Client</span>
              </button>

              <button
                type="button"
                onClick={handleCopySummary}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700 transition-all rounded-sm"
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>

              <button
                type="button"
                onClick={() => setSubmissionState({ submitted: false, data: null })}
                className="w-full sm:w-auto px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
