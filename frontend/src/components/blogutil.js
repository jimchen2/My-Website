import Card2 from "../utils/card2";
const BlogUtil = (title, text, date, like) => {
  return (
    <>
      <br />
      <br />
      <br />
      <Card2 title={title} text={text} date={date} like={like} />
      <br />
      <br />
      <br />
    </>
  );
};

export default BlogUtil;
