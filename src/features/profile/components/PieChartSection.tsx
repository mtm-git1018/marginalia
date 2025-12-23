import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

function PieChartSection() {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={90}
          innerRadius={60}
          fill="#8884d8"
          dataKey="count"
          animationDuration={800}
        >
          {chartData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip/>
      </PieChart>
      <p>장르는 ISBN을 기반으로 분석하여 실제와 다를 수 있습니다.</p>
    </ResponsiveContainer>
  );
}
export default PieChartSection