import { Route, Routes } from "react-router"

const Commune = () => {
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

export default Commune;