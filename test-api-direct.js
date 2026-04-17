// Test API endpoint directly
async function testAPI() {
  console.log("🧪 Testing API Endpoint...\n");

  // Test data
  const formData = {
    name: "Pranav Navghare",
    email: "pranav@example.com",
    phone: "9876543210",
    branch: "Computer Science",
    education: "Bachelor",
    skills: ["JavaScript", "React", "MongoDB"]
  };

  try {
    console.log("📤 Submitting form to http://localhost:3000/api/forms");
    const response = await fetch("http://localhost:3000/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    console.log(`Status: ${response.status}`);
    console.log(`Content-Type: ${response.headers.get('content-type')}`);
    
    const text = await response.text();
    console.log(`Response: ${text.substring(0, 200)}`);

    if (response.ok) {
      const data = JSON.parse(text);
      console.log("\n✅ SUCCESS! Data saved to MongoDB!");
      console.log("Data:", data);
    } else {
      console.log("\n❌ Error response received");
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

testAPI();
