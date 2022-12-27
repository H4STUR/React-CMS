import {ThemeProvider} from "../context/theme";

import Base from "./frontend/base";

// import "antd/dist/reset.css"
import "../public/css/styles.css";
import "../public/css/custom.css";


// import BaseRoutes from "../components/Routes/Routes";


function MyApp({Component, pageProps})
{
    return(
        
        
        <ThemeProvider>
            <Base />
            <Component {...pageProps} />
        </ThemeProvider>
        
    );
}
export default MyApp;