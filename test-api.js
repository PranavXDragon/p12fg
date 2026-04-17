// Quick test script to verify API works
const testAPI = async () => {
  try {
    // Test GET
    console.log("Testing GET /api/forms...");
    const getRes = await fetch("http://localhost:3000/api/forms");
    const getData = await getRes.json();
    console.log(`GET Status: ${getRes.status}`);
    console.log(`GET Response:`, getData);

    // Test POST
    console.log("\nTesting POST /api/forms...");
    const postRes = await fetch("http://localhost:3000/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        phone: "1234567890",
        branch: "Computer Science",
        education: "Bachelor",
        skills: ["JavaScript", "React"],
      }),
    });
    const postData = await postRes.json();
    console.log(`POST Status: ${postRes.status}`);
    console.log(`POST Response:`, postData);
  } catch (err) {
    console.error("Error:", err.message);
  }
};

testAPI();
