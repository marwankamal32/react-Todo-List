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
import { useState , useEffect } from 'react';


//COMPONENTS
import Todo from './Todo';
import { Grid } from '@mui/material';

//OTHERS
import { v4 as uuidv4 } from 'uuid';


const initialTodos =[
    {
        id : uuidv4(),
        title:"قراءة كتاب",
        details:"قراءة كتاب وروايه 47 صفحه",
        isCompleted : false,

    },
    {
        id : uuidv4(),
        title:"الذهاب للتمرين",
        details:" انزل التمرين الساعه 2",
        isCompleted : false,

    },
    {
        id : uuidv4(),
        title:"قراءة كتاب",
        details:"قراءة كتاب وروايه 47 صفحه",
        isCompleted : false,

    },
];

export default function TodoList() {

    const[todos , setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : initialTodos;
    });
    const[titleInput , setTitleInput] = useState("");
    const [detailsInput, setDetailsInput] = useState("");
    const [filter, setFilter] = useState("all");


    const filteredTodos = todos.filter((todo) => {
        if (filter === "completed") return todo.isCompleted;
        if (filter === "uncompleted") return !todo.isCompleted;
        return true;
      });

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
            if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
            }
        }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        }, [todos]);

    const todosJsx = filteredTodos.map((t)=> {
        return <Todo
         key = {t.id}
         title={t.title}
         details = {t.details}
         isCompleted = {t.isCompleted}
         onComplete={() => handelCompleteTodo(t.id)}
         onDelete={() => handleDeleteTodo(t.id)}
         onEdit={(newTitle, newDetails) => handleEditTodo(t.id, newTitle , newDetails)}
         />
    })


    function handleEditTodo(id, newTitle, newDetails) {
        const updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                return {...todo, title: newTitle, details: newDetails};
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    function handleDeleteTodo(id) {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    function handelCompleteTodo(id){
        const updateTodos = todos.map((todo) => {
            if(todo.id === id) {
                return {...todo, isCompleted: !todo.isCompleted};
            }
            return todo;
        });

        setTodos(updateTodos);
    }
    function handelAddClick()
    {
        if (!titleInput.trim()) return;
        const newTodo = {

            id : uuidv4(),
            title: titleInput,
            details:detailsInput,
            isCompleted : false,
        }
        setTodos ([...todos , newTodo]);
        setTitleInput("");
        setDetailsInput("");

    }
  return (

      <Container maxWidth="sm" style={{textAlign:"center"}}>
        <Card sx={{ minWidth: 275 }} style={{
            maxHeight :"90vh",
            overflow:"scroll",
        }}>
            <CardContent>
                <Typography variant = "h3" style={{fontWeight:"bold"}}> مهامي </Typography>

                <Divider/>

                {/* FILLTER BUTTONS */}
                <ToggleButtonGroup
                    value={filter}
                    style={{direction:"ltr" , marginTop :"30px"}}
                    exclusive
                    onChange={(e, newFilter) => {
                        if (newFilter !== null) setFilter(newFilter);
                    }}
                    aria-label="text formatting"
                >
                    <ToggleButton value="uncompleted">غير المنجز</ToggleButton>
                    <ToggleButton value="completed">المنجز</ToggleButton>
                    <ToggleButton value="all">الكل</ToggleButton>
                </ToggleButtonGroup>

                {/* === FILLTER BUTTONS === */}

                {/*ALL TODOS */}
                {todosJsx}
                {/* === ALLTODOS === */}

                {/*INPUT + ADD BUTTON*/}

                <Grid container spacing={2} style={{marginTop:"30px"}}>
                    <Grid
                    item xs={12}
                    >
                        <TextField
                        //style={{width:"100%"}}
                        fullWidth
                        id="outlined-basic"
                        label="عنوان المهمة"
                        variant="outlined"
                        value={titleInput}
                        onChange={(e) =>
                        {
                            setTitleInput(e.target.value)
                        }
                        }
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="تفاصيل المهمة"
                            variant="outlined"
                            value={detailsInput}
                            onChange={(e) => setDetailsInput(e.target.value)}
                        />
                    </Grid>

                    <Grid
                    item xs={12}
                    >
                        <Button variant="contained"
                        fullWidth
                        onClick={() => {
                            handelAddClick();
                        }}
                        >اضافة</Button>
                    </Grid>

                </Grid>
                {/* ==== INPUT + ADD BUTTON ==== */}

            </CardContent>
        </Card>
      </Container>

  );
}