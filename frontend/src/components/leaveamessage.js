import GetComments from "./../utils/getcomments";
import Commentinputbox from "../htmlelements/commentinputbox";
import { GetPaddingWidth } from "../utils/adjustelementwidth";

var Msg = ({ blog = "00000000", blogcomment = false }) => {
  const x1=GetPaddingWidth(600);
  const x = GetPaddingWidth(800);
  const y = GetPaddingWidth(1000);

  
  return (
    <div style={{ overflowX: "hidden" }}>
      <br />
      {blogcomment ? (
        <>
          <GetComments blog={blog} paddl={200} paddr={x} />
          <div style={{ paddingLeft: Math.max(200, x1), paddingRight: x1 }}>
            <Commentinputbox id="-1" blog={blog} />
          </div>{" "}
        </>
      ) : (
        <>
          <div style={{ paddingLeft: x1, paddingRight: x1 }}>
            <Commentinputbox id="-1" blog={blog} />
          </div>
          <GetComments blog={blog} paddl={y} paddr={y}/>
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
