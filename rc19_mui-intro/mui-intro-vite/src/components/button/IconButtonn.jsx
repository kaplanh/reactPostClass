import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Container, IconButton, Typography } from "@mui/material";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Fingerprint from "@mui/icons-material/Fingerprint";
export default function IconButtonn() {
    return (
        <Container maxWidth={"md"} sx={{ border: "2px solid red", m: 2 }}>
            <Typography variant="h5" align="center">
                Buttons with icons and label
            </Typography>
            <Stack
                direction={"row"}
                spacing={3}
                justifyContent={"center"}
                mt={3}
            >
                <Button variant="contained" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="outlined" endIcon={<SendIcon />}>
                    Send{" "}
                </Button>
            </Stack>
            <Typography variant="h5" align="center">
                Icon Button
            </Typography>
            <Stack
                direction={"row"}
                spacing={3}
                justifyContent={"center"}
                mt={3}
            >
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Stack>
            <Typography variant="h5" align="center">
                size
            </Typography>
            <Stack
                direction={"row"}
                spacing={3}
                justifyContent={"center"}
                mt={3}
            >
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Stack>
            <Typography variant="h5" align="center">
                color
            </Typography>
            <Stack
                direction={"row"}
                spacing={3}
                justifyContent={"center"}
                mt={3}
            >
                <IconButton aria-label="fingerprint" color="secondary">
                    <Fingerprint />
                </IconButton>
                <IconButton aria-label="fingerprint" color="success">
                    <Fingerprint />
                </IconButton>
                <IconButton aria-label="fingerprint" color="warning">
                    <Fingerprint />
                </IconButton>
            </Stack>
        </Container>
    );
}
