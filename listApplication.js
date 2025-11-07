const SDK = require("@fonoster/sdk");

async function listApplications() {
  try {
    const client = new SDK.Client({
      endpoint: "localhost:8449",
      allowInsecure: true,
      accessKeyId: "WO00000000000000000000000000000000",
    });

    await client.login("admin@fonoster.local", "changeme");
    
    const applications = new SDK.Applications(client);
    const appList = await applications.listApplications({ pageSize: 10 });
    
    console.log("=== Registered Applications ===");
    console.log(JSON.stringify(appList, null, 2));
    
  } catch (error) {
    console.error("Error:", error.message);
  }
}

listApplications();