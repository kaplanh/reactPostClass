import { Container, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const ButtonGroupp = () => {
    return (
        <Container>
            <Typography align="center" variant="h5">Button Group</Typography>
            <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                >
                    <Button>one</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup size="large">
                    <Button>one</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup size="large">
                    <Button>one</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Stack>
        </Container>
    );
};

export default ButtonGroupp;
