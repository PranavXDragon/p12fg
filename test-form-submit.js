// Test form submission to local API
async function testFormSubmission() {
  const testData = {
    name: "Pranav Navghare",
    email: "pranav@example.com",
    phone: "9876543210",
    branch: "Computer Science",
    education: "Bachelor",
    skills: ["JavaScript", "React", "MongoDB", "Node.js"]
  };

  console.log("📤 Sending form data to http://localhost:3000/api/forms");
  console.log("Data:", testData);
  console.log("");

  try {
    // POST request to submit form
    const response = await fetch("http://localhost:3000/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testData)
    });

    const result = await response.json();

    console.log(`✅ Status: ${response.status}`);
    console.log("Response:", result);

    if (response.ok) {
      console.log("");
      console.log("✅ Form submitted successfully!");
      console.log("📊 Data saved to MongoDB!");
      
      // GET request to verify data was saved
      console.log("");
      console.log("🔄 Fetching all submissions...");
      
      const getResponse = await fetch("http://localhost:3000/api/forms");
      const submissions = await getResponse.json();
      
      console.log(`✅ Found ${submissions.data.length} submission(s):`);
      submissions.data.forEach((sub, i) => {
        console.log(`  ${i + 1}. ${sub.name} (${sub.email})`);
      });
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

testFormSubmission();
