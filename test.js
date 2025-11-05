const SDK = require("@fonoster/sdk");

async function checkDomain() {
    const client = new SDK.Client({
      endpoint: "localhost:50051",
      allowInsecure: true,
      accessKeyId: "WO00000000000000000000000000000000",
    });
    console.log("Creating SIP Domain...");
    const domains = new SDK.Domains(client);

    await client.login("admin@fonoster.local", "verifcontact");
    const domainList = await domains.getDomain("6cd8df6f-1e37-4332-b182-c871dbe13f2f")
    console.log("=== Registered Domains ===");
    console.log(domainList)
}

checkDomain();

