let globalIpAddress = "unknown"; // Default IP address

export function setIpAddress(ip) {
  globalIpAddress = ip;
}

export function getIpAddress() {
  return globalIpAddress;
}
