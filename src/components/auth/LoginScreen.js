import React from 'react';
import { Container, Box, Typography, Avatar, TextField, Button, Divider } from '@mui/material';
import './login.css';


export const LoginScreen = () => {
    return (
        <Container
            disableGutters='true'
            fixed='true'
            sx={{
                height: "100vh",
                width: "100%",
                margin: "0",
                display: "flex",
                // maxWidth: "1351px",
            }}
        >
            <Box 
                component="img"
                alt="child"
                src="https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2018/09/iStock-824777726-e1537981342941.jpg"
                sx={{
                    width: "60%",
                    height: "100vh",
                }} 
            />
            <Box
                sx={{
                    boxShadow: "0px 0px 3px 3px #1976d2",
                    borderRadius: "4vh",
                    height: "70vh",
                    padding: "2vw",
                    marginTop: "10vh",
                    marginLeft: '5vw',
                }}
            >
                <Box>
                    <Typography 
                        variant="h3"
                        gutterBottom 
                        component="div"
                        sx={{
                            textAlign: "center",
                            fontFamily: "'Butterfly Kids', cursive",
                            fontSize: "10vh"
                        }}
                    >
                        English Practice
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display:"flex",
                        justifyContent: "center"}}
                    
                >
                    <Avatar
                        alt="profileImage"
                        src="https://placekitten.com/100/100"
                        sx={{ width: 70, height: 70, marginBottom: 2}} 
                    />
                </Box>
                <Box>
                    <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width: "100%"}}/>
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
                </Box>
                <Box>
                    <Button 
                        variant="contained" 
                        sx={{
                            width: "100%",
                            marginTop: "1vh"
                        }}
                    >
                        Continue
                    </Button>
                </Box>
                <Box
                    sx={{
                        marginTop: "7vh"
                    }}
                >
                    <Divider
                        sx={{
                            fontFamily: "Roboto,Helvetica,Arial,sans-serif",
                            color: "grey"
                        }}
                    >New to English Practice?</Divider>
                    <Button 
                        variant="outlined"
                        sx={{
                            width: "100%",
                            marginTop: "2vh",
                        }}

                    >
                        Create an account
                    </Button>
                </Box>
            </Box>
            
        </Container>
    );
};