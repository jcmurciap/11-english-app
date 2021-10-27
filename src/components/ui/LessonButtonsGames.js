import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


export const LessonButtonsGames = () => {
    return (
        <Box
            sx={{
                display: "flex",
                height: "22rem",
                justifyContent: "center",
                mt: 1,
            }}
        >
            <Paper
                elevation="10"
                sx={{ 
                    backgroundColor: "#fefefb",
                    width: "90%", 
                }}
            >
                {/* box right/wrong words */}
                <Box>
                    {/* right words */}
                    <Box></Box>
                    {/* wrong words */}
                    <Box></Box>
                </Box>
                
                {/* Box image and options */}
                <Box>
                    {/* Box image */}
                    <Box></Box>
                    {/* Box options */}
                    <Box>
                        {/* option 1 */}
                        <Box></Box>
                        {/* option 2 */}
                        <Box></Box>
                        {/* option 3 */}
                        <Box></Box>
                        {/* option 4 */}
                        <Box></Box>
                    </Box>
                </Box>

                {/* score/time box */}
                <Box>
                    {/* score box */}
                    <Box></Box>
                    {/* time box */}
                    <Box></Box>
                </Box>
            </Paper>       
        </Box>
    );
};
