import {
    Box,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const BasicTextFieldd = () => {
    const [err, setErr] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
     const handleMouseDownPassword = (event) => {
         event.preventDefault();
     };

    // formik ve yup ile bu validation u kurup state i kontrol edecegiz
    return (
        <Stack
            direction="column"
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
            sx={{ border: "2px dashed red", p: 2 }}
            component="form"
        >
            <Typography variant="h5">TextField-inputs</Typography>
            <Typography variant="body1">Variants</Typography>
            <Stack
                direction="row"
                spacing={2}
                sx={{ border: "2px dashed red", p: 2 }}
                component="form"
            >
                <TextField
                    variant="outlined"
                    label="outlined"
                    id="outlined-basic"
                />
                <TextField variant="filled" label="filled" id="filled-basic" />
                <TextField
                    variant="standard"
                    label="standard"
                    id="standard-basic"
                />
            </Stack>
            <Typography variant="body1">
                required-disabled-readonly props
            </Typography>
            <Stack
                direction="row"
                spacing={2}
                sx={{ border: "2px dashed red", p: 2 }}
                component="form"
            >
                <TextField
                    required
                    label="required"
                    defaultValue="defaultValue"
                    variant="outlined"
                    id="outlined-basic"
                />
                <TextField
                    disabled
                    variant="filled"
                    label="disabled"
                    id="filled-basic"
                />
                <TextField
                    InputProps={{ readOnly: true }}
                    variant="standard"
                    label="readOnly"
                    id="standard-basic"
                />
            </Stack>
            <Typography variant="body1">
                types-helpertext-autocomplete-InputProps-InputLabelProps
            </Typography>
            <Stack
                direction="row"
                spacing={2}
                sx={{ border: "2px dashed red", p: 2 }}
                component="form"
            >
                <TextField
                    type="password"
                    required
                    label="password"
                    variant="outlined"
                    id="outlined-basic"
                    autoComplete="current-password"
                />
                <TextField
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    label="number"
                    id="filled-basic"
                />
                <TextField
                    type="search"
                    InputProps={{ readOnly: true }}
                    variant="standard"
                    label="search"
                    id="standard-basic"
                />
                <TextField
                    type="text"
                    variant="standard"
                    label="text"
                    helperText="Some important text"
                    id="standard-basic"
                />
            </Stack>
            <Typography variant="body1">validation/error</Typography>
            <Stack
                direction="row"
                spacing={2}
                sx={{ border: "2px dashed red", p: 2 }}
                component="form"
            >
                <TextField
                    error
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                />
                <TextField
                    error
                    id="outlined-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                />

                <TextField
                    error
                    id="filled-error"
                    label="Error"
                    defaultValue="Hello World"
                    variant="filled"
                />
                <TextField
                    error
                    id="filled-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="filled"
                />

                <TextField
                    error
                    id="standard-error"
                    label="Error"
                    defaultValue="Hello World"
                    variant="standard"
                />
                <TextField
                    error
                    id="standard-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="standard"
                />
            </Stack>
            <Typography variant="body1">Multiline</Typography>
            <Stack
                direction="row"
                spacing={2}
                sx={{ border: "2px dashed red", p: 2 }}
                component="form"
            >
                <TextField
                    multiline
                    maxRows={4}
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                />
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                />
            </Stack>
            <Typography variant="body1">
                select
                {/* Stack icindeki textFieldlerin class inini console dan yakalayip sx ile style verebiliriz */}
                {/* sx={{ "& .MuiSelect-select": { m: 1, width: "25ch" }}} */}
            </Typography>
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    border: "2px dashed red",
                    p: 2,
                    "& .MuiSelect-select": { m: 1, width: "25ch" },
                }}
                component="form"
            >
                <TextField
                    select
                    label="select"
                    defaultValue={"EUR"}
                    helperText="Please select your currency"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                />
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                />
            </Stack>
            <Typography variant="body1">color</Typography>
            <Stack
                spacing={2}
                sx={{
                    border: "2px dashed red",
                    p: 2,
                    "& .MuiSelect-select": { m: 1, width: "25ch" },
                }}
                component="form"
            >
                <TextField
                    color="error"
                    id="email"
                    variant="outlined"
                    label="Email"
                    placeholder="Enter your email"
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    color="secondary"
                    variant="filled"
                    label="password"
                    id="password"
                    placeholder="Enter your password"
                    margin="dense"
                    required
                />
                <TextField
                    color="success"
                    sx={{ backgroundColor: "primary.light" }}
                    margin="none"
                    variant="standard"
                    label="name"
                    id="name"
                    required
                    placeholder="Enter your name"
                />
            </Stack>
            <Typography variant="body1">icons</Typography>
            <Typography variant="subtitle">
                3 farkli sekilde yapilabilir
            </Typography>

            <Stack
                spacing={2}
                sx={{
                    border: "2px dashed red",
                    p: 2,
                    "& .MuiSelect-select": { m: 1, width: "25ch" },
                }}
            >
                <Typography variant="subtitle">
                    1-formcontrol+inputlabel+input+inputadornment+icon
                </Typography>
                <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                        {" "}
                        with a start adornment
                    </InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Typography variant="subtitle">
                    2-textfield+inputprops-inputadornment+icon
                </Typography>
                <TextField
                    id="input-with-icon-textfield"
                    label="TextField"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
                <Typography variant="subtitle">
                    3-flex-box+icon+textfield
                </Typography>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <AccountCircle
                        sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                    <TextField
                        id="input-with-sx"
                        label="With sx"
                        variant="standard"
                    />
                </Box>
            </Stack>
            <Typography variant="body1">Input Adornments</Typography>

            <Stack
                spacing={2}
                sx={{
                    border: "2px dashed red",
                    p: 2,
                    "& .MuiSelect-select": { m: 1, width: "25ch" },
                }}
            >
                <Typography variant="subtitle">
                    1-formcontrol+inputlabel+input+inputadornment+icon
                </Typography>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                        Password
                    </InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Stack>
            <Typography variant="body1">örnek</Typography>
            <Typography variant="subtitel">
                useState ile err true yada false olmasini kontrol edip hata
                rengi ve hata mesaji verecegiz formik ve yup kütüphaneleri
                yardimiyla
            </Typography>
            <Stack
                spacing={2}
                sx={{
                    border: "2px dashed red",
                    p: 2,
                    "& .MuiSelect-select": { m: 1, width: "25ch" },
                }}
                component="form"
            >
                <TextField
                    color="error"
                    id="email"
                    variant="outlined"
                    label="Email"
                    placeholder="Enter your email"
                    required
                    fullWidth
                    margin="normal"
                    // error={err}
                    error={err}
                    // helperText="incorrect email format"
                    helperText={err && "incorrect email format"}
                />
                <TextField
                    color="secondary"
                    variant="filled"
                    label="password"
                    id="password"
                    placeholder="Enter your password"
                    margin="dense"
                    required
                />
                <TextField
                    color="success"
                    sx={{ backgroundColor: "primary.light" }}
                    margin="none"
                    variant="standard"
                    label="name"
                    id="name"
                    required
                    placeholder="Enter your name"
                />
            </Stack>
        </Stack>
    );
};

export default BasicTextFieldd;
