// import Layout from "./components/Layout";

import Boxx from "./components/layout/Boxx";
import Cont from "./components/layout/Cont";
import { Typo } from "./components/typography/Typo";
import Stackk from "./components/layout/Stackk";
import Buttonn from "./components/button/Buttonn";
import ButtonGroupp from "./components/button/ButtonGroupp";
import IconButtonn from "./components/button/IconButtonn";
import BasicTextFieldd from "./components/textfield/BasicTextFieldd";

import Cardd from "./components/card/Cardd";
import AppBarComp from "./components/navigation/AppBarComp";
import { ThemeProvider, createTheme } from "@mui/material";
import { deepPurple, lime } from "@mui/material/colors";



function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#bebe",
            },
            secondary: {
                main: deepPurple[500],
            },
            error: {
                main: lime["A400"],
            },
            koyuMor: {
                main: deepPurple[500],
                light: deepPurple[200],
                dark: deepPurple[800],
                contrastText: "white",
            },
        },
    });
    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBarComp />

                {/* <Typo />
            <Cont />
            <Boxx />
            <Stackk />
            <Buttonn />
            <ButtonGroupp />
            <IconButtonn />
            <BasicTextFieldd />
            <Cardd /> */}
            </ThemeProvider>
        </>
    );
}

export default App;
