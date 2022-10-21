import { Grid,TextField, Button, Typography,Link,Box } from '@mui/material'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {signUpUser} from '../config/firebasemethod';
function Signup(){

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [username,setUserName]=useState("")
    const [contact,setContact]=useState("")
    const navigate=useNavigate()
    let SignUp=()=>{
        signUpUser(
            {
                email,
                password,
                username,
                contact
            }
    )
    .then((userCredential) => {

        const user = userCredential.user;
        navigate('/login')
        alert("Your Account Have Been Created")
      })
      .catch((error) => {
        alert("This Account already Availlable")
      });
    }

    let gotoSignUp=()=>{
        navigate('/login')
    }
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'13px 0'}
    return(
        <Grid style={paperStyle}>
            <Grid>
                <h2>SignUp</h2>
            </Grid>
            <Box>
        <TextField label='UserName' variant='standard' onChange={(e)=>setUserName(e.target.value)}/>
        </Box>
            <Box>
        <TextField label='Email' variant='standard' onChange={(e)=>setEmail(e.target.value)}/>
        </Box>
        <Box>
        <TextField label='Password' type='password' variant='standard' onChange={(e)=>setPassword(e.target.value)}/>
        </Box>
        
        <Box>
        <TextField label='Contact' type='text' variant='standard' onChange={(e)=>setContact(e.target.value)}/>
        </Box>
        <Box>
        </Box>
        <Box>
        <Button color='primary' variant="contained" style={btnstyle}  onClick={SignUp} >Sign Up</Button>
        </Box>
        <Typography >
                     
                </Typography>

                <Typography > 
                     <Link to='login' >
                      <Button onClick={gotoSignUp}>   Login Page</Button> 
                </Link>
                </Typography>
        </Grid>
    )
}

export default Signup;