function CV() {
  return (
    <>
      <br />
      <br />
      <div style={{ textAlign: "center", fontSize: "25px" }}>
        My Curriculum Vitae 2023.6
      </div>
      <br />
      <br />
      <embed
        src="/CV.pdf"
        width="630"
        height="500"
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        type="application/pdf"
      />
    </>
  );
}

export default CV;
