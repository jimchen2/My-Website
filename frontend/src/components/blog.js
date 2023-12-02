import Card1 from "../utils/card";
import axios from "axios";

var a = [],
  b = [],
  c = [],
  arr = [];

function Blog() {
  var get1 = () => {
    axios
      .get("https://jimchen.uk/blog")
      .then(function (res) {
        console.log("get blog successful from blog.js");
        for (var i = 0; i < res.data.length; i++) {
          a[i] = JSON.stringify(res.data[i].title).split('"')[1];
          b[i] = JSON.stringify(res.data[i].body).substring(1, 10000);
          c[i] = JSON.stringify(res.data[i].date).split('"')[1];
          var b1 = "";
          var state = 0;
          for (var j = 0; j < b[i].length; j++) {
            if (b[i][j] === "<") state = 1;
            if (state === 0) b1 = b1 + b[i][j];
            if (b[i][j] === ">") state = 0;
          }
          arr[i] = (
            <Card1 title={a[i]} text={b1.substring(0, 150)} date={c[i]} />
          );
        }
      })
      .catch((err) => {
        console.log("did not get blog from blog.js" + err);
      });
  };
  get1();
  return (
    <>
      <br />
      <br />
      <br />
      <div>{arr}</div>
      <br />
      <br />
      <br />
    </>
  );
}
export default Blog;
