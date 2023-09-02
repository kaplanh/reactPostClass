import { Box, Typography } from "@mui/material";

const Boxx = () => {
    return (
        <Box>
            <Box
                sx={{
                    border: "2px solid blue",
                    m: 2,
                    height: "10rem",
                    backgroundColor: "error.dark",
                }}
            >
                {" "}
                <Typography variant="h5" align="center" color={"white"}>
                    Box
                </Typography>
                <Typography variant="body2" align="center" color={"white"}>
                    Düz div sx prop u ile istedigimiz özellikleri verebiliriz
                </Typography>
            </Box>
            <Box
                sx={{
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    border: "1px solid tomato",
                    mt: "2rem",
                }}
            >
                

                <Box sx={{ backgroundColor: "error.light" }}>
                    <Typography align="center">Flex özellikli Box</Typography>
                </Box>
                <Box sx={{ backgroundColor: "error.light" }}>
                    <Typography align="center">Box1</Typography>
                </Box>
                <Box sx={{ backgroundColor: "error.dark" }}>
                    <Typography align="center">Box2</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Boxx;
