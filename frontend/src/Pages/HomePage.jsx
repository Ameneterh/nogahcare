import MainLayout from "../layout/MainLayout";
import { useState } from "react";
import {
  ArrowRight,
  Stethoscope,
  Pill,
  ClipboardList,
  Truck,
  MessageCircle,
  BookOpen,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  UserRoundCheck,
  Store,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaRegUserCircle, FaStar, FaStarHalfAlt } from "react-icons/fa";
import SectionHeading from "../Components/SectionHeading";
import EnquiryForm, { SocialMediaContacts } from "../Components/EnquiryForm";
import { services, benefits, faqs } from "../data/siteContent";
import HeroComponent from "../Components/HeroComponent";
import { Link } from "react-router-dom";
import ServiceCard from "../Components/CommonParts/ServiceCard";
import { company_info } from "../assets/company_info";

const iconMap = {
  stethoscope: Stethoscope,
  pill: Pill,
  clipboard: ClipboardList,
  truck: Truck,
  message: MessageCircle,
  book: BookOpen,
};

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <MainLayout>
      <>
        <div className="w-full h-[3px] bg-white"></div>
        <main className="border-t-2 border-t-white">
          <HeroComponent />
          {/*  */}
          <section className="bg-[#fff] w-full">
            <div className="max-w-7xl mx-auto flex justify-between flex-wrap gap-5 py-5">
              <span className="flex items-center gap-3 text-sm font-semibold text-[#555d75]">
                <ShieldCheck className="w-10 text-[#168e83]" /> Responsible
                healthcare connections
              </span>
              <span className="flex items-center gap-3 text-sm font-semibold text-[#555d75]">
                <Store className="w-10 text-[#168e83]" /> Participating pharmacy
                network
              </span>
              <span className="flex items-center gap-3 text-sm font-semibold text-[#555d75]">
                <HeartHandshake className="w-10 text-[#168e83]" /> People-first
                experience
              </span>
            </div>
            <p className="h-[1.5px] bg-slate-900 w-full"></p>
            {/* <div className="flex flex-col p-4 max-w-7xl mx-auto">
              <h1 className="text-2xl md:text-4xl">
                A simpler way to access care!
              </h1>
              <p className="w-full leading-5">
                <span className="font-bold">NogahCare</span> is a digital
                healthcare platform connecting individuals to healthcare
                professionals and verified pharmacy partners through an integrated
                online pharmacy and telehealth experience. it is designed to make
                access to healthcare advice, pharmacy services, and medicines more
                convenient, safe, and accessible.
              </p>
  
              <div className="flex items-center justify-center gap-8 mt-10">
                <Link
                  to="/#"
                  className="px-3 py-2 w-fit bg-blue-700 hover:scale-110 transition-all duration-300 rounded-md text-white"
                >
                  Get Started
                </Link>
                <Link
                  to="/#"
                  className="px-3 py-2 w-fit bg-teal-700 hover:scale-110 transition-all duration-300 rounded-md text-white"
                >
                  Explore our Services
                </Link>
                <Link
                  to="/#"
                  className="px-3 py-2 w-fit bg-green-800 hover:scale-110 transition-all duration-300 rounded-md text-white"
                >
                  Join as a Pharmacy Partner
                </Link>
              </div>
            </div> */}
          </section>

          {/* about nogahcare section */}
          <section className="w-full px-3 py-4 mt-4" id="about">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="h-fit w-full relative grid grid-cols-1 md:grid-cols-2">
                <div
                  className="w-full md:w-[600px] h-96 rounded-2xl bg-gradient-to-tr from-[#d9eaf5] to-[#b8d8d8] overflow-hidden photo-main shadow-lg"
                  style={{
                    backgroundImage: "url('/telehealth.png')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* <div className="flex flex-col items-center justify-center gap-4 text-[#fff] bg-[linear-gradient(145deg,#171a431f,#28b7a540),radial-gradient(circle_at_30%_20%,#7fb7bd,#456b90_72%)] h-full">
                    <HeartHandshake size={100} />
                    <span>CONNECTED CARE</span>
                  </div> */}
                </div>
                {/* <div className="absolute right-0 bottom-3 bg-[#fff] shadow-lg rounded-xl py-4 px-5 grid grid-cols-[2fr_1fr] gap-3 place-content-center about-stat">
                  <span className="w-10 h-10 rounded-xl bg-[#e8f7f4] text-[#168e83] grid row-span-2 place-content-center stat-icon">
                    <UserRoundCheck />
                  </span>
  
                  <strong className="text-sm text-[#171a43]">
                    Care, connected
                  </strong>
                  <small className="text-[#687087] text-xs">
                    One digital healthcare journey
                  </small>
                </div> */}
                {/* <div className="w-24 h-24 border-8 border-teal-800 bg-slate-700 rounded-[50%] absolute right-8 -top-5 bg-opacity-25 about-deco"></div> */}
              </div>

              {/* right side */}
              <div className="about-copy">
                <SectionHeading
                  eyebrow="About NogahCare"
                  title="Bringing healthcare closer to the people who need it."
                />
                <p className="text-sm mb-3">
                  NogahCare is a digital healthcare platform connecting
                  individuals to healthcare professionals and verified pharmacy
                  partners through an integrated online pharmacy and telehealth
                  experience.
                </p>
                <p className="text-sm mb-3">
                  We recognise that accessing healthcare advice and medicines
                  can involve fragmented processes. Our goal is to make that
                  journey more convenient, safe and accessible through
                  thoughtful digital connections.
                </p>
                <div className="grid gap-3 mt-5 mb-6 check-list">
                  <span className="flex items-center text-sm gap-3 font-bold text-[#454d65]">
                    <CheckCircle2 className="w-8 text-[#168e83]" /> Convenient
                    access to care pathways
                  </span>
                  <span className="flex items-center text-sm gap-3 font-bold text-[#454d65]">
                    <CheckCircle2 className="w-8 text-[#168e83]" /> Connections
                    to participating pharmacies
                  </span>
                  <span className="flex items-center text-sm gap-3 font-bold text-[#454d65]">
                    <CheckCircle2 className="w-8 text-[#168e83]" />{" "}
                    Patient-focused support and education
                  </span>
                </div>

                <Link
                  to="#how-it-works"
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-md font-semibold text-sm hover:scale-105 transition-all duration-300 text-[#fff] bg-[#171a43] btn btn-dark"
                >
                  Discover how it works <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>

          {/* services section */}
          <section
            className="w-full px-3 py-4 mt-4 bg-[#171a43] text-white section-pad section-soft"
            id="services"
          >
            <div className="max-w-7xl mx-auto py-10">
              <SectionHeading
                eyebrow="Our services"
                title="Healthcare support, in one connected place."
                text="Explore the service pathways NogahCare is designed to bring together. Service availability will be clearly indicated as the platform launches."
                centered
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 service-grid mt-8">
                {services.map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </div>
            </div>
          </section>

          {/* how nogahcare works */}
          <section
            className="w-full px-3 py-4 mt-4 section-pad"
            id="how-it-works"
          >
            <div className="max-w-7xl mx-auto my-8">
              <SectionHeading
                eyebrow="How NogahCare works"
                title="Four simple steps towards connected care."
                text="A clear journey helps you understand what happens when you choose a NogahCare service."
                centered
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 steps-grid">
                {[
                  [
                    "01",
                    "Register",
                    "Create your NogahCare account when registration is available.",
                    UserRoundCheck,
                  ],
                  [
                    "02",
                    "Select a service",
                    "Choose an online consultation or pharmacy service.",
                    ClipboardList,
                  ],
                  [
                    "03",
                    "Connect",
                    "Get connected to the appropriate healthcare professional or pharmacy partner.",
                    HeartHandshake,
                  ],
                  [
                    "04",
                    "Receive care",
                    "Access your consultation, medicine order, delivery or pickup service.",
                    CheckCircle2,
                  ],
                ].map(([num, title, desc, Icon], i) => (
                  <div className="relative mt-4 step" key={num}>
                    <div className="flex items-center justify-between mb-5 step-top">
                      <span className="text-3xl font-bold text-[#dce4f1]">
                        {num}
                      </span>
                      <div className="h-14 w-14 rounded-lg bg-[#e8f7f4] text-[#168e83] grid place-items-center step-icon">
                        <Icon />
                      </div>
                    </div>
                    <h3 className="text-lg text-[#171a43] mb-2">{title}</h3>
                    <p className="text-sm max-w-56">{desc}</p>

                    {i < 4 && (
                      <div className="absolute h-[1px] left-12 top-7 w-[calc(100%-120px)] bg-[#c7d4e6] step-connector"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* why choose us section */}
          <section className="w-full px-3 py-4 mt-4 bg-[#171a43] text-white section-pad section-navy">
            <div className="max-w-7xl mx-auto my-8">
              <SectionHeading
                eyebrow="Why choose NogahCare"
                title="A more considered healthcare experience."
                text="A connected digital experience designed around access, professional support and patient needs."
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 benefit-grid">
                {benefits.map(([title, desc], i) => (
                  <div className="flex gap-3 mt-8 benefit" key={title}>
                    <span className="w-8 h-8 place-items-center rounded-lg bg-[#28b7a529] text-[#73d8cd] grid benefit-check">
                      <CheckCircle2 size={20} />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg text-[#fff] mr-1 mb-2">{title}</h3>
                      <p className="text-sm text-[#bdc5dd] mr-1 mb-2">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* pharmacy network section */}
          <section
            className="w-full px-3 py-4 mt-4 section-pad section-soft"
            id="pharmacy-network"
          >
            <div className="max-w-7xl mx-auto my-8 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] place-items-center gap-16 container partner-grid">
              <div className="partner-copy">
                <SectionHeading
                  eyebrow="Our pharmacy network"
                  title={
                    "Local pharmacy partners.\nConnected through NogahCare."
                  }
                  text="NogahCare connects customers with participating, appropriately licensed pharmacy partners rather than relying on a central warehouse."
                />

                <div className="mt-6 grid gap-4 partner-points">
                  <div className="flex gap-3 items-start">
                    <span className="w-9 h-9 rounded-xl bg-[#fff] text-[#168e83] grid place-items-center">
                      <Store />
                    </span>

                    <p className="flex-1 grid gap-1">
                      <span className="block text-lg font-bold text-[#171a43]">
                        Pharmacy partnership
                      </span>
                      <small className="text-xs">
                        Opportunities for appropriately licensed pharmacies to
                        join the network.
                      </small>
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-9 h-9 rounded-xl bg-[#fff] text-[#168e83] grid place-items-center">
                      <Pill />
                    </span>
                    <p className="flex-1 grid gap-1">
                      <span className="block text-lg font-bold text-[#171a43]">
                        Medicine sourcing
                      </span>
                      <small className="text-xs">
                        Requests are routed through participating pharmacies,
                        subject to availability and applicable processes.
                      </small>
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-9 h-9 rounded-xl bg-[#fff] text-[#168e83] grid place-items-center">
                      <ShieldCheck />
                    </span>
                    <p className="flex-1 grid gap-1">
                      <span className="block text-lg font-bold text-[#171a43]">
                        Prescription verification
                      </span>
                      <small className="text-xs">
                        Appropriate prescription review and fulfilment
                        processes.
                      </small>
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-9 h-9 rounded-xl bg-[#fff] text-[#168e83] grid place-items-center">
                      <Truck />
                    </span>
                    <p className="flex-1 grid gap-1">
                      <span className="block text-lg font-bold text-[#171a43]">
                        Delivery and pickup
                      </span>
                      <small className="text-xs">
                        Coordination of available delivery or pickup options.
                      </small>
                    </p>
                  </div>
                </div>
                <a
                  href="#pharmacy-enquiry"
                  className="flex items-center gap-1 text-nowrap bg-blue-600 text-white hover:scale-105 transition-all duration-300 px-3 py-2 mt-6 max-w-fit rounded-md btn btn-primary"
                >
                  Become a pharmacy partner <ArrowRight size={16} />
                </a>
              </div>
              {/*  */}
              <div
                className="w-full md:w-[600px] h-[400px] bg-gradient-to-tr from-[#dcecf2] to-[#c9e8e1] rounded-2xl relative grid place-items-center bg-opacity-40 partner-art"
                style={{
                  backgroundImage: "url('/community_pharmacy.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="text-[#171a43] w-full h-full rounded-xl flex flex-col items-center justify-end partner-art-inner">
                  {/* <div className="h-14 w-14 bg-[#28b7a5] text=[#171a43] rounded-[50%] grid place-items-center text-5xl font-extrabold pharmacy-cross">
                    +
                  </div> */}
                  {/* <Store size={72} className="text-[#168e83] my-4" /> */}
                  <h3 className="text-xl font-extrabold text-white">
                    Care in your community
                  </h3>
                  {/* <p className="text-sm mt-2 text-yellow-200">
                    Participating pharmacies, connected.
                  </p> */}
                  <div className=" bg-[#fff] rounded-md py-3 px-4 flex items-center gap-2 text-sm font-semibold shadow-md partner-caption mb-3">
                    <ShieldCheck className="w-10 text-[#168e83]" /> Partner
                    verification is part of the network process.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* healthcare professionals section */}
          <section
            className="w-full px-3 py-4 mt-4 bg-[#171a43] text-white section-pad"
            id="professionals"
          >
            <div className="max-w-7xl mx-auto my-8 container">
              <SectionHeading
                eyebrow="Healthcare professionals"
                title="Be part of a connected care network."
                text="NogahCare welcomes enquiries from qualified healthcare professionals interested in appropriate remote healthcare service opportunities."
                centered
              />

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 professional-grid text-slate-950">
                <article className="border-[1px] border-[#e1e6ef] rounded-xl p-7 bg-[#fff] professional-card">
                  <div className="bg-[#eef3fb] text-[#3d70c9] rounded-lg grid place-items-center w-14 h-14 professional-icon">
                    <Stethoscope size={40} />
                  </div>

                  <h3 className="text-lg mb-2 text-[#171a43]">Doctors</h3>

                  <p className="text-sm min-h-16">
                    Doctor registration and enquiry pathway, with professional
                    details and verification steps.
                  </p>

                  <a
                    href="#professional-enquiry"
                    className="flex items-center gap-2 text-[#168e83] text-sm font-bold mt-4 hover:gap-3 text-link"
                  >
                    Enquire to join <ArrowRight size={15} />
                  </a>
                </article>
                <article className="border-[1px] border-[#e1e6ef] rounded-xl p-7 bg-[#fff] professional-card">
                  <div className="bg-[#eef3fb] text-[#3d70c9] rounded-lg grid place-items-center w-14 h-14 professional-icon">
                    <Pill size={40} />
                  </div>
                  <h3 className="text-lg mb-2 text-[#171a43]">Pharmacists</h3>
                  <p className="text-sm min-h-16">
                    Pharmacist partnership enquiries for medicine-related
                    support and pharmacy services.
                  </p>
                  <a
                    href="#professional-enquiry"
                    className="flex items-center gap-2 text-[#168e83] text-sm font-bold mt-4 hover:gap-3 text-link"
                  >
                    Enquire to join <ArrowRight size={15} />
                  </a>
                </article>
                <article className="border-[1px] border-[#e1e6ef] rounded-xl p-7 bg-[#fff] professional-card">
                  <div className="bg-[#eef3fb] text-[#3d70c9] rounded-lg grid place-items-center w-14 h-14 professional-icon">
                    <ShieldCheck size={40} />
                  </div>
                  <h3 className="text-lg mb-2 text-[#171a43]">Verification</h3>
                  <p className="text-sm min-h-16">
                    Relevant professional information should be reviewed before
                    network participation is activated.
                  </p>
                  <a
                    href="#professional-enquiry"
                    className="flex items-center gap-2 text-[#168e83] text-sm font-bold mt-4 hover:gap-3 text-link"
                  >
                    Learn about joining <ArrowRight size={15} />
                  </a>
                </article>
              </div>
            </div>
          </section>

          {/* trust, safety & privacy */}
          <section
            className="w-full px-3 py-4 mt-4 section-pad section-soft"
            id="trust"
          >
            <div className="max-w-7xl mx-auto my-8 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16 items-center container trust-grid">
              <div>
                <SectionHeading
                  eyebrow="Trust, safety and privacy"
                  title="Care begins with trust."
                  text="The NogahCare experience should be supported by transparent processes and responsible handling of information."
                />

                {/* <p className="text-sm mb-4 mt-6">
                  Participating pharmacy and professional verification, patient
                  consent, prescription handling and privacy practices should be
                  clearly explained before services are used.
                </p> */}
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-[#168e83] text-sm font-bold mt-4 hover:gap-3 transition-all duration-300 text-link"
                >
                  Ask us about our approach <ArrowRight size={15} />
                </a>
              </div>
              {/*  */}
              <div className="background-[#fff] rounded-xl py-3 px-6 shadow-lg safety-list">
                {[
                  "Verification of participating pharmacies",
                  "Verification of healthcare professionals",
                  "Protection of personal and health information",
                  "Patient consent and privacy",
                  "Secure handling of prescriptions",
                  "Responsible healthcare referrals",
                ].map((x, i) => (
                  <div
                    key={x}
                    className="grid grid-cols-[34px_1fr_20px] items-center gap-3 py-4 border-b-2 border-b-[#e1e6ef]"
                  >
                    <span className="text-sm font-extrabold text-[#168e83]">
                      0{i + 1}
                    </span>
                    <b className="text-[#171a43] text-sm">{x}</b>
                    <ShieldCheck size={30} className="text-[#168e83]" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* health education section */}
          <section
            className="w-full px-3 py-4 mt-4 bg-[#171a43] text-white section-pad"
            id="resources"
          >
            <div className="max-w-7xl mx-auto py-8 container">
              <SectionHeading
                eyebrow="Health education"
                title="Information to help you make informed choices."
                text="A resource centre for health tips, medication safety, preventive healthcare and awareness."
                centered
              />

              {/* text content */}
              <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-5 resource-grid">
                {[
                  [
                    "Medication safety",
                    "Practical education about safe and responsible medicine use. Practical education about safe and responsible medicine use. Practical education about safe and responsible medicine use. Practical education about safe and responsible medicine use. ",
                    "MEDICINES",
                  ],
                  [
                    "Preventive healthcare",
                    "Information on prevention, screening and healthy habits. Information on prevention, screening and healthy habits. Information on prevention, screening and healthy habits. Information on prevention, screening and healthy habits.",
                    "PREVENTION",
                  ],
                  [
                    "Health awareness",
                    "Accessible articles about common health topics and conditions. Accessible articles about common health topics and conditions. Accessible articles about common health topics and conditions.",
                    "WELLBEING",
                  ],
                ].map(([title, desc, tag], i) => (
                  <article
                    className={`hover:scale-105 transition-all duration-300 border-[1px] border-[#e1e6ef] rounded-xl overflow-hidden bg-[#fff] resource-card resource-${i + 1}`}
                    key={i}
                  >
                    <div className="flex h-40 items-center justify-center relative text-[#fff] bg-gradient-to-tr from-[#22305e] to-[#557f9c] resource-visual">
                      <span className="absolute left-4 top-4 text-xs font-extrabold text-[#ffffffbf]">
                        {tag}
                      </span>
                      <BookOpen size={42} />
                    </div>
                    <div className="p-5 resource-content">
                      <small className="text-xs text-[#168e83] font-extrabold cursor-pointer">
                        HEALTH EDUCATION
                      </small>
                      <h3 className="text-lg text-[#171a43] my-2 cursor-pointer">
                        {title}
                      </h3>
                      <p className="text-xs text-slate-900 line-clamp-3">
                        {desc}
                      </p>

                      <a
                        href="#contact"
                        className="flex items-center gap-2 text-[#168e83] text-sm font-bold mt-4 hover:gap-3 transition-all duration-300 text-link"
                      >
                        Read more <ArrowRight size={15} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* video content */}
              <div className="mt-12 mb-6 grid grid-cols-1 md:grid-cols-3 gap-5 resource-grid">
                {/* https://www.youtube.com/watch?v=UONICILNjgY */}
                {[
                  ["Medication safety", "E_LVUM4-d70", "MEDICINES"],
                  ["Medication safety", "dWF2fgUiw3I", "MEDICINES"],
                  ["Medication safety", "hk49xLQGUhU", "MEDICINES"],
                ].map(([title, videoId, tag], i) => (
                  <article
                    className={`border-[1px] border-[#e1e6ef] rounded-xl overflow-hidden bg-[#fff] resource-card resource-${i + 1}`}
                    key={i + title}
                  >
                    <div className="flex h-60 items-center justify-center relative text-[#fff] bg-gradient-to-tr from-[#22305e] to-[#557f9c] w-full aspect-video resource-visual">
                      <iframe
                        className="w-full h-full rounded-xl"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    {/* <div className="p-5 resource-content">
                        <small className="text-xs text-[#168e83] font-extrabold">
                          HEALTH EDUCATION
                        </small>
                        <h3 className="text-lg text-[#171a43] my-2">{title}</h3>
  
                        <Link
                          to="www.youtube.com"
                          className="flex items-center gap-2 text-[#168e83] text-sm font-bold mt-4 hover:gap-3 transition-all duration-300 text-link"
                        >
                          Watch on YouTube <ArrowRight size={15} />
                        </Link>
                      </div> */}
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* customer feedback */}
          <section
            className="w-full px-3 py-4 mt-4 section-pad feedback-section"
            id="feedback"
          >
            <div className="max-w-7xl mx-auto my-8 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16 place-items-center container feedback-grid">
              <div>
                <SectionHeading
                  eyebrow="Customer feedback"
                  title="Your experience matters."
                  text="We want to keep improving the way people access healthcare and pharmacy services."
                />

                <a
                  href="#contact"
                  className="flex items-center gap-2 text-[#168e83] text-sm font-bold mt-4 hover:gap-3 transition-all duration-300 text-link"
                >
                  Share feedback <ArrowRight size={15} />
                </a>
              </div>
              {/*  */}
              <div className="bg-gradient-to-tr from-[#f2f6fc] to-[#e7f7f4] border-[1px] rounded-2xl px-2 py-10 text-center feedback-placeholder">
                <span className="h-14 w-14 rounded-2xl bg-[#fff] text-[#168e83] grid place-items-center mb-4 feedback-icon">
                  <MessageCircle />
                </span>
                <small className="text-xs font-extrabold text-[#168e83]">
                  TESTIMONIAL SPACE
                </small>
                <h3 className="text-xl text-[#171a43] my-2">
                  Real voices. Real experiences.
                </h3>
                <div className="md:min-w-[600px] text-left my-3 w-full mx-auto">
                  <div className="flex items-start justify-start gap-2 w-full md:max-w-96 mx-auto bg-white p-3 rounded-xl">
                    <FaRegUserCircle size={40} className="place-items-start" />
                    <div className="flex-1">
                      <h1 className="text-lg">
                        User Fullname{" "}
                        <span className="text-xs text-gray-400">
                          10/12/2026
                        </span>
                      </h1>
                      <p className="text-sm text-slate-800 leading-4">
                        Customer testimonials and ratings will appear here after
                        they have been collected and approved for publication.
                      </p>

                      <div className="flex items-center gap-1 mt-1">
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-yellow-400" />
                        <FaStar className="text-yellow-400" />
                        <FaStarHalfAlt className="text-yellow-400" />
                        <FaStar className="text-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>

                <span
                  className="max-w-fit mx-auto w-full flex items-center justify-center gap-2 font-xs
                 font-bold text-[#526078] mt-5 feedback-footnote"
                >
                  <ShieldCheck size={20} className="text-[#168e83]" />{" "}
                  <span className="flex-1">
                    Only genuine feedback, shared with permission.
                  </span>
                </span>
              </div>
            </div>
          </section>

          {/* faqs section */}
          <section
            className="w-full px-3 py-4 mt-4 bg-[#171a43] text-white section-pad section-soft"
            id="faq"
          >
            <div className="max-w-7xl mx-auto my-8 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-16 container faq-grid">
              <div>
                <SectionHeading
                  eyebrow="Frequently asked questions"
                  title="Good questions deserve clear answers."
                  text="Find out more about the NogahCare platform, its services and partnership opportunities."
                />
              </div>

              {/*  */}
              <div className="border-t-[1px] border-t-[#eef3fb] faq-list">
                {faqs.map(([q, a], i) => (
                  <div
                    className={`border-b-[1px] border-b-[#eef3fb] faq-item ${activeFaq === i ? "active" : ""}`}
                    key={q}
                  >
                    <button
                      className="w-full border-none bg-transparent py-4 flex items-center justify-between text-left text-[#28b7a5] font-extrabold text-sm cursor-pointer"
                      onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                      aria-expanded={activeFaq === i}
                    >
                      <span>{q}</span>
                      <ChevronDown size={18} />
                    </button>
                    {activeFaq === i && (
                      <p className="-mt-3 text-sm max-w-[90%] font-light">
                        {a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full bg-gray-600 h-[1.5px] mb-3"></div>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#168e83] text-white px-4 py-2 text-sm font-bold hover:gap-3 transition-all duration-300 max-w-fit mx-auto rounded-md mb-6 text-link"
            >
              Read More <ArrowRight size={15} />
            </a>
          </section>

          {/* enquiry section */}
          <section className="w-full px-3 py-4 mt-4 section-pad" id="enquiries">
            <div className="max-w-7xl mx-auto my-8 grid grid-cols-1 md:grid-cols-2 gap-20 container enquiry-grid">
              <div id="pharmacy-enquiry">
                <SectionHeading
                  eyebrow="Pharmacy partnerships"
                  title="Grow your pharmacy reach with NogahCare."
                  text="Tell us about your pharmacy and our team can follow up about partnership requirements."
                />
                <SocialMediaContacts />
                {/* <EnquiryForm
                  type="pharmacy"
                  title="Pharmacy partner enquiry"
                  compact
                /> */}
              </div>

              <div id="professional-enquiry">
                <SectionHeading
                  eyebrow="Professional network"
                  title="Interested in joining our healthcare network?"
                  text="Qualified healthcare professionals can use this form to register their interest."
                />
                <SocialMediaContacts />
                {/* <EnquiryForm
                  type="professional"
                  title="Healthcare professional enquiry"
                  compact
                /> */}
              </div>
            </div>
          </section>

          {/* call to action page */}
          <section className="w-full px-3 py-4 mt-8 bg-gradient-to-tr from-[#202653] to-[#2e4779] cta-band">
            <div className="max-w-7xl mx-auto my-8 flex items-center justify-between gap-6 container cta-content">
              <div>
                <span className="mb-2 text-[#80e2d5] eyebrow eyebrow-light">
                  Start with NogahCare
                </span>
                <h2 className="text-[clamp(26px,3vw,38px)] text-[#fff] mb-2">
                  Your healthcare journey starts here.
                </h2>
                <p className="text-[#cbd4e9] text-sm">
                  Take a step towards more convenient access to healthcare
                  services and medicines.
                </p>
              </div>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-semibold text-xs text-nowrap cursor-pointer bg-[#28b7a5] hover:bg-[#348d81] text-[#171a43] hover:scale-105 transition-all duration-300 btn btn-teal"
              >
                Contact us <ArrowRight size={17} />
              </a>
            </div>
          </section>

          {/* contact us section */}
          <section
            className="w-full px-3 py-4 mt-4 section-pad contact-section"
            id="contact"
          >
            <div className="max-w-7xl mx-auto my-8 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-16 place-items-start container contact-grid">
              <div>
                <SectionHeading
                  eyebrow="Contact NogahCare"
                  title="We would be glad to hear from you."
                  text="Send a general enquiry and the team can follow up using the contact details you provide."
                />
                <div className="flex gap-3 items-center mt-5 contact-detail">
                  <Mail className="w-5 text-[#168e83]" />
                  <span className="grid">
                    <b className="text-[#171a43] text-sm">Email</b>
                    <a
                      href={`${company_info?.contact_details[2]?.url}${company_info?.contact_details[2]?.name}`}
                      className="text-[#687087] text-sm hover:text-blue-600 hover:underline underline-offset-2 -mt-1"
                    >
                      {`${company_info?.contact_details[2]?.name}`}
                    </a>
                  </span>
                </div>
                <div className="flex gap-3 items-center mt-5 contact-detail">
                  <Phone className="w-5 text-[#168e83]" />
                  <span className="grid">
                    <b className="text-[#171a43] text-sm">Call</b>
                    <a
                      href={`${company_info?.contact_details[1]?.url}${company_info?.contact_details[1]?.name}`}
                      className="text-[#687087] text-sm hover:text-blue-600 hover:underline underline-offset-2 -mt-1"
                    >
                      {`${company_info?.contact_details[1]?.name}`}
                    </a>
                  </span>
                </div>
                <div className="flex gap-3 items-center mt-5 contact-detail">
                  <Phone className="w-5 text-[#168e83]" />
                  <span className="grid">
                    <b className="text-[#171a43] text-sm">WhatsApp</b>
                    <a
                      href={`${company_info?.contact_details[0]?.url}${company_info?.contact_details[0]?.name}`}
                      className="text-[#687087] text-sm hover:text-blue-600 hover:underline underline-offset-2 -mt-1"
                    >
                      +{company_info?.contact_details[0]?.name}
                    </a>
                  </span>
                </div>
                <div className="flex gap-3 items-center mt-5 contact-detail">
                  <MapPin className="w-5 text-[#168e83]" />
                  <span className="grid">
                    <b className="text-[#171a43] text-sm">Address</b>
                    <small className="text-[#687087] text-sm -mt-1">
                      Business address, where applicable
                    </small>
                  </span>
                </div>
              </div>
              <EnquiryForm type="contact" title="Send us a message" />
            </div>
          </section>
        </main>
      </>
    </MainLayout>
  );
}
