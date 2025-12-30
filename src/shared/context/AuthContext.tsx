import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "../api/supabase"
import type { User } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null,
  loading:boolean
}

const AuthContext = createContext< AuthContextType | undefined>(undefined)

export function AuthProvider({ children }:{children:React.ReactNode}) {
  const [user, setUser] = useState<User | null>(null) 
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => { 
      setUser(session?.user ?? null);
      setLoading(false);
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return() => subscription.unsubscribe()
  
  },[])

  return (
    <AuthContext.Provider value={{user,loading}}>
      { children }
  </AuthContext.Provider>  
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext)
  if(ctx === undefined) throw new Error('useAuth는 AuthProvider 내부에서만 사용할 수 있습니다.');
  return ctx
}