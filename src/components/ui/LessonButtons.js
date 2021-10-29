import React from 'react'
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LessonVocabulary } from './LessonVocabulary';

const images = [
    {
        url: 'https://image.shutterstock.com/image-vector/stickman-typography-illustration-kids-playing-260nw-542992561.jpg',
        title: "Vocabulary",
        width: "30%",
    },
    {
        url: 'https://st3.depositphotos.com/13193658/i/600/depositphotos_332882672-stock-photo-children-playing-educational-game-floor.jpg',
        title: "Learning in context", 
        width: "30%",
    },
    {
        url: 'https://www.psychbytes.com/dev/wp-content/uploads/2017/04/AdobeStock_40771403.jpeg',
        title: "Schedule my learning path",
        width: "30%",
    },
]; 

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    height: 195,
    position: "relative",
    [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        height: 100,
    },
    "&:hover, & .Mui-focusVisible": {
        zIndex: 1,
        "&:hover, & .MuiImageBackdrop-root": {
            opacity: 0.2,
        },
        "&:hover, & .MuiImageMarked-root": {
            opacity: 0.7,
        },
        "&:hover, & .MuiTypography-root": {
            border: "2px solid currentColor",
        },
    },
}));

const ImageSrc = styled("span")(({ theme }) => ({
    backgroundPosition: "center 40%",
    backgroundSize: "cover",
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
    backgroundColor: theme.palette.common.black,
    bottom: 0,
    left: 0,
    opacity: 0.4,
    position: "absolute",
    right: 0,
    transition: theme.transitions.create("opacity"),
    top: 0,
}));

const Image = styled("span")(({ theme }) => ({
    alignItems: "center",
    bottom: 0,
    color: theme.palette.common.white,
    display: "flex",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
}));

const ImageMarked = styled("span")(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    bottom: -2,
    height: 3,
    left: "calc(50% - 9px)",
    position: "absolute", // sale del flujo
    transition: theme.transitions.create("opacity"),
    width: 18,
}));

export const LessonButtons = () => {
    return (
        <>
            <Box
                sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", minWidth: 300, width: "100%" }}
            >
                {images.map((image) => (
                    <ImageButton
                        focusRipple
                        key={image.title}
                        style={{ width: image.width }}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${image.url})` }}/>
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: "relative",
                                    p: 4,
                                    pt: 2,
                                    paddingBottom: (theme) => `calc(${theme.spacing(1)} + 6px)`
                                }}
                            >
                                { image.title }
                                <ImageMarked className="MuiImageMarked-root"/>
                            </Typography>
                        </Image>
                    </ImageButton>
                ))}

            </Box>
            <LessonVocabulary />
        </>
    );
};
