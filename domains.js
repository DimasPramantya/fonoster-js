const SDK = require("@fonoster/sdk");

async function createDomain() {
  try {
    const client = new SDK.Client({
      endpoint: "localhost:8449",
      allowInsecure: true,
      accessKeyId: "WO00000000000000000000000000000000",
    });
    console.log("Creating SIP Domain...");
    const domains = new SDK.Domains(client);

    await client.login("admin@fonoster.local", "changeme");
    let domain;
    try {
      domain = await domains.createDomain({
        name: "Local Domain",
        domainUri: "fonoster.local", // This is the SIP domain
        accessControlListRef: null,
      });
      console.log("✅ Domain created:");
      console.log(`   Domain URI: ${domain.domainUri}`);
      console.log(`   Ref: ${domain.ref}`);
    } catch (e) {
      console.log("⚠️  Domain might already exist:", e.message);
      // Try to list and find existing domain
      const domainList = await domains.listDomains({ pageSize: 10 });
      domain = (domainList.items || [])[0];
      if (domain) {
        console.log("Using existing domain:", domain.domainUri);
      }
    }
    
    
  } catch (error) {
    console.error("❌ Error:", error.message);
    console.error("Stack:", error.stack);
  }
}

createDomain();