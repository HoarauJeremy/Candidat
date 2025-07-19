import { Route, Routes } from "react-router"
import Index from "@Components/Document";
import List from "@Components/Document/List.tsx";

const Document = () => {
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

export default Document;