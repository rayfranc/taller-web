import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";


function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/wheel-alignment" element={<Home />} />
                    <Route path="/computer-diagnostics" element={<Home />} />
                    <Route path="/oil-change-gasoline-diesel" element={<Home />} />
                    <Route path="/general-mechanic" element={<Home />} />
                    <Route path="/motorcycle-repair" element={<Home />} />
                    <Route path="/brakes-rims-rotors" element={<Home />} />
                    <Route path="/commercial-semi-truck-washing" element={<Home />} />
                    <Route path="/tires" element={<Home />} />
                    <Route path="/fleet-services" element={<Home />} />
                    <Route path="/financing" element={<Home />} />
                    <Route path="/coupons" element={<Home />} />
                    <Route path="/customer-reviews" element={<Home />} />
                    <Route path="/contact-us" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;