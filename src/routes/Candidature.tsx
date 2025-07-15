import { Route, Routes } from "react-router"
import Index from "../components/Candidature";
import List from "../components/Candidature/List.tsx";


const Candidature = () => {
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

export default Candidature;