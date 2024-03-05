import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import loadable from "@loadable/component";

const Home = loadable(() => import("./pages/Home/Home"));
const Privacy = loadable(() => import("./pages/Privacy/Privacy"));
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Layout>
  );
}

export default App;
