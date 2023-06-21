import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";


function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/wheel-alignment" element={<App />} />
                    <Route path="/computer-diagnostics" element={<App />} />
                    <Route path="/oil-change-gasoline-diesel" element={<App />} />
                    <Route path="/general-mechanic" element={<App />} />
                    <Route path="/motorcycle-repair" element={<App />} />
                    <Route path="/brakes-rims-rotors" element={<App />} />
                    <Route path="/commercial-semi-truck-washing" element={<App />} />
                    <Route path="/tires" element={<App />} />
                    <Route path="/fleet-services" element={<App />} />
                    <Route path="/financing" element={<App />} />
                    <Route path="/coupons" element={<App />} />
                    <Route path="/customer-reviews" element={<App />} />
                    <Route path="/contact-us" element={<App />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;