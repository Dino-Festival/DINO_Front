import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import loadable from "@loadable/component";

const Home = loadable(() => import("./pages/Home/Home"));
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
