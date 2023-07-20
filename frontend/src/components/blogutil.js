import Card2 from "../utils/card2";
const BlogUtil = (title, text, date) => {
  return (
    <>
      <br />
      <br />
      <br />
      <Card2 title={title} text={text} date={date} />
            <br />
      <br />
      <br />
    </>
  );
};

export default BlogUtil;
