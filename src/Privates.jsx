import { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './Contexts/users'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../conectar';

export default function Private({ children }){
  const { signIn, user } = useContext(AuthContext);
  const Login = sessionStorage.getItem("login")
  useEffect(()=>{
    async function checkLogin(){
      if(Login === "true"){
        onAuthStateChanged(auth, (user)=>{
          if(user){
            signIn(user.email)
          }
        })
      }
      else{
        signIn(false)
      }
    }
    checkLogin()
  }, [signIn])

  
  if(!user){
    return  <Navigate to="/"/>
  }


  return children;

}