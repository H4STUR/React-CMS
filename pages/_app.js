import {ThemeProvider} from "../context/theme";

import Base from "./frontend/base";

import "antd/dist/reset.css"
import "../public/css/custom.css"


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