import { Grid,TextField, Button, Typography,Link,Box } from '@mui/material'
import { useState } from "react";
import {useNavigate } from 'react-router-dom';
import { logInUser } from '../config/firebasemethod';
function Login(){

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
        let login=()=>{
            logInUser(
                {
                    email,
                    password,
                   
                }
        )
        .then((userCredential) => {
    
            const user = userCredential.user;
            navigate('/todo')
            alert("Succesfull Loged In")
            console.log(user)
          })
          .catch((error) => {
            alert("Invalid Email & Password")
 
          });

        }

        let gotoLogin=()=>{
            navigate('/signup')
        }

        const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'13px 0'}
    return(
        <Grid style={paperStyle}>
            <Grid>
                <h2>SignUp</h2>
            </Grid>
            <Box>
        
        <TextField label='Email' variant='standard' onChange={(e)=>setEmail(e.target.value)}/>
        </Box>
        <Box>
        <TextField label='Password' type='password' variant='standard' onChange={(e)=>setPassword(e.target.value)}/>
        </Box>
        <Box>
        </Box>
        <Box>
        <Button color='primary' variant="contained" style={btnstyle}  onClick={login} >Log In</Button>
        </Box>
        <Typography >
                     
                </Typography>

                <Typography > 
                     <Link to='signup'  >
                       <Button onClick={gotoLogin}> create an account</Button>
                </Link>
                </Typography>
        </Grid>
    )
}
export default Login;