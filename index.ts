import QRCode from "qrcode";
import { buildWifiString, getArgs } from "./libs";

async function main() {
  const args = await getArgs();
  const data = buildWifiString(args);
  const filename = `wifi-qr-${args.ssid.replace(/[^a-zA-Z0-9]/g, "_")}.png`;

  console.log(`\n📶 Generating Wi-Fi QR for: ${args.ssid}\n`);
  console.log(`Data: ${data}\n`);

  try {
    await QRCode.toFile(filename, data, { width: 300 });
    console.log(`✅ QR code saved as ${filename}`);
  } catch (error) {
    console.error("❌ Error generating QR code:", error);
  }
}

main();
