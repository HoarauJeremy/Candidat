import { Route, Routes } from "react-router";
import Index from "@Components/Organisation";
import List from "@Components/Organisation/List.tsx";

const Organisation = () => {
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

export default Organisation;