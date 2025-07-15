import {Route, Routes} from "react-router";
import Candidature from "./routes/Candidature.tsx";
import Commune from "./routes/Commune.tsx";
import Document from "./routes/Document.tsx";
import Metier from "./routes/Metier.tsx";
import OffreEmploie from "./routes/OffreEmploie.tsx";
import Organisation from "./routes/Organisation.tsx";
import Utilisateur from "./routes/Utilisateur.tsx";
import Layout from "./components/Accueil/Layout.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/candidature/*"} element={<Candidature />} />
          <Route path={"/commune/*"} element={<Commune />} />
          <Route path={"/document/*"} element={<Document />} />
          <Route path={"/metier/*"} element={<Metier />} />
          <Route path={"/offreEmploie/*"} element={<OffreEmploie />} />
          <Route path={"/organisation/*"} element={<Organisation />} />
          <Route path={"/utilisateur/*"} element={<Utilisateur />} />

          <Route path={"*"} element={"ERROR"} />
        </Route>
      </Routes>
    </>
  )
}

export default App
