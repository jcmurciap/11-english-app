import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import SportsScoreIcon from '@mui/icons-material/SportsScore';

const Paper = styled('div')(({ theme }) => ({
    height: "22rem",
    [theme.breakpoints.down("sm")]: {
        width: "50%",
        height: "auto",
    },
    width: "90%",
}));

const Image = styled('img')(({ theme }) => ({
    boxShadow: theme.shadows[3],
    height: 150,
    marginTop: 10,
    maxHeight: { xs: 150, md: 200 },
    maxWidth: { xs: 150, md: 200 },
    minWidth: theme.breakpoints.values.sm - 350,
    width: 200,
}));

const ContainerButtons = styled('div')(({ theme }) => ({
    height: "auto",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "auto",
    },
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    maxHeight: { xs: 150, md: 200 },
    maxWidth: { xs: 150, md: 200 },
    width: 200,
}));

const ButtonGame = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        width: "100% !important"
    },
    marginBottom: 5,
    width: 200,
}));

export const LessonLearnContext = () => {
    return (
        <Grid 
            container spacing={2} 
            columns={7}
            columnSpacing={{xs: 1, md: 3}}
            mx={{ margin: 0 }} 
        >
            <Grid item xs={6} md={6}>  
                <Box
                    sx={{
                        display: "flex",
                        height: "auto",
                        justifyContent: "center",
                        mt: 1,
                    }}
                >
                    <Paper>
                        <Box
                            sx={{display: "flex", justifyContent: "center"}}
                        >
                            <Image  
                                alt="image"
                                src="https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/Airplane.jpg"
                            />
                        </Box>
                        <ContainerButtons>
                            <ButtonGame variant="outlined">Car</ButtonGame>
                            <ButtonGame variant="outlined">Airplane</ButtonGame>
                            <ButtonGame variant="outlined">Aerial Tramway</ButtonGame>
                            <ButtonGame variant="outlined">Boat</ButtonGame>
                            <ButtonGame color="error" size="small" sx={{ mt: 5 }} variant="outlined">Close and Save</ButtonGame>
                        </ContainerButtons>
                    </Paper>
                </Box>
            </Grid>
            <Grid item xs={1} md={1}>
                <Fab color="primary" aria-label="scores" sx={{ mt: 5 }}>
                    <SportsScoreIcon />
                </Fab>         
            </Grid>
        </Grid>
    );
};
