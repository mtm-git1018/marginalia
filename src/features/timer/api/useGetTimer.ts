import { supabase } from "@/shared/api/supabase";
import { useQuery } from "@tanstack/react-query";

function getMonday(date: Date){ 
  const day = date.getDay()
  const diff = date.getDate() - day + (day === 0 ? -6 : 1)
  return new Date(date.setDate(diff))
}

async function getTimer(userId:string) {

  const today = new Date().toISOString().split('T')[0]
  const monday = getMonday(new Date()).toISOString().split('T')[0]
  const firstDayOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  ).toISOString().split('T')[0]

    const [todayResult, weekResult, monthResult] = await Promise.all([
      // 오늘 데이터
      supabase
        .from('timer')
        .select('duration_time')
        .eq('user_id', userId)
        .eq('read_date', today),

      // 이번 주 데이터 (월요일부터)
      supabase
        .from('timer')
        .select('duration_time')
        .eq('user_id', userId)
        .gte('read_date', monday),

      // 이번 달 데이터
      supabase
        .from('timer')
        .select('duration_time')
        .eq('user_id', userId)
        .gte('read_date', firstDayOfMonth),
    ]);

  
  if (todayResult.error || weekResult.error || monthResult.error) {
    const error = todayResult.error || weekResult.error || monthResult.error;
    console.error('통계 조회 실패:', error);
    throw error;
  }
    
 return {
   today: todayResult.data.reduce((sum, s) => sum + (s.duration_time ?? 0), 0),
   week: weekResult.data.reduce((sum, s) => sum + (s.duration_time ?? 0), 0),
   month: monthResult.data.reduce((sum, s) => sum + (s.duration_time ?? 0), 0),
 };
}

export const useGetTimer = (userId:string) =>{ 
  return useQuery({
    queryKey: ['timer', userId],
    queryFn: () => getTimer(userId),
    enabled:!!userId
  })
}