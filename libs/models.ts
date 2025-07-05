export interface WifiInfo {
  ssid?: string;
  password?: string;
  encryption?: "WPA" | "WEP" | "None";
  hidden?: boolean;
}
