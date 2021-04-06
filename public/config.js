let e = 15;
let t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
let a = t.length;
let randomStr = "";

for (i = 0; i < e; i++) randomStr += t.charAt(Math.floor(Math.random() * a));
window.config = {
  wsaddress: `ws://172.18.1.180:8080/imserver/${randomStr}`,
  proxyAddress: "/yzapi"
  // wsaddress: "ws://121.40.165.18:8800"
  // wsaddress: "ws://139.155.242.191:8080/connectWebSocket/001"
};
