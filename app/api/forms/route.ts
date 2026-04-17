import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Form from "@/models/Form";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { name, email, phone, branch, education, skills } =
      await request.json();

    // Validate required fields
    if (!name || !email || !phone || !branch || !education || !skills) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create a new form document
    const formData = new Form({
      name,
      email,
      phone,
      branch,
      education,
      skills: Array.isArray(skills) ? skills : [skills],
    });

    // Save to database
    await formData.save();

    return NextResponse.json(
      { message: "Form submitted successfully", data: formData },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error submitting form:", error);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json({ error: messages }, { status: 400 });
    }

    return NextResponse.json(
      { error: error.message || "Error submitting form" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const forms = await Form.find().sort({ createdAt: -1 }).limit(100);

    return NextResponse.json({ data: forms }, { status: 200 });
  } catch (error) {
    console.error("Error fetching forms:", error);
    return NextResponse.json(
      { error: "Error fetching forms" },
      { status: 500 }
    );
  }
}
