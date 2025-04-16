import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



//COMPONENTS
import Todo from './Todo';

export default function TodoList() {
  return (

      <Container maxWidth="sm" style={{textAlign:"center"}}>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant = "h2"> مهامي </Typography>

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
                <Todo/>
                <Todo/>
                {/* === ALLTODOS === */}

            </CardContent>
        </Card>
      </Container>

  );
}