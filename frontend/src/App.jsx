import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Providers from "./Providers";
import Routers from "./routers";

function App() {
  return (
    <Providers>
      <Layout>
        <Header />
        <Routers />
        <Footer />
      </Layout>
    </Providers>
  );
}

export default App;
