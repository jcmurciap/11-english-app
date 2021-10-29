import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Image = styled('img')({
    display: 'block',
    height: "100px",
    margin: 'auto',
    marginLeft: "auto",
    marginRight: "auto",
    maxHeight: '100%',
    maxWidth: '100%',
    width: "100px",

});

const Text = styled(Typography)(({ theme }) => ({
    marginLeft: theme.spacing(1),
}))


export const LessonVocabulary = () => {
    return (
        <Box>
            <Grid container direction="row" spacing={4} sx={{ marginTop: 0 }}> 
                <Grid item xs={12} md={8}>
                    <Grid alignItems="center" container spacing={2} direction="row">
                        <Grid item xs={12} sm={6} justifyContent="center">
                            <Image alt="image" src="https://st.hzcdn.com/simgs/98d11ec201b11b70_4-1662/home-design.jpg"/>
                        </Grid>
                        <Grid item xs sx={6}>
                            <Box sx={{ marginX: 1 }}>
                                <Typography align="center" variant="h4">Mug</Typography>
                                <Text variant="caption">Essence:</Text>
                                <Text gutterBottom variant="body1" >
                                    A large cup, typically cylindrical with a handle and used without a saucer.
                                </Text>
                                <Text variant="caption">Synonyms:</Text>
                                <Text gutterBottom variant="body1">coffe cup, jug</Text>
                                <Text sx={{ margin: 1 }} variant="caption">Examples:</Text>
                                <Text gutterBottom variant="body1">She picked up her coffee mug</Text>
                            </Box>
                        </Grid>    
                    </Grid>
                </Grid>
                <Grid item xs md={4}>
                    <Box sx={{ marginX: 1, padding: 0.5 }}>
                        <Text variant="body1">Total time: {"12:44"} min</Text>
                        <Text variant="body1"># words: {"9"}</Text>
                    </Box>
                </Grid>
                <Grid align="center" item xs={12} md={8}>
                    <Button color="success" sx={{ width: "50%" }} variant="outlined">
                        Next
                    </Button>
                </Grid>
                <Grid align="center" item xs md={4}>
                    <Button color="error" sx={{ marginBottom: 1 }} variant="outlined">Save and Exit</Button>
                </Grid>
            </Grid>
        </Box>
    );
};
