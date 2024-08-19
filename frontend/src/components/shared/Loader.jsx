import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      style={{ margin: "auto" }}
      visible={true}
    />
  );
};

export default Loader;
