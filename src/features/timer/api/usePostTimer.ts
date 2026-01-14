import { supabase } from "@/shared/api/supabase";
import { useMutation } from "@tanstack/react-query";

async function postTimer({ userId, time }: { userId:string,time:number}) {

  const { error } = await supabase.from('timer').upsert({
    user_id:userId,
    duration_time:time,
    read_date:new Date().toISOString().split('T')[0],
  })
  if (error) {
    console.error('타이머 저장 에러',error)
  }
}

export const usePostTimer = () => {
  return useMutation({
    mutationFn: ({ userId, time }: { userId: string; time: number }) => postTimer({userId,time}),
  });
}