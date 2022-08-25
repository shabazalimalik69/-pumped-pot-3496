import { Route, Routes } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { Enterprise } from "./Enterprise"
import { ForgotEmail } from "../AccountCreation/ForgotEmail"
import { ForgotPass } from "../AccountCreation/ForgotPass"
import { Home } from "./Home"
import { Individual } from "./Individual"
import { Login } from "../AccountCreation/Login"
import { Login1 } from "../AccountCreation/Login1"
import { PlanPricing } from "./PlanPricing"
import { Products } from "./Products"
import { SignUp } from "../AccountCreation/Signup"
import { SignUp1 } from "../AccountCreation/Signup1"
import { Solutions } from "./Solutions"
import { Team } from "./Team"
import { OldLogin } from "../AccountCreation/OldLogin"

export const AllRoutes=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/enterprise" element={<Enterprise/>} />
            <Route path="/individual" element={<Individual/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/oldlogin" element={<OldLogin/>} />
            <Route path="/forgotpass" element={<ForgotPass/>} />
            <Route path="/forgotemail" element={<ForgotEmail/>} />
            <Route path="/login1" element={<Login1/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/signup1" element={<SignUp1/>} />
            <Route path="/planpricing" element={<PlanPricing/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/solutions" element={<Solutions/>} />
            <Route path="/team" element={<Team/>} />
        </Routes>
        </>
    )
}