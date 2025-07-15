import { Route, Routes } from "react-router"

const OffreEmploie = () => {
  return (
      <>
        <Routes>
            <Route element={<Index />}>
                <Route element={<List />} />
            </Route>
        </Routes>
      </>
  )
}

export default OffreEmploie;