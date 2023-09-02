import { Button, Container, Divider, ListItem, Stack, Typography } from "@mui/material";
import React from "react";

const Stackk = () => {
    return (
        <Container>
            <Typography
                variant="h5"
                align={"center"}
                color={"white"}
                sx={{ backgroundColor: "primary.light" }}
            >
                Stack
            </Typography>{" "}
            <Stack
                direction={"row"}
                spacing={2}
                justifyContent={"center"}
                alignItems={"center"}
                mt={2}
                border={"2px solid red"}
                divider={
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ color: "red" }}
                    />
                }
            >
                <Button>Default button</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="contained">Contained</Button>
                <Button
                    variant="contained"
                    sx={{
                        "&:hover": {
                            backgroundColor: "error.light",
                            color: "white",
                        },
                    }}
                >
                    "&:hover":{}
                </Button>
            </Stack>
            <Stack
                direction={{xs:"column",sm:"row"}}
                spacing={{xs:1,sm:2,md:4}}
                justifyContent={"center"}
                alignItems={"center"}
                mt={2}
                border={"2px solid red"}

            >
                <Button>Default button</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="contained">Contained</Button>
                <Button
                    variant="contained"
                    sx={{
                        "&:hover": {
                            backgroundColor: "error.light",
                            color: "white",
                        },
                    }}
                >
                    "&:hover":{}
                </Button>
            </Stack>
        </Container>
    );
};

export default Stackk;
