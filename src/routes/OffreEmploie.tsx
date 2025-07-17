import { Route, Routes } from "react-router"
import Index from "@Components/OffreEmploie";
import List from "@Components/OffreEmploie/List.tsx";

const OffreEmploie = () => {
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

export default OffreEmploie;