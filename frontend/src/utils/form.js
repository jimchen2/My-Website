import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function InputSizesExample() {
  const [enteredId, setId] = useState("");
  const [enteredComment, setComment] = useState("");

  const IdChangeHandler = (event) => {
    setId(event.target.value);
  };

  const commentChangeHandler = (event) => {
    setComment(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setId("");
    setComment("");
    var name;
    if (enteredId === "") name = "anonymous";
    else name = enteredId;
    var d = new Date();
    var specdate = d.toString();
    specdate = specdate.split("GMT")[0];
    axios
<<<<<<< HEAD
      .post("http://10.142.79.170:5000/comment/post", {
=======
      .post("https://jimchen.uk/comment", {
>>>>>>> bc76ca3 (fixed bugs)
        user: name,
        comment: enteredComment,
        date: specdate,
      })
      .then(console.log("post comment successful"))
      .catch(console.log("did not post comment"));
  };
  var w = window.innerWidth;
  var x;
  if (w > 660) x = (w - 600) / 2;
  else x = 30;
  return (
    <div
      style={{
        marginLeft: x + "px",
        marginRight: x + "px",
        fontSize: "15px",
      }}
    >
      <br />
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Name(Optional)</Form.Label>
          <Form.Control
            type="text"
            value={enteredId}
            onChange={IdChangeHandler}
            placeholder="Guest"
          />
        </Form.Group>
        <Form.Label>Message</Form.Label>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            value={enteredComment}
            onChange={commentChangeHandler}
            placeholder="Input your message here"
            rows={3}
            required
          />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Comment
        </Button>
      </Form>
    </div>
  );
}

export default InputSizesExample;
