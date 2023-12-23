import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Buttonn = () => {
    return (
        <Container
            sx={{
                border: "2px dotted red",
                p: 2,
            }}
        >
            <Typography variant="h5" color={"error"} align="center">
                Buttons
            </Typography>
            <Typography variant="body2" color={"secondary"} align="center">
                Buttons variants
            </Typography>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent={"center"}
            >
                <Button>Default</Button>
                <Button variant="outlined">outlined</Button>
                <Button variant="contained">Default</Button>
            </Stack>
            <Typography variant="body2" color={"secondary"} align="center">
                Buttons size
            </Typography>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent={"center"}
                m={2}
            >
                <Button fullWidth size="medium" variant="contained">
                    fullWidth
                </Button>
            </Stack>

            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent={"center"}
            >
                <Button size="small" variant="contained">
                    small
                </Button>
                <Button size="medium" variant="contained">
                    medium
                </Button>
                <Button size="large" variant="contained">
                    large
                </Button>
            </Stack>
            <Typography variant="body2" color={"secondary"} align="center">
                Buttons colors
            </Typography>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent={"center"}
                flexWrap={"wrap"}
            >
                <Button size="small" variant="contained">
                    default
                </Button>
                <Button color="primary" size="medium" variant="contained">
                    primary
                </Button>
                <Button color="primary" size="medium" variant="outlined">
                    primary
                </Button>
                <Button color="secondary" size="large" variant="contained">
                    secondary
                </Button>
                <Button color="secondary" size="large" variant="outlined">
                    secondary
                </Button>
                <Button color="success" size="large" variant="contained">
                    success{" "}
                </Button>
                <Button color="error" size="large" variant="contained">
                    error
                </Button>
                <Button color="error" size="large" variant="contained">
                    error
                </Button>
                <Button color="info" size="large" variant="contained">
                    info
                </Button>
                <Button color="warning" size="large" variant="contained">
                    warning
                </Button>
                <Button color="inherit" size="large" variant="contained">
                    inherit
                </Button>
                <Button
                    sx={{
                        color: "white",
                        backgroundColor: "purple",
                        "&:hover": { backgroundColor: "lightpink" },
                    }}
                    size="large"
                    variant="contained"
                >
                    sx
                </Button>
            </Stack>
            <Typography variant="body2" color={"secondary"} align="center">
                Buttons disabled
            </Typography>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent={"center"}
            >
                <Button disabled size="small" variant="contained">
                    disabled
                </Button>
                <Button size="medium" variant="contained">
                    normal
                </Button>
            </Stack>
        </Container>
    );
};

export default Buttonn;
