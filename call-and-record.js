const SDK = require("@fonoster/sdk");

async function call() {
  try {
    const client = new SDK.Client({
      endpoint: "localhost:8449",
      allowInsecure: true,
      accessKeyId: "WO00000000000000000000000000000000",
    });
    await client.login("admin@fonoster.local", "changeme");
    const calls = new SDK.Calls(client);
    const response = await calls.createCall({
        from: "1001",
        to: "tel:9999",
        appRef: "b50b18ba-130b-451e-9308-b2fa7cceb098" // Your "My Test App" ref
    });
    const { ref, statusStream } = response;

    console.log(ref); // Call reference
  } catch (error) {
    console.error("Error:", error.message);
    console.error("Details:", error);
  }
}

call();