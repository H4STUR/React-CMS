import {useContext} from "react";
import { ThemeContext } from "../context/theme";
import Head from "next/head";

const ToggleTheme = () =>
{
    const [theme, setTheme] = useContext(ThemeContext);

    return<>
        <Head>
            <link rel="stylesheet" href={`/css/${theme}.css`} />
        </Head>
        <div>
            {theme === "light" ? (
                <span onClick={() => 
                    {
                        setTheme("dark");
                        localStorage.setItem("theme", "dark");
                    }} style={{ fontSize: "24px" }}>🌚</span>
            ) : (
                <span onClick={() => 
                    {
                        setTheme("light");
                        localStorage.setItem("theme", "light");
                    }} style={{ fontSize: "24px" }}>🌞</span>
            )}
            
        </div>
    </>
};

export default ToggleTheme;