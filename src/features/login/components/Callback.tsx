import { useEffect, useState } from "react"
import { supabase } from "../../../shared/api/supabase"
import { useNavigate } from "react-router";
import LoadingSpinner from "../../../shared/components/loading/LoadingSpinner";

function Callback() {
  const navigate = useNavigate()
  const [error,setError] = useState<string | null>(null) 

  useEffect(() => {
      const handleCallback = async () => {
        try {
          const {
            data: { session },
            error:sessionError
          } = await supabase.auth.getSession();

          if (sessionError) {
            console.error('seesion Error', sessionError)
            setError('세션에러')
            setTimeout(() => navigate('/login', {replace:true}),2000)
            return
          }

          if (!session) {
                console.error('❌ No session found');
                setError('로그인 세션을 찾을 수 없습니다');
                setTimeout(() => navigate('/login', { replace: true }), 2000);
                return;
          }

          const uid = session?.user.id;
          const { data } = await supabase
            .from('user')
            .select('*')
            .eq('user_id', uid ?? '')
            .single();
          if (data) {
             setTimeout(() => navigate(`/${uid}`, { replace: true }), 500);
          } else {
           setTimeout(() => navigate(`/settings`, { replace: true }), 500);
          }
        } catch (err) {
          console.error('❌ Callback error:', err);
          setError(err instanceof Error ? err.message : '알 수 없는 오류');
          setTimeout(() => navigate('/login', { replace: true }), 2000);
        }
      };
    handleCallback()
  },[navigate])


  if (error) {
     return <div>로그인 정보를 확인하지 못 했습니다.</div>;
  }
  return (
    <LoadingSpinner/>
  )
 
}
export default Callback