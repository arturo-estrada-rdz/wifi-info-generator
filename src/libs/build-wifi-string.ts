import { WifiInfo } from './models';

/**
 * Builds a Wi-Fi configuration string for QR code generation.
 *
 * @param {WifiInfo} wifiInfo - The Wi-Fi information object containing SSID, password, encryption type, and hidden status.
 * @returns {string} The formatted Wi-Fi string for QR code generation.
 */
export function buildWifiString({ ssid, password, encryption, hidden }: WifiInfo): string {
  const enc = encryption === 'None' ? '' : encryption;
  const hiddenStr = hidden ? 'H:true;' : '';
  return `WIFI:T:${enc};S:${ssid};P:${password};${hiddenStr};`;
}
