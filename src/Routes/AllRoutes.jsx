import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { Enterprise } from "./Enterprise"
import { Home } from "./Home"
import { Individual } from "./Individual"
import { Login } from "./Login"
import { PlanPricing } from "./PlanPricing"
import { Products } from "./Products"
import { SignUp } from "./Signup"
import { Solutions } from "./Solutions"
import { Team } from "./Team"

export const AllRoutes=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/enterprise" element={<Enterprise/>} />
            <Route path="/individual" element={<Individual/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/planpricing" element={<PlanPricing/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/solutions" element={<Solutions/>} />
            <Route path="/team" element={<Team/>} />
        </Routes>
        </>
    )
}