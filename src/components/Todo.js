import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

//ICONS
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

//DIALOG
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Todo({title , details, isCompleted, onComplete, onDelete, onEdit}){

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const[openEditDialog, setOpenEditDialog ] = useState(false);
    const[editTitle, setEditTitle] = useState("");
    const[editDetails, setEditDetails] = useState("");

    return(
        <>

        <Card className = "todoCard" sx={{ minWidth: 275 , background:"#2F7DC3" , color:"white" , marginTop:"30px" }}>
            <CardContent>

                <Grid container spacing={2}>
                    <Grid size={8}>
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "right",
                            textDecoration: isCompleted ? "line-through" : "none",
                            opacity: isCompleted ? 0.6 : 1,
                        }}
                        >
                        {title}
                        </Typography>

                        <Typography
                        variant="h6"
                        sx={{
                            textAlign: "right",
                            textDecoration: isCompleted ? "line-through" : "none",
                            opacity: isCompleted ? 0.6 : 1,
                        }}
                        >
                        {details}
                        </Typography>
                    </Grid>

                    {/*ACTION BUTTONS*/}
                    <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">

                        <IconButton
                        className="iconButton" aria-label="check"
                        onClick={onComplete}
                        style={{
                            color: isCompleted?"white":"#49A950", background: isCompleted?"#49A950":"white",border:"solid #49A950 3px",}}>
                            <CheckIcon />
                        </IconButton>

                        <IconButton
                        className="iconButton" aria-label="edit"
                        onClick={() => {
                            setEditTitle(title);
                            setEditDetails(details);
                            setOpenEditDialog(true);
                        }}
                        style={{
                            color:"#808080", background:"white",border:"solid #808080 3px",}}>
                            <ModeEditOutlineOutlinedIcon />
                        </IconButton>

                        <IconButton
                        className="iconButton"
                        aria-label="delete"
                        onClick={() => setOpenDeleteDialog(true)}
                        style={{
                            color:"#EC3432", background:"white",border:"solid #EC3432 3px",}}>
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>

                    </Grid>
                    {/*=== ACTION BUTTONS ===*/}
                </Grid>
            </CardContent>
        </Card>
        {/*=== DELETE DIALOG ===*/}
        <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
            <DialogTitle>{"تأكيد الحذف"}</DialogTitle>
            <DialogContent>
                <DialogContentText>هل أنت متأكد أنك تريد حذف هذه المهمة؟</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenDeleteDialog(false)}>لا</Button>
                <Button
                    onClick={() => {
                        onDelete();
                        setOpenDeleteDialog(false);
                    }}
                    color="error"
                    autoFocus
                >
                    نعم
                </Button>
            </DialogActions>
        </Dialog>
        {/*=== END DELETE DIALOG ===*/}

        {/*EDIT DIALOG */}
        <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
            <DialogTitle>تعديل المهمة</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                margin="dense"
                label="عنوان المهمة"
                type="text"
                fullWidth
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                />
                <TextField
                margin="dense"
                label="تفاصيل المهمة"
                type="text"
                fullWidth
                value={editDetails}
                onChange={(e) => setEditDetails(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenEditDialog(false)} color="primary">إلغاء</Button>
                <Button
                onClick={() => {
                    if (editTitle.trim() === "" || editDetails.trim() === "") {
                        alert("الرجاء ملء جميع الحقول");
                        return;
                    }
                    onEdit(editTitle, editDetails);
                    setOpenEditDialog(false);
                }}
                color="primary"
                >
                حفظ
                </Button>
            </DialogActions>
            </Dialog>
        {/*=== END EDIT DIALO === */}

        </>

    );
}