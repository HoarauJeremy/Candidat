import { Route, Routes } from "react-router"

const Document = () => {
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

export default Document;