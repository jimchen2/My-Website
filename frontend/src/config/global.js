let globalIpAddress = "unknown"; // Default IP address

export function setIpAddress(ip) {
  globalIpAddress = ip;
}

export function getIpAddress() {
  return globalIpAddress;
}

export let paddingtop = 80;
export let customHtml =
  "<br/><style>pre{background-color:#eeeeee;font-size:12px;}h1{font-size:30px}h2{font-size:25px}h3{font-size:20px}p{font-size:16px}</style>";
