import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Hjem from "./hjem/hjem";
import Behandlinger from "./behandlinger/Behandlinger";
import OmMeg from "./omMeg/OmMeg";
import Priser from "./Priser/Priser";
import Kontaktinfo from "./kontaktinfo/Kontaktinfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hjem />} />
          <Route path="behandlinger" element={<Behandlinger />} />
          <Route path="om-meg" element={<OmMeg />} />
          <Route path="priser" element={<Priser />} />
          <Route path="kontaktinfo" element={<Kontaktinfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
