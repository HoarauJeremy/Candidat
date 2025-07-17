import { Route, Routes } from "react-router-dom"
import Index from "@Components/Candidature/index.tsx";
import List from "@Components/Candidature/List.tsx";

const Candidature = () => {
  return (
    <>
      <Routes>
        <Route element={<Index />}>
          <Route index element={<List />}/>
        </Route>
      </Routes>
    </>
  )
}

export default Candidature;