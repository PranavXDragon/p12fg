import dns from "dns";

// Configure DNS to prefer IPv4 at module load time
dns.setDefaultResultOrder("ipv4first");

// Also set the lookup order
dns.resolve4("profile.ye4nihv.mongodb.net", (err, addresses) => {
  if (err) {
    console.log("DNS prefetch result:", err.code);
  } else {
    console.log("DNS prefetch successful:", addresses);
  }
});

export default function initializeDns() {
  return true;
}
