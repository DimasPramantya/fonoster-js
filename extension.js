const SDK = require("@fonoster/sdk");

async function createTestNumber() {
  try {
    const client = new SDK.Client({
      endpoint: "localhost:50051",
      allowInsecure: true,
      accessKeyId: "WO00000000000000000000000000000000",
    });

    await client.login("admin@fonoster.local", "verifcontact");
    
    const numbers = new SDK.Numbers(client);

    // Create extension 9999 that routes to your Voice App
    const number = await numbers.createNumber({
      name: "Voice App Test Extension",
      telUrl: "tel:9999",
      appRef: "8834ed7d-0c2f-494a-b1ab-f5fcc5b256ad", // Your "My Test App" ref
      city: "Test",
      country: "Test",
      countryIsoCode: "TT",
    });

    console.log("✅ Test extension created successfully!");
    console.log("\n📞 Extension Details:");
    console.log("   Number: 9999");
    console.log("   Name:", number.name);
    console.log("   App Ref:", number.appRef);
    console.log("   Ref:", number.ref);
    
    console.log("\n🎯 How to test:");
    console.log("   1. Make sure your Voice Server is running (node voice-app.js)");
    console.log("   2. Make sure ngrok is running (ngrok tcp 50061)");
    console.log("   3. From MicroSIP or Zoiper, dial: 9999");
    console.log("   4. Watch the logs in your Voice Server terminal!");
    
  } catch (error) {
    console.error("❌ Error:", error.message);
    console.error("Full error:", error);
  }
}

createTestNumber();