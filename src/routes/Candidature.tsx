import { Route, Routes } from "react-router-dom"
import Index from "@Components/Candidature/index.tsx";
import List from "@Components/Candidature/List.tsx";
import Show from "@Components/Candidature/Show.tsx";

const Candidature = () => {
  return (
    <>
      <Routes>
        <Route element={<Index />}>
          <Route index element={<List />}/>
          <Route path=":id" element={<Show />}/>
        </Route>
      </Routes>
    </>
  )
}

export default Candidature;