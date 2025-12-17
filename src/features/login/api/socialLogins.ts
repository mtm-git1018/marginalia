import { supabase } from "../../../shared/api/supabase"


export const kakaoLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback',
    },
  });
  if(data) alert('로그인 성공')
  if(error) throw new Error('카카오로그인 실패')
}



export const googleLogin = async() => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
      options: {
      redirectTo: 'http://localhost:3000/auth/callback',
    },
  })
  if (data) console.log(data)
  if (error) throw new Error('구글 소셜로그인 실패')
}