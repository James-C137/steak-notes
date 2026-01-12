import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

interface TempChartProps {
  data: { time: number; temp: number }[];
  targetTemp?: number;
  title?: string;
}

export default function TempChart({ data, targetTemp, title }: TempChartProps) {
  return (
    <div className="brutal-card p-6 my-8 bg-white">
      {title && <h4 className="text-lg font-bold mb-4 text-charcoal">{title}</h4>}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DD" />
          <XAxis
            dataKey="time"
            label={{ value: 'Minutes', position: 'bottom', offset: -5 }}
            stroke="#2D2D2D"
          />
          <YAxis
            label={{ value: '°F', angle: -90, position: 'insideLeft' }}
            stroke="#2D2D2D"
          />
          <Tooltip
            contentStyle={{
              border: '3px solid #1A1A1A',
              boxShadow: '4px 4px 0px 0px #1A1A1A',
              borderRadius: 0,
            }}
          />
          {targetTemp && (
            <ReferenceLine
              y={targetTemp}
              stroke="#D4714A"
              strokeDasharray="5 5"
              label={{ value: `Target: ${targetTemp}°F`, fill: '#D4714A', fontWeight: 'bold' }}
            />
          )}
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#E07A5F"
            strokeWidth={3}
            dot={{ fill: '#E07A5F', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#D4714A' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
