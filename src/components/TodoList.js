import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



//COMPONENTS
import Todo from './Todo';
import { Grid } from '@mui/material';

export default function TodoList() {
  return (

      <Container maxWidth="sm" style={{textAlign:"center"}}>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant = "h3" style={{fontWeight:"bold"}}> مهامي </Typography>

                <Divider/>

                {/* FILLTER BUTTONS */}
                <ToggleButtonGroup
                style={{direction:"ltr" , marginTop :"30px"}}
                    //value={formats}
                    exclusive
                    //onChange={handleFormat}
                    aria-label="text formatting"
                >
                    <ToggleButton value="right">غير المنجز</ToggleButton>
                    <ToggleButton value="center">المنجز</ToggleButton>
                    <ToggleButton value="left">الكل</ToggleButton>
                </ToggleButtonGroup>

                {/* === FILLTER BUTTONS === */}

                {/*ALL TODOS */}
                <Todo/>
                {/* === ALLTODOS === */}

                {/*INPUT + ADD BUTTON*/}

                <Grid container spacing={2} style={{marginTop:"30px"}}>
                    <Grid
                    size={8}
                    display="flex" justifyContent="space-around" alignItems="center"
                    >
                        <TextField
                        style={{width:"100%"}}
                        id="outlined-basic"
                        label="عنوان المهمة"
                        variant="outlined" />
                    </Grid>

                    <Grid
                    size={4}
                    display="flex" justifyContent="space-around" alignItems="center"
                    >
                        <Button variant="contained" style={{width:"100%" , height:"100%"}}>اضافة</Button>
                    </Grid>

                </Grid>
                {/* ==== INPUT + ADD BUTTON ==== */}

            </CardContent>
        </Card>
      </Container>

  );
}