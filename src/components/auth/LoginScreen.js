import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import './login.css';

export const LoginScreen = () => {
    return(
        <Box
        sx={{ 
            display: "flex" 
        }}
        >           
            <Box 
                alt="child"
                component="img"
                src="https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2018/09/iStock-824777726-e1537981342941.jpg"
                sx={{ width: "60%" }}
            />
            <Box
                sx={{
                    borderRadius: "4vh",
                    boxShadow: "5px 3px 20px #1976d2",
                    height: "70%",
                    marginLeft: "5vw",
                    maxWidth: "400px",
                    minWidth: "300px",
                    mt: "8vh",
                    p: "2vw",
                    width: "30%",
                }}
            >
                <Typography 
                    component="div"
                    gutterBottom 
                    sx={{
                        fontFamily: "'Butterfly Kids', cursive",
                        fontSize: "8vh",
                        textAlign: "center",
                    }}
                    variant="h3"
                >
                    English Practice
                </Typography>
                <Avatar
                    alt="profileImage"
                    src="https://placekitten.com/100/100"
                    sx={{ 
                        height: 70, 
                        marginX: "auto", 
                        mb: 2,
                        width: 70, 
                    }} 
                />
                <Box>
                    <TextField 
                        id="outlined-basic" 
                        label="Email" 
                        sx={{ width: "100%" }}
                        variant="outlined" 
                    />
                    <TextField 
                        autoComplete="current-password" 
                        id="outlined-password-input"
                        label="Password"
                        sx={{ width: "100%", marginTop: "1vh" }}
                        type="password"
                    />
                </Box>
                <Button 
                    sx={{ width: "100%", marginTop: "1vh" }}
                    variant="contained" 
                >
                    Continue
                </Button>
                <Divider
                    sx={{ marginTop: "5vh" }}
                >
                    New to English Practice?
                </Divider>
                <Button 
                    sx={{ width: "100%", marginTop: "2vh" }}
                    variant="outlined"
                >
                    Create an account
                </Button>    
            </Box>
        </Box>                
    );
};
