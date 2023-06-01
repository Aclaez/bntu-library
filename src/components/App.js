import { Route, Routes } from "react-router-dom";
import Analytics from "../pages/Analytics/Analytics";
import DataSearch from "../pages/DataSearch/DataSearch";
import Home from "../pages/Home/Home";
import Publications from "../pages/Publications/Publications";
import Authors from "../pages/Authors/Authors";
import IndexH from "../pages/IndexH/IndexH";
import Affilations from "../pages/Affilations/Affilations";
import Citations from "../pages/Citations/Citations";
import Sources from "../pages/Sources/Sources";
import Concepts from "../pages/Concepts/Concepts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<DataSearch />} />
      <Route path="/analytics" element={<Analytics />} />

      <Route path="/search/publications" element={<Publications />} />
      <Route path="/search/authors" element={<Authors />} />
      <Route path="/search/organizations" element={<Affilations />} />
      <Route path="/search/citations" element={<Citations />} />
      <Route path="/search/scientific-direction" element={<Concepts />} />
      <Route path="/search/index-h" element={<IndexH />} />
      <Route path="/search/publication-source" element={<Sources />} />
    </Routes>
  );
}

export default App;
