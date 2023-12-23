import React from "react";
import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
   
    
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const AppBarComp = () => {
    
    return (
        <>
            <AppBar position="static" color="error">
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        color="primary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="secondary" component="div">
                        Photos
                    </Typography>
                </Toolbar>
            </AppBar>
            <Button variant="contained" color="koyuMor">
                Colors
            </Button>
        </>
    );
};

export default AppBarComp;
