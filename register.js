const SDK = require("@fonoster/sdk");

async function registerApp() {
  try {
    // Step 1: Create client and login with username/password
    const client = new SDK.Client({
      endpoint: "localhost:50051",
      allowInsecure: true,
      accessKeyId: "WO00000000000000000000000000000000",
    });

    console.log("Logging in...");
    await client.login("admin@fonoster.local", "verifcontact");
    console.log("Login successful!");

    // Step 2: Create application immediately after login
    const applications = new SDK.Applications(client);

    const appConfig = {
      name: "My Test App",
      type: "EXTERNAL",
      endpoint: "0.tcp.ap.ngrok.io:18260",
      textToSpeech: {
        productRef: "tts.deepgram",
        config: {
          voice: "aura-asteria-en"
        }
      }
    };

    console.log("Creating application...");
    const app = await applications.createApplication(appConfig);
    console.log("Application created successfully!");
    console.log("App Ref:", app.ref);
    console.log("Full app details:", JSON.stringify(app, null, 2));
    
    return app.ref;

  } catch (error) {
    console.error("Error:", error.message);
    console.error("Full error:", error);
  }
}

registerApp();