import { useEffect, useState } from "react"
import { supabase } from "../../../shared/api/supabase"
import { useNavigate } from "react-router";

function Callback() {
  const navigate = useNavigate()
  const [error,setError] = useState<boolean | null>(null) 

  useEffect(() => {
      const handleCallback = async () => {
        try {
          const {
            data: { session },
          } = await supabase.auth.getSession();

          const uid = session?.user.id;
          const { data } = await supabase
            .from('user')
            .select('*')
            .eq('user_id', uid ?? '')
            .single();
          if (data) {
            navigate(`/${uid}`);
          } else {
            navigate(`/settings`);
          }
        } catch (err) {
          setError(true);
          console.error(err);
        }
      };
    handleCallback()
  },[navigate])


  if (error) {
     return <div>로그인 정보를 확인하지 못 했습니다.</div>;
  }
  return (
    <div>로그인 정보를 확인하고 있습니다.</div>
  )
 
}
export default Callback