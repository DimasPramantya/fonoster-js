// event-listener.js
const { connect, StringCodec } = require("nats");

// Decoder untuk mengubah data event menjadi string
const sc = StringCodec();

async function startListener() {
  try {
    // 1. Terhubung ke server NATS (sekarang terekspos di localhost)
    const nc = await connect({ servers: "nats://localhost:4222" });
    console.log(`📡 Berhasil terhubung ke NATS di nats://localhost:4222`);

    // 2. Berlangganan ke topik event panggilan routr
    // Topik "routr.call.*" akan menyiarkan SEMUA event panggilan
    const sub = nc.subscribe("routr.call.*");
    console.log(`🎧 Mendengarkan di channel 'routr.call.*'...`);
    console.log("-----------------------------------------------");
    console.log("Buat panggilan antar agent Anda untuk melihat event!");

    // 3. Loop untuk memproses setiap event yang masuk
    for await (const m of sub) {
      const eventData = JSON.parse(sc.decode(m.data));
      
      console.log("\n========= EVENT DITERIMA =========");
      console.log(`Channel: ${m.subject}`);
      
      // Mencetak data event yang sudah diformat
      console.log("Data Event:");
      console.log(JSON.stringify(eventData, null, 2));
      console.log("==================================\n");
    }

  } catch (err) {
    console.error("Gagal terhubung atau mendengarkan NATS:", err);
  }
}

startListener();