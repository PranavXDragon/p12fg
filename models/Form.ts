import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
    },
    phone: {
      type: String,
      required: [true, "Please provide a phone number"],
    },
    branch: {
      type: String,
      required: [true, "Please provide a branch"],
    },
    education: {
      type: String,
      required: [true, "Please provide education"],
    },
    skills: {
      type: [String],
      required: [true, "Please provide at least one skill"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Form || mongoose.model("Form", formSchema);
