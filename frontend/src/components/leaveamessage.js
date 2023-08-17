import GetComments from "./../utils/getcomments";
import Commentinputbox from "../htmlelements/commentinputbox";
import { GetPaddingWidth } from "../utils/adjustelementwidth";

var Msg = ({ blog = "00000000", blogcomment = false }) => {
  const x = GetPaddingWidth(600);

  return (
    <div style={{ overflowX: "hidden" }}>
      <br />
      {blogcomment ? (
        <>
          <GetComments blog={blog} />
          <div style={{ paddingLeft: x, paddingRight: x }}>
            <Commentinputbox id="-1" blog={blog} />
          </div>{" "}
        </>
      ) : (
        <>
          <div style={{ paddingLeft: x, paddingRight: x }}>
            <Commentinputbox id="-1" blog={blog} />
          </div>

          <GetComments blog={blog} />
        </>
      )}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Msg;
