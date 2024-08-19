import PageContainer from "../components/shared/PageContainer";
import Loader from "../components/shared/Loader";

const Loading = () => {
  return (
    <PageContainer
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loader />
    </PageContainer>
  );
};
export default Loading;
