import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import './login.css';


export const RenewPassword = () => {
    return (
        <Box
            sx={{
                display: "flex",    
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    borderRadius: "4vh",
                    boxShadow: "0px 0px 3px 3px #1976d2",
                    height: "auto",
                    marginTop: "15vh",
                    maxWidth: "380px",   
                    minWidth: "290px",
                    padding: "2vw",
                    width: "40vw",
                }}
            >
                <Typography 
                        component="div"
                        gutterBottom 
                        sx={{
                            textAlign: "center",
                        }}
                        variant="h5" 
                >
                    Reset your password
                </Typography>
                <Divider variant="middle" />
                <TextField 
                    id="outlined-basic" 
                    label="Email"
                    sx={{
                        mt: "3vh",
                        width: "100%", 
                    }}
                    variant="outlined" 
                />
                <TextField 
                    autoComplete="current-password" 
                    id="outlined-password-input"
                    label="New Password"
                    sx={{
                        marginTop: "1vh",
                        width: "100%",
                    }}
                    type="password"
                />
                <TextField 
                    autoComplete="current-password" 
                    id="outlined-password-input"
                    label="Confirm new Password"
                    sx={{
                        marginTop: "1vh",
                        width: "100%",
                    }}
                    type="password"
                />
                <Button 
                    sx={{
                        width: "100%",
                        mt: "5vh",
                        mb: "2vh",
                    }}
                    variant="outlined"
                >
                    Continue
                </Button>
            </Box>
        </Box>
    );
};
