import { onAuthStateChanged, type User } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../api/firebase"


interface AuthType{
  user: User | null,
  loading:boolean
}

const AuthContext = createContext<AuthType | null>(null)

export function AuthProvider({ children}:{children:React.ReactNode}) {
  const [user, setUser] = useState<User|null>(null)
  const [loading,setLoading] = useState(true)
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])
  

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('유저 정보 가져오기 실패')
  }
  return ctx
}