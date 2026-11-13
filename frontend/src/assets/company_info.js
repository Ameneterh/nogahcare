import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export const company_info = {
  name: "NogahCare",
  tagline: "Healthcare and Medicines, Made More Accessible",
  // address: "No 5 Irode Matthew Street Ado Ekiti, Ekiti State",

  contact_details: [
    {
      _id: 1,
      name: "2347053604735",
      url: "https://wa.me/",
      color: "green-600",
      icon: FaWhatsapp,
    },
    {
      _id: 2,
      name: "+2347053604735",
      url: "tel:",
      color: "blue-600",
      icon: FiPhoneCall,
    },
    {
      _id: 3,
      name: "contact@nogahcare.com.ng",
      url: "mailto:",
      color: "blue-600",
      icon: MdOutlineMarkEmailRead,
    },
  ],

  socials: [
    {
      _id: 1,
      title: "Facebook",
      name: "nogah_care",
      url: "https://www.facebook.com/",
      color: "blue-600",
      icon: FaFacebookF,
    },
    {
      _id: 2,
      title: "Instagram",
      name: "nogah_care",
      url: "https://www.instagram.com/",
      color: "red-600",
      icon: FaInstagram,
    },
    {
      _id: 3,
      title: "LinkedIn",
      name: "@nogahcare",
      url: "https://www.linkedin.com/",
      color: "blue-600",
      icon: FaLinkedinIn,
    },
    {
      _id: 4,
      title: "Twitter",
      name: "@nogahcare",
      url: "https://www.twitter.com/",
      color: "blue-600",
      icon: FaTwitter,
    },
  ],
};
