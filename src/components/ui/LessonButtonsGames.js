import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

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
    marginBottom: 2,
    width: 200,
}));

export const LessonButtonsGames = () => {
    return (
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
                    <ButtonGame color="error" size="small" variant="outlined" sx={{mt: 5, }}>Close</ButtonGame>
                </ContainerButtons>
            </Paper>       
        </Box>
    );
};
