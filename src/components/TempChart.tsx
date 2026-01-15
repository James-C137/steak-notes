import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import styles from './TempChart.module.css';

interface TempChartProps {
  data: { time: number; temp: number }[];
  targetTemp?: number;
  title?: string;
}

export default function TempChart({ data, targetTemp, title }: TempChartProps) {
  return (
    <div className={styles.card}>
      {title && <h4 className="text-lg font-bold mb-4 text-charcoal">{title}</h4>}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(26, 26, 26, 0.2)" />
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
              border: '3px solid var(--color-charcoal)',
              boxShadow: '4px 4px 0px 0px var(--color-charcoal)',
              borderRadius: '0.5rem',
              backgroundColor: 'var(--color-parchment)',
            }}
            labelStyle={{ color: 'var(--color-charcoal)' }}
            itemStyle={{ color: 'var(--color-charcoal)' }}
            labelFormatter={(value) => `${value} min`}
            formatter={(value: number) => [`${value}°F`, 'Temp']}
          />
          {targetTemp && (
            <ReferenceLine
              y={targetTemp}
              stroke="var(--color-ochre)"
              strokeDasharray="5 5"
              label={{ value: `Target: ${targetTemp}°F`, fill: 'var(--color-ochre)', fontWeight: 'bold' }}
            />
          )}
          <Line
            type="monotone"
            dataKey="temp"
            stroke="var(--color-ochre)"
            strokeWidth={3}
            dot={{ fill: 'var(--color-ochre)', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: 'var(--color-terracotta)' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
