import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
  } from "react-router-dom";
import Login from "../screens/login";
import Signup from '../screens/signup'
import Home from '../screens/home' 
import Todo from '../screens/todo' 
  function AppRouter(){
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="login"  element={<Login/>} />
                <Route path="signup" element={<Signup />}/>
                <Route path="todo" element={<Todo />} />
            </Routes>
        </Router>
        </>
    )

  }

  export default AppRouter