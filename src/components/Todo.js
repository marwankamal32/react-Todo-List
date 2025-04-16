import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

//ICONS
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

export default function Todo(){
    return(
        <>

        <Card className = "todoCard" sx={{ minWidth: 275 , background:"#2F7DC3" , color:"white" , marginTop:"30px" }}>
            <CardContent>

                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Typography variant = "h5" sx={{textAlign:"right"}}> المهمة الاولى</Typography>
                        <Typography variant = "h6" sx={{textAlign:"right"}}> تفاصيل خاصة بالمهمة الاولى</Typography>
                    </Grid>

                    {/*ACTION BUTTONS*/}
                    <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">

                        <IconButton 
                        className="iconButton" aria-label="delete" style={{color:"#49A950", background:"white",border:"solid #49A950 3px",}}>
                            <CheckIcon />
                        </IconButton>

                        <IconButton 
                        className="iconButton" aria-label="delete" style={{color:"#122733", background:"white",border:"solid #122733 3px",}}>
                            <ModeEditOutlineOutlinedIcon />
                        </IconButton>

                        <IconButton 
                        className="iconButton" aria-label="delete" style={{color:"#EC3432", background:"white",border:"solid #EC3432 3px",}}>
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>

                    </Grid>
                    {/*=== ACTION BUTTONS ===*/}
                </Grid>
            </CardContent>
        </Card>

        </>

    );
}