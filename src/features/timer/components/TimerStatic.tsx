import { useAuth } from "@/shared/context/AuthContext";
import { useGetTimer } from "../api/useGetTimer";

function TimerStatic() {
  const { user } = useAuth()
  const { data} = useGetTimer(user?.id ?? '')

  const timerStatic = [
    {
      data: data?.today,
      title: '오늘',
    },
    {
      data: data?.week,
      title: '이번 주',
    },
    {
      data: data?.month,
      title: '이번 달 총 독서시간',
    },
  ];

  return (
    <div className="w-full grid grid-cols-3 gap-4 mt-4">
      {
        timerStatic.map(({ data, title }) => (
          <div className="text-center p-3 bg-background rounded-lg"
            key={title}>
            <p className="text-2xl font-bold text-sageGreen">{data}분</p>
            <p className="text-xs text-text/60 mt-1">{title}</p>
           </div>
        ))
      }
    </div>
  );
}
export default TimerStatic