import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "../api/supabase"
import type { User } from "@supabase/supabase-js";



const AuthContext = createContext<User | null | undefined>(undefined)

export function AuthProvider({ children }:{children:React.ReactNode}) {
  const [user,setUser] = useState<User|null>(null) 

  useEffect(() => {
      const getUser = async () => {
        const { data:{ session },error } = await supabase.auth.getSession();
        if(error) throw new Error ('유저 정보 가져오기 실패') 
        setUser(session?.user ?? null);
    };
    getUser()
  },[])

  return (
    <AuthContext.Provider value={user}>
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