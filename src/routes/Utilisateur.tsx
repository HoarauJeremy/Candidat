import { Route, Routes } from "react-router";
import Index from "@Components/Utilisateur";
import List from "@Components/Utilisateur/List.tsx";

const Utilisateur = () => {
  return (
    <>
      <Routes>
        <Route element={<Index />}>
          <Route element={<List />}/>
        </Route>
      </Routes>
    </>
  )
}

export default Utilisateur;