import { Route, Routes } from "react-router"

const Metier = () => {
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

export default Metier;