function Box(prop) {
  var w = window.innerWidth;
  var x;
  if (w > 660) x = (w - 600) / 2;
  else x = 30;
  return (
    <div
      style={{
        fontSize: "20px",
      }}
    >
      <div
        style={{
          fontFamily: "'Ubuntu-mono', sans-serif",
          marginLeft: x + "px",
          marginRight: x + "px",
          fontSize: "15px",
        }}
      >
        <hr />
        <span style={{ color: "blue" }}> {prop.user}</span>
        <span
          style={{
            fontFamily: "'Ubuntu-mono', sans-serif",
            position: "relative",
            left: "30px",
          }}
        >
          {prop.date}
        </span>{" "}
      </div>

      <div
        style={{
          fontFamily: "'Roboto', sans-serif",
          paddingLeft: x + "px",
          paddingRight: x + "px",
          whiteSpace: "pre-wrap",
          fontSize: "17px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            left: "30px",
          }}
        >
          {prop.comment}
        </div>
      </div>
    </div>
  );
}

export default Box;
