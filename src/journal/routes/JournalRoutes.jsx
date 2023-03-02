import { Navigate, Route, Routes } from "react-router-dom"
import { CheckinPage } from "../pages/CheckinPage"
import { JournalPage } from "../pages/JournalPage"
import { SociosPage } from "../pages/SociosPage"


export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <JournalPage /> } />
        <Route path="/dashboard" element={ <JournalPage /> } />
        <Route path="/checkin" element={ <CheckinPage /> } />
        <Route path="/socios" element={ <SociosPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
