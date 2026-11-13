import { Router } from "express";
import Enquiry from "../models/Enquiry.js";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const { type, name, email, phone = "", organisation = "", message } = req.body || {};
    const allowedTypes = ["contact", "pharmacy", "professional"];
    if (!allowedTypes.includes(type)) {
      return res.status(400).json({ message: "Please select a valid enquiry type." });
    }
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ message: "Name, email and message are required." });
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({ message: "Please provide a valid email address." });
    }
    const enquiry = await Enquiry.create({
      type, name, email, phone, organisation, message
    });
    return res.status(201).json({
      message: "Thank you. Your enquiry has been received.",
      enquiryId: enquiry._id
    });
  } catch (error) {
    next(error);
  }
});

export default router;
