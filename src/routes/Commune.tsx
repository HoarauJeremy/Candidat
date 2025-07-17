import { Route, Routes } from "react-router"
import Index from "@Components/Commune";
import List from "@Components/Commune/List.tsx";

const Commune = () => {
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

export default Commune;