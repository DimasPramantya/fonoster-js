const SDK = require("@fonoster/sdk");

// Replace these with your values
const client = new SDK.Client({ 
  accessKeyId: "WO00000000000000000000000000000000",
  endpoint: "localhost:50051",
  allowInsecure: true
});

// Use your actual username and password here
client.login("admin@fonoster.local", "verifcontact").then(async () => {
  const apikeys = new SDK.ApiKeys(client);

  apikeys.createApiKey({
    role: "WORKSPACE_ADMIN",
  }).then(async (result) => {
    console.log(result);
    const token = client.getAccessToken()
    console.log("Access Token:", token);
    const refreshToken = client.getRefreshToken()
    console.log("Refresh Token:", refreshToken);
  });
});