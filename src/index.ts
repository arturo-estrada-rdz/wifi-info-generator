import fs from 'fs';
import path from 'path';
import QRCode from 'qrcode';
import { buildWifiString, getArgs } from './libs';

/**
 * Main function to generate a Wi-Fi QR code.
 * It retrieves the Wi-Fi configuration from command line arguments or prompts the user,
 * builds the Wi-Fi string, and generates a QR code saved as a PNG file.
 */
async function main() {
  const args = await getArgs();
  const data = buildWifiString(args);
  const fileDirectory = path.join(process.cwd(), 'output');
  const filename = `wifi-qr-${args.ssid.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
  const filePath = path.join(fileDirectory, filename);

  console.log(`\n📶 Generating Wi-Fi QR for: ${args.ssid}\n`);
  console.log(`Data: ${data}\n`);

  try {
    await fs.promises.mkdir(fileDirectory, { recursive: true });
    await QRCode.toFile(filePath, data, { width: 300 });
    console.log(`✅ QR code saved as ${filename}`);
  } catch (error) {
    console.error('❌ Error generating QR code:', error);
  }
}

main();
