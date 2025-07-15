import {Route, Routes} from "react-router";

const Utilisateur = () => {
  return (
      <>
          <Routes>
              <Route element={<Index />}>
                  <Route element={"home"} />
              </Route>
          </Routes>
      </>
  )
}

export default Utilisateur;