const SDK = require("@fonoster/sdk");

async function createAgents() {
  try {
    const client = new SDK.Client({
      endpoint: "localhost:8449",
      allowInsecure: true,
      accessKeyId: "WO00000000000000000000000000000000",
    });

    console.log("Logging in...");
    await client.login("admin@fonoster.local", "changeme");
   
    const credential = new SDK.Credentials(client);
    const cred =  await credential.createCredentials({
        name: "agent",
        username: "agent",
        password: "agent"
    });
    console.log("Credential created:", cred);

  } catch (error) {
    console.error("Error:", error.message);
    console.error("Details:", error);
  }
}

createAgents();