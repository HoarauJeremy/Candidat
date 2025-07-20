import { Route, Routes } from "react-router-dom";
import {ThemeProvider} from "@Components/theme-provider.tsx";

import { AuthLayout, Login, Register } from "@Components/Authentification/Auth"
import {Accueil, Candidature, Commune, Document, Layout, Metier, OffreEmploie, Organisation, Utilisateur} from "@Routes/routes";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme={"dark"} storageKey={"vite-ui-theme"}>
        <Routes>
          <Route path={"/"} element={<Layout/>}>
            <Route index element={<Accueil />} />

            <Route path={"auth"} element={<AuthLayout />}>
              <Route index path={"login"} element={<Login />} />
              <Route path={"register"} element={<Register />} />
            </Route>

            <Route path={"candidature/*"} element={<Candidature/>}/>
            <Route path={"commune/*"} element={<Commune/>}/>
            <Route path={"document/*"} element={<Document/>}/>
            <Route path={"metier/*"} element={<Metier/>}/>
            <Route path={"offreEmploie/*"} element={<OffreEmploie/>}/>
            <Route path={"organisation/*"} element={<Organisation/>}/>
            <Route path={"utilisateur/*"} element={<Utilisateur/>}/>

            <Route path={"*"} element={"ERROR"}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
