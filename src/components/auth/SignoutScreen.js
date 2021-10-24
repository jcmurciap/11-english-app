import React from "react";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import GoogleIcon from '@mui/icons-material/Google';
import './login.css';

export const SignoutScreen = () => {
    return (
        <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Box
                sx={{
                    borderRadius: "4vh",
                    boxShadow: "5px 3px 20px #1976d2",
                    height: "auto",
                    marginTop: "5vh",
                    maxWidth: "350px",   
                    minWidth: "250px",
                    p: "2vw",
                }}
            >
                <Typography 
                    component="div"
                    gutterBottom 
                    sx={{
                        fontFamily: "'Butterfly Kids', cursive",
                        fontSize: "6vh",
                        mb: "1vh",
                        textAlign: "center",
                    }}
                    variant="h3" 
                >
                    Create an account
                </Typography>
                <Avatar src="/broken-image.jpg" sx={{ marginX: "auto" ,width: 60, height: 60 }}/>
                <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ width: "100%", mt: "1vh" }}/>
                <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ width: "100%", mt: "1vh" }}/>
                <TextField 
                    autoComplete="current-password" 
                    id="outlined-password-input"
                    label="Password"
                    sx={{
                        mt: "1vh",
                        width: "100%",
                    }}
                    type="password"
                />
                <TextField 
                    autoComplete="current-password" 
                    id="outlined-password-input"
                    label="Confirm Password"
                    sx={{
                        mt: "1vh",
                        width: "100%",
                    }}
                    type="password"
                />
                <Button sx={{ mt: "1vh", width: "100%" }} variant="contained">
                    Continue
                </Button>
                <Divider sx={{ mt: "4vh" }}>
                    Or register with
                </Divider>
                <Box sx={{ display: "flex", justifyContent: "center", mt: "1vh" }}>
                    <GoogleIcon />
                </Box>    
            </Box>
        </Container>
    );
};