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
    console.log("Login successful!");

    const agents = new SDK.Agents(client);
    // await agents.deleteAgent("fb77e7c4-a079-41e6-8118-087f36518344");
    // await agents.deleteAgent("9a12780a-1b9c-4920-944a-30b5dd094ebd");

    // Create Agent 1
    console.log("Creating Agent 1...");
    const agent1 = await agents.createAgent({
      name: "Test Agent 1",
      username: "1001",
      enabled: true,
      maxContacts: 10,
      domainRef: "10898341-3870-4cfc-918f-374ba6bd07cf",
      credentialsRef: "85081cca-2302-4335-9c4d-66a002dd4f88",
    });
    console.log("Agent 1 created:", agent1);

    // Create Agent 2
    console.log("Creating Agent 2...");
    const agent2 = await agents.createAgent({
      name: "Test Agent 2",
      username: "1002",
      enabled: true,
      maxContacts: 10,
      domainRef: "10898341-3870-4cfc-918f-374ba6bd07cf",
      credentialsRef: "85081cca-2302-4335-9c4d-66a002dd4f88",
    });
    console.log("Agent 2 created:", agent2);

    console.log("\n=== SIP Configuration ===");
    console.log("Agent 1 (1001):");
    console.log("  Username: 1001");
    console.log("  Password: test1234");
    console.log("  Domain: Your server IP");
    console.log("  Port: 5060");
    console.log("\nAgent 2 (1002):");
    console.log("  Username: 1002");
    console.log("  Password: test1234");
    console.log("  Domain: Your server IP");
    console.log("  Port: 5060");

  } catch (error) {
    console.error("Error:", error.message);
    console.error("Details:", error);
  }
}

createAgents();