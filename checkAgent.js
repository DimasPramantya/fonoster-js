const SDK = require("@fonoster/sdk");

async function checkAgents() {
  try {
    const client = new SDK.Client({
      endpoint: "localhost:8449",
      allowInsecure: true,
      accessKeyId: "WO00000000000000000000000000000000",
    });

    await client.login("admin@fonoster.local", "changeme");
    
    const agents = new SDK.Agents(client);
    const result = await agents.listAgents({ pageSize: 20 });
    
    console.log("=== Raw Response ===");
    console.log(JSON.stringify(result, null, 2));
    
    console.log("\n=== All Registered Agents ===\n");
    
    // Try different possible response formats
    const agentList = result.agents || result.items || result;
    
    if (!agentList || agentList.length === 0) {
      console.log("❌ No agents found!");
    } else {
      agentList.forEach(async (agent, index) => {
        console.log(`Agent ${index + 1}:`);
        console.log(`  Name: ${agent.name}`);
        console.log(`  Username: ${agent.username}`);
        console.log(`  Enabled: ${agent.enabled}`);
        console.log(`  Privacy: ${agent.privacy}`);
        console.log(`  Ref: ${agent.ref}`);
        console.log(`  Created: ${agent.createdAt}`);
        console.log(`  domain: ${agent.password}`);
        console.log();
        const retrieved = await agents.getAgent(agent.ref);
        console.log(JSON.stringify(retrieved, null, 2));
        console.log();
      });
    }
    
  } catch (error) {
    console.error("❌ Error:", error.message);
    console.error("Stack:", error.stack);
  }
}

checkAgents();