import React from 'react'
import { Container, Box, Typography, TextField, Button, Divider } from '@mui/material';

export const RenewPassword = () => {
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
                    marginTop: "15vh",
                    
                }}
            >
                <Typography 
                        variant="h5" 
                        gutterBottom 
                        component="div"
                        sx={{
                            textAlign: "center",
                        }}
                >
                    Reset your password
                </Typography>
                <Divider variant="middle" />
                <TextField 
                    id="outlined-basic" 
                    label="Email"
                    variant="outlined" 
                    sx={{
                        width: "100%", 
                        marginTop: "3vh"
                        }}
                    />
                <TextField 
                    id="outlined-password-input"
                    label="New Password"
                    type="password"
                    autoComplete="current-password" 
                    sx={{
                        width: "100%",
                        marginTop: "1vh"
                    }}
                />
                <TextField 
                    id="outlined-password-input"
                    label="Confirm new Password"
                    type="password"
                    autoComplete="current-password" 
                    sx={{
                        width: "100%",
                        marginTop: "1vh"
                    }}
                />
                <Button 
                    variant="outlined"
                    sx={{
                        width: "100%",
                        marginTop: "5vh",
                        marginBottom: "2vh",
                    }}

                >
                    Confirm password change
                </Button>
            </Box>
        </Container>
    );
};
