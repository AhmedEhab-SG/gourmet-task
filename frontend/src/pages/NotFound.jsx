import PageContainer from "../components/shared/PageContainer";

const NotFound = () => {
  return (
    <PageContainer>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          margin: "auto",
        }}
      >
        404 Page Not Found
      </h1>
    </PageContainer>
  );
};

export default NotFound;
