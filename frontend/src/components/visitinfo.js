import axios from "axios";
var x, y, z, ip, co, ci, re;

axios
  .get("https://ipapi.co/json")
  .then(function (res) {
    console.log("get ipapi successful");
    ip = res.data.ip;
    co = res.data.country;
    re = res.data.region;
    ci = res.data.city;
    var post = 1;
    axios.get("https://jimchen.uk/visitinfo").then(function (res1) {
      var index = -1;
      for (var i = res1.data.length - 1; i >= 0; i--) {
        if (res1.data[i].ip === ip) index = i;
      }
      if (index !== -1) {
        if (Date.now() - res1.data[index].now < 300000) post = 0;
      }
      if (post === 1) {
        var d = Date();
        axios
          .post("https://jimchen.uk/visitinfo", {
            ip: ip,
            country: co,
            region: re,
            city: ci,
            browser: navigator.userAgent,
            date: d.toString(),
            now: Date.now(),
          })
          .then(console.log("post visitor info successful"))
          .catch(console.log("did not post visitor info"));
      }
    });
  })
  .catch((err) => {
    console.log("did not get apapi");
  });

var VisitInfo = () => {
  var get1 = () => {
    axios
      .get("http://10.142.79.170:5000/example/get")
      .then(function (response) {
        console.log("get visitor info");
        x = response.data;
        for (var i = 0; i < x.length; i++) {
          delete x[i]["now"];
          delete x[i]["_id"];
        }
        y = JSON.stringify(x);
        z = y.split("}");
        for (var k = 0; k < z.length - 1; k++) z[k] = z[k] + "}\n";
      })
      .catch((error) => {
        console.log("did not get visitor info");
      });
  };
  get1();
  return (
    <div style={{ fontSize: "15px", whiteSpace: "pre-wrap" }}>
      <br />
      <br />
      {z}
    </div>
  );
};

export default VisitInfo;
