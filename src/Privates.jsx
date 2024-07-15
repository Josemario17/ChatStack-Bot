import { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './Contexts/users'
import { onAuthStateChanged } from 'firebase/auth';

export default function Private({ children }){
  const { signed, signIn } = useContext(AuthContext);
  useEffect(()=>{
    async function checkLogin(){
      onAuthStateChanged(auth, (user)=>{
        if(user){
          signIn(user.email)
        }

        else{

        }
      })
    }
    checkLogin()
  }, [signIn])
  if(!!signed){
    return  <Navigate to="/"/>
  }


  return children;

}