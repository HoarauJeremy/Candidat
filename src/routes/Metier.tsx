import { Route, Routes } from "react-router"
import Index from "@Components/Metier";
import List from "@Components/Metier/List.tsx";

const Metier = () => {
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

export default Metier;