import React from "react";
import './login.css';
import { Container, Box, Typography, TextField, Button, Divider, Avatar } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

export const SignoutScreen = () => {
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    boxShadow: "0px 0px 3px 3px #1976d2",
                    borderRadius: "4vh",
                    minWidth: "290px",
                    maxWidth: "380px",   
                    width: "40vw",
                    height: "auto",
                    padding: "2vw",
                    marginTop: "5vh",
                }}
            >
                <Typography 
                    variant="h3" 
                    gutterBottom 
                    component="div"
                    sx={{
                        textAlign: "center",
                        fontFamily: "'Butterfly Kids', cursive",
                        fontSize: "8vh"
                    }}
                >
                    Create an account
                </Typography>
                <Box>
                    <Avatar src="/broken-image.jpg" sx={{ marginLeft: "auto", marginRight: "auto", width: 60, height: 60}}/>
                    <TextField id="outlined-basic" label="Name" variant="outlined" sx={{width: "100%", marginTop: "1vh"}}/>
                    <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width: "100%", marginTop: "1vh"}}/>
                    <TextField 
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password" 
                        sx={{
                            width: "100%",
                            marginTop: "1vh"
                        }}
                    />
                    <TextField 
                        id="outlined-password-input"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password" 
                        sx={{
                            width: "100%",
                            marginTop: "1vh"
                        }}
                    />
                    <Button 
                        variant="contained" 
                        sx={{
                            width: "100%",
                            marginTop: "1vh"
                        }}
                    >
                        Continue
                    </Button>
                    <Divider
                        sx={{
                            marginTop: "4vh"
                        }}
                    >
                        Or register with
                    </Divider>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "1vh"
                        }}
                    >
                        <GoogleIcon 
                            
                        />
                    </Box>
                        
                
                </Box>
            </Box>
        </Container>
    )
}
