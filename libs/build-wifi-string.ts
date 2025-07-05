import { WifiInfo } from "./models";

export function buildWifiString({
  ssid,
  password,
  encryption,
  hidden,
}: WifiInfo): string {
  const enc = encryption === "None" ? "" : encryption;
  const hiddenStr = hidden ? "H:true;" : "";
  return `WIFI:T:${enc};S:${ssid};P:${password};${hiddenStr};`;
}
