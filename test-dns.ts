const dns = require("dns").promises;

async function testDns() {
  console.log("Testing DNS resolution...\n");

  // Test 1: Simple DNS A record
  try {
    console.log("1. Testing A record (google.com)...");
    const ips = await dns.resolve4("google.com");
    console.log("   ✓ Success:", ips);
  } catch (err) {
    console.log("   ✗ Failed:", err.code);
  }

  // Test 2: MongoDB SRV record
  try {
    console.log("\n2. Testing SRV record (_mongodb._tcp.profile.ye4nihv.mongodb.net)...");
    const servers = await dns.resolveSrv("_mongodb._tcp.profile.ye4nihv.mongodb.net");
    console.log("   ✓ Success:", servers);
  } catch (err) {
    console.log("   ✗ Failed:", err.code);
  }

  // Test 3: Direct hostname
  try {
    console.log("\n3. Testing direct hostname (profile.ye4nihv.mongodb.net)...");
    const ips = await dns.resolve4("profile.ye4nihv.mongodb.net");
    console.log("   ✓ Success:", ips);
  } catch (err) {
    console.log("   ✗ Failed:", err.code);
  }
}

testDns().catch(console.error);
