const SDK = require("@fonoster/sdk");

async function createAgents() {
  try {
    const client = new SDK.Client({
      endpoint: "localhost:50051",
      allowInsecure: true,
      accessKeyId: "WO00000000000000000000000000000000",
    });

    console.log("Logging in...");
    await client.login("admin@fonoster.local", "verifcontact");
    console.log("Login successful!");

    const agents = new SDK.Agents(client);
    await agents.deleteAgent("3306ff86-6079-4f31-ac48-6e051ced32eb");
    await agents.deleteAgent("8a9d3efe-f0a4-4229-ba8e-1576c5370e7a");

    // Create Agent 1
    console.log("Creating Agent 1...");
    const agent1 = await agents.createAgent({
      name: "Test Agent 1",
      username: "1001",
      password: "test1234", // SIP password
      privacy: "PRIVATE",
      enabled: true,
      maxContacts: 10,
      domainRef: "6cd8df6f-1e37-4332-b182-c871dbe13f2f"
    });
    console.log("Agent 1 created:", agent1);

    // Create Agent 2
    console.log("Creating Agent 2...");
    const agent2 = await agents.createAgent({
      name: "Test Agent 2",
      username: "1002",
      password: "test1234", // SIP password
      privacy: "PRIVATE",
      enabled: true,
      maxContacts: 10,
      domainRef: "6cd8df6f-1e37-4332-b182-c871dbe13f2f"
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