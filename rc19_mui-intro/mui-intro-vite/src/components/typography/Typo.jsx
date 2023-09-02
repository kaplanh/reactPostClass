import React from "react";
// import {Typography} from "@mui/material";
//? 2 farkli sekilde import edebiliroz alttaki Performans acisindan daha mantikli
import Typography from "@mui/material/typography";
import { Box } from "@mui/material";
export const Typo = () => {
    return (
        <Box sx={{ padding: "2rem", display: "flex", flexDirection: "column",gap:"1rem",border:"1px solid tomato",mb:"2rem"}}>
            <Typography variant="h5" component="h1" color="lightcoral" mt={4}>
                Typography 
            </Typography>
            <Typography variant="caption" component="h1"  mt={4}>
                 variant h6,component h1,margin top(mt-4),color
            </Typography>
            <Typography variant="subtitle1" color="palegreen" mt={2}>
                subtitle1 text
            </Typography>
            <Typography variant="subtitle2" color="error" mt={2}>
                subtitel2 text
            </Typography>
            {/* html de span olarak olusur  */}
            <Typography variant="button" mt={2}>
                button text
            </Typography>

            {/* html de  p olusur*/}
            <Typography variant="body1" mt={2}>
                body1
            </Typography>
            <Typography variant="body2" mt={2}>
                body2
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: "blue",
                    backgroundColor: "palevioletred",
                    mt: "1rem",
                }}
            >
                sx props u
            </Typography>
            <Typography variant="body2" align="center" mt={2}>
                align props u
            </Typography>
        </Box>
    );
};

//?typography comp.icin==> https://mui.com/material-ui/react-typography/
// ? typography comp,un tüm propslar icin ==> https://mui.com/material-ui/api/typography/
//*variant büyüklük-kücüklük component htmldeki tag i belirler
