const VoiceServer = require("@fonoster/voice").default;

new VoiceServer().listen(async (req, voice) => {
  console.log("==============================================");
  console.log("📞 INCOMING CALL DETECTED!");
  console.log("==============================================");
  
  // Log all call details
  console.log("Call Details:");
  console.log("  - Session Ref:", req.sessionRef);
  console.log("  - App Ref:", req.appRef);
  console.log("  - From Number:", req.callerNumber);
  console.log("  - To Number:", req.ingressNumber);
  console.log("  - Caller Name:", req.callerName || "Unknown");
  console.log("  - Timestamp:", new Date().toISOString());
  
  // Log the entire request object
  console.log("\nFull Request Object:");
  console.log(JSON.stringify(req, null, 2));
  
  try {
    await voice.record()
    console.log("\n📱 Answering call...");
    await voice.answer();
    console.log("✅ Call answered successfully");
    
    console.log("\n🗣️  Speaking text to caller...");
    await voice.say("Hello! This is your self-hosted Fonoster.");
    console.log("✅ Text-to-speech completed");
    
    console.log("\n📴 Hanging up...");
    await voice.hangup();
    console.log("✅ Call ended successfully");
    
  } catch (error) {
    console.error("\n❌ ERROR during call:");
    console.error("  Error Message:", error.message);
    console.error("  Error Stack:", error.stack);
  }
  
  console.log("==============================================");
  console.log("Call session ended\n");
});

console.log("🚀 Voice Application Server Started");
console.log("📡 Listening on port: 50061");
console.log("⏰ Started at:", new Date().toISOString());
console.log("Waiting for incoming calls...\n");