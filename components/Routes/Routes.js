import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SitesRoutes from "./SitesRoutes"

//templates
import HomePage from "../../pages/frontend/sites/homePage";
function BaseRoutes()
{
    return(
    <BrowserRouter>
        <Routes>
            {/* BASE ACTIONS */}
            <Route index element={<HomePage />} />
            {/* USERS ACTIONS */}

            {/* SITES ACTIONS */}
            {/* <SitesRoutes /> */}
        </Routes>
    </BrowserRouter>
    );
    
}

export default BaseRoutes;