import { useMemo } from "react";
import { Bar, BarChart, CartesianGrid,Cell,ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
 
/* 
  BarChart,      // 차트 컨테이너
  Bar,           // 막대
  XAxis,         // X축
  YAxis,         // Y축
  CartesianGrid, // 그리드
  Tooltip,       // 마우스 오버 툴팁
  Legend,        // 범례
  ResponsiveContainer  // 반응형 래퍼
*/

type MonthlyData =  {
  month: string;
  books: number
}[] | undefined

interface Props {
  data: MonthlyData
}


function BarChartSection({ data }: Props) {
  
    const maxBooks = useMemo(() => {
      if (!data || data.length === 0) return 0;
      return Math.max(...data.map((d) => d.books));
    }, [data]);
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 10, left: -30, bottom: 5 }} >
        <CartesianGrid strokeDasharray="3 3" stroke="e0d8cc" vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fill: '#5D4E37', fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: '#e0d8cc' }}
        />
        <YAxis
          tick={{ fill: '#5D4E37', fontSize: 12 }}
          tickLine={false}
          axisLine={false}
          allowDecimals={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#faf8f3',
            border: '1px solid #bda694',
            borderRadius: '8px',
          }}
          labelStyle={{ color: '#3E3526', fontWeight: 600 }}
          itemStyle={{ color: '#5D4E37' }}
        />

        <Bar
          dataKey="books"
          name='완독한 책'
          fill="#7c9473"
          radius={[8, 8, 0, 0]} 
          maxBarSize={40}
        >
          {data?.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.books === maxBooks && maxBooks > 0 ? '#c9a65c' : '#7c9473'}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
export default BarChartSection