import { useState, createContext, useEffect } from 'react';

const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState("")

  function signIn(email){
    setUser(email)
  }

  return(
    <AuthContext.Provider 
      value={{
        signed: !!user,
        user,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export {AuthContext}