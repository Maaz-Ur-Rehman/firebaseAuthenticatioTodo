import app from './firebaseconfig'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase,ref, set, onValue,auth} from "firebase/database";
import {uid } from "uid"

const auth = getAuth(app);
const database=getDatabase(app)
let signUpUser=(obj)=>{

    let{email,password,username,contact}=obj
       return new Promise((resolve,reject)=>{
        createUserWithEmailAndPassword(auth, email, password,username,contact)
        .then((userCredential)=>{
 
         const user = userCredential.user
         const refrence=ref(database,`users/${user.uid}`)
         set(refrence,obj)
         .then(()=>{
            resolve("user created successfull into database")
         })
         .catch((err)=>{
            reject("Your Data is not Same Your Data")
         })
        })
        .catch((err)=>{
            reject("This Email already used")
        })
 
       })
       
    
  
}
let logInUser=(obj)=>{
   let{email,password}=obj
  return new Promise((resolve,reject)=>{
   signInWithEmailAndPassword(auth, email, password)
   .then((userCredential)=>{
      const user=userCredential.user
      const reference = ref(database, `users/${user.uid}`);
      onValue(reference,(e)=>{
         let status=e.exists()
         console.log(status)
         if(status){
            resolve(e.val())
         }
         else{
            reject("Data not found")
         }

      })
   })
   .catch((error)=>{
      const errorMessage = error.message;
      console.log(errorMessage);
      reject("Email and Password is Incorect");
   })

})   

}
let todoUser=(obj)=>{
   let{time,text,username}=obj

   // return new Promise((resolve,reject)=>{
      // signInWithEmailAndPassword(auth,time,username,text)
      // .then((userCredential)=>{

      //  const user = userCredential.user
      // const uid=uid()
      //  const refrence=ref(database,`TodosUsers/${hoi}`)
      //  set(refrence,obj)
      const uid=uid();
      const refrence=ref(database,`TodoUsers/${auth.user.uid}/${uid}`)
       set(refrence,obj)
      //  .then(()=>{
      //     resolve("user created successfull into database")
      //  })
      //  .catch((err)=>{
      //     reject("Your Data is not Same Your Data")
      //  })
      // // })
      // .catch((err)=>{
      //     reject("This Email already used")
      // })

     })
     
   
}
export {signUpUser,logInUser,todoUser}