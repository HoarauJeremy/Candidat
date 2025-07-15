import {Route, Routes} from "react-router";

const Organisation = () => {
  return (
    <>
        <Routes>
            <Route element={<Index />}>
                <Route index element={"List"} />
            </Route>
      </Routes>
    </>
  )
}

export default Organisation;