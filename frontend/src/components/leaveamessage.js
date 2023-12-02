import Box from "../utils/box";
import axios from "axios";
import InputSizesExample from "../utils/form";

var a = [],
  b = [],
  c = [],
  arr = [];
var Msg = () => {
  var get1 = () => {
    axios
<<<<<<< HEAD
      .get("http://10.142.79.170:5000/comment/get")
=======
      .get("https://jimchen.uk/comment")
>>>>>>> bc76ca3 (fixed bugs)
      .then(function (res) {
        console.log("get comment successful");
        for (var i = 0; i < res.data.length; i++) {
          a[i] = JSON.stringify(res.data[i].user).split('"')[1];
          b[i] = JSON.stringify(res.data[i].text).split('"')[1];
          c[i] = JSON.stringify(res.data[i].date).split('"')[1];
          arr[i] = <Box user={a[i]} comment={b[i]} date={c[i]} />;
        }
      })
      .catch((err) => {
        console.log("did not get comment" + err);
      });
  };
  get1();
  return (
    <>
      <div> {InputSizesExample()}</div>
      <br />

      <div>{arr}</div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default Msg;
