import { Navigate, Route, Routes } from "react-router-dom"
import { CheckinPage } from "../pages/CheckinPage"
import { JournalPage } from "../pages/JournalPage"
import { PagosPage } from "../pages/PagosPage"
import { SociosPage } from "../pages/SociosPage"
import { DrawerTest } from "../../auth/pages/DrawerTest"


export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <JournalPage /> } />
        <Route path="/dashboard" element={ <JournalPage /> } />
        <Route path="/checkin" element={ <CheckinPage /> } />
        <Route path="/socios" element={ <SociosPage /> } />
        <Route path="/pagos" element={ <PagosPage /> } />
        <Route path="/asistencias" element={ <PagosPage /> } />
        <Route path="/membresias" element={ <PagosPage /> } />
        <Route path="/sucursales" element={ <PagosPage /> } />
        <Route path="/productos" element={ <PagosPage /> } />
        <Route path="/ventas" element={ <PagosPage /> } />
        <Route path="/test" element={ <DrawerTest /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
