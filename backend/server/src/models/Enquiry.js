import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
  type: { type: String, enum: ["contact", "pharmacy", "professional"], required: true, index: true },
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
  phone: { type: String, trim: true, maxlength: 30, default: "" },
  organisation: { type: String, trim: true, maxlength: 160, default: "" },
  message: { type: String, required: true, trim: true, minlength: 5, maxlength: 3000 },
  status: { type: String, enum: ["new", "in_progress", "resolved"], default: "new", index: true }
}, { timestamps: true });

export default mongoose.model("Enquiry", enquirySchema);
