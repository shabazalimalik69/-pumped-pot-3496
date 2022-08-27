import { Route, Routes } from "react-router-dom"
import { Enterprise } from "./Enterprise"
import { Individual } from "./Individual"
import { Team } from "./Team"

export const AllRouting=()=>{
    return(
        <>
        <Routes>
            <Route path="/enterprise" element={<Enterprise/>} />
            <Route path="/individual" element={<Individual/>} />
            <Route path="/team" element={<Team/>} />
        </Routes>
        </>
    )
}