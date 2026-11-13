import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FaLinkedinIn, FaSms, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const initial = {
  name: "",
  email: "",
  phone: "",
  organisation: "",
  message: "",
};

export default function EnquiryForm({
  type = "contact",
  title = "Send us a message",
  compact = false,
}) {
  const [form, setForm] = useState(initial);
  const [state, setState] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const update = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setState({ loading: true, success: "", error: "" });
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/enquiries`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, type }),
        },
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Unable to submit your enquiry.");
      setForm(initial);
      setState({
        loading: false,
        success: data.message || "Thank you. Your enquiry has been received.",
        error: "",
      });
    } catch (err) {
      setState({
        loading: false,
        success: "",
        error: err.message || "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <form
      className={`bg-[#fff] border-[1px] border-[#e1e6ef] rounded-lg p-6 shadow-lg enquiry-form ${compact ? "compact" : ""}`}
      onSubmit={submit}
    >
      <h3 className="text-lg text-[#171a43] mb-5">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 form-grid">
        <label className="text-sm w-full">
          Full name
          <input
            name="name"
            value={form.name}
            onChange={update}
            required
            maxLength="100"
            placeholder="Your name"
            className="w-full border-[1px] border-blue-950 focus:border-red-700 px-2 bg-white"
          />
        </label>

        <label className="text-sm w-full">
          Email address
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={update}
            required
            maxLength="160"
            placeholder="you@example.com"
            className="w-full border-[1px] border-blue-950 focus:border-red-700 px-2 bg-white"
          />
        </label>
        <label className="text-sm w-full">
          Phone number
          <input
            name="phone"
            value={form.phone}
            onChange={update}
            maxLength="30"
            placeholder="+234..."
            className="w-full border-[1px] border-blue-950 focus:border-red-700 px-2 bg-white"
          />
        </label>
        {type !== "contact" && (
          <label className="text-sm w-full">
            {type === "pharmacy" ? "Pharmacy / organisation" : "Organisation"}
            <input
              name="organisation"
              value={form.organisation}
              onChange={update}
              maxLength="160"
              placeholder="Organisation name"
              className="w-full border-[1px] border-blue-950 focus:border-red-700 px-2 bg-white"
            />
          </label>
        )}
        <label className="w-full text-sm md:col-span-2">
          How can we help?
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            required
            minLength="5"
            maxLength="3000"
            rows="4"
            placeholder="Write your enquiry..."
            className="w-full border-[1px] border-blue-950 focus:border-red-700 px-2 bg-white"
          />
        </label>
      </div>
      <p className="text-xs leading-4 my-3 form-note">
        Please do not submit medical records, prescriptions or other sensitive
        health information through this general enquiry form.
      </p>

      {state.success && (
        <p className="flex items-center gap-2 text-sm my-3 text-green-700 form-success">
          <CheckCircle2 size={17} />
          {state.success}
        </p>
      )}
      {state.error && (
        <p className="flex items-center gap-2 text-sm my-3 text-red-700 form-error">
          <AlertCircle size={17} />
          {state.error}
        </p>
      )}
      <button
        className="bg-blue-700 text-white text-sm flex items-center gap-2 hover:gap-3 hover:scale-105 transition-all duration-300 px-4 py-2 rounded-lg border-none outline-none btn btn-primary"
        type="submit"
        disabled={state.loading}
      >
        {state.loading ? "Sending..." : "Submit enquiry"} <Send size={16} />
      </button>
    </form>
  );
}

// social media contacts

export function SocialMediaContacts() {
  return (
    <article className="mt-8 flex items-center">
      <Link
        to={`#`}
        className="w-10 h-10 grid place-items-center rounded-xl hover:bg-slate-100"
      >
        <FaWhatsapp size={25} className="text-green-900" />
      </Link>
      <Link
        to={`#`}
        className="w-10 h-10 grid place-items-center rounded-xl hover:bg-slate-100"
      >
        <FaSms size={25} className="text-black" />
      </Link>
      <Link
        to={`#`}
        className="w-10 h-10 grid place-items-center rounded-xl hover:bg-slate-100"
      >
        <BiSolidPhoneCall size={22} className="text-blue-900" />
      </Link>
      <Link
        to={`#`}
        className="w-10 h-10 grid place-items-center rounded-xl hover:bg-slate-100"
      >
        <MdOutlineMarkEmailRead size={22} className="text-red-900" />
      </Link>
    </article>
  );
}
