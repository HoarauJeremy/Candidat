import { Route, Routes } from "react-router-dom";
import Candidature from "@Routes/Candidature";
import Commune from "@Routes/Commune.tsx";
import Document from "@Routes/Document.tsx";
import Metier from "@Routes/Metier.tsx";
import OffreEmploie from "@Routes/OffreEmploie.tsx";
import Organisation from "@Routes/Organisation.tsx";
import Utilisateur from "@Routes/Utilisateur.tsx";
import Layout from "@Components/Accueil/Layout.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"candidature/*"} element={<Candidature />} />
          <Route path={"commune/*"} element={<Commune />} />
          <Route path={"document/*"} element={<Document />} />
          <Route path={"metier/*"} element={<Metier />} />
          <Route path={"offreEmploie/*"} element={<OffreEmploie />} />
          <Route path={"organisation/*"} element={<Organisation />} />
          <Route path={"utilisateur/*"} element={<Utilisateur />} />

          <Route path={"*"} element={"ERROR"} />
        </Route>
      </Routes>
    </>
  )
}

export default App
