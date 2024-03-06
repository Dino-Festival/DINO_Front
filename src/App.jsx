import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import loadable from "@loadable/component";
import Info from "./pages/Information/Info";

const Home = loadable(() => import("./pages/Home/Home"));
const Privacy = loadable(() => import("./pages/Privacy/Privacy"));
// const Info = loadable(() => import("./pages/Information/Info"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Layout>
  );
}

export default App;
