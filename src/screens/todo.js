import { TextField,Box, Button,Grid } from "@mui/material";
import { todoUser } from "../config/firebasemethod";
import {useState} from "react"
// import {set,ref} from "firebase/database"
function Todo(){
    const[text,setText]=useState("")
    const[time,setTime]=useState("")
    

    let AddTodo=()=>{
        // todoUser({
        //     text,
        //     time
        // })
        // .then((userCredential) => {
    
        //     const user = userCredential.user;
        //     // navigate('/todo')
        //     alert("Succesfull Loged In")
        //     console.log(user)
        //   })
        //   .catch((error) => {
        //     alert("Invalid Email & Password")
 
        //   });
        // const uid=uid();
        // const refrence=ref(database,`users/${user.uid}`)
        //  set(refrence,obj)

        const currentDate = new Date();
        const dt=currentDate.toDateString()
const setTime =`${currentDate.getHours()}:${currentDate.getMinutes()}`;
        console.log(setTime)
    }

    return(
        <>
        <Grid>
                <Box mt={5}>
                <TextField label="Enter Todo" onChange={(e)=>setText(e.target.value)}></TextField>
                </Box>
                <Box mt={2}>
                <Button variant="contained" onClick={AddTodo}>Enter</Button>
   
               </Box>
               </Grid>
               <Box>
                
               </Box>
     </>
    
    )
}
export default Todo;