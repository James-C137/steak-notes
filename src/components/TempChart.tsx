import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend } from 'recharts';
import styles from './TempChart.module.css';

interface TempChartProps {
  data: { time: number; core: number; surface?: number }[];
  targetTemp?: number;
  ovenTemp?: number;
  title?: string;
}

export default function TempChart({ data, targetTemp, ovenTemp, title }: TempChartProps) {
  const hasSurface = data.some(d => d.surface !== undefined);
  return (
    <div className={styles.card}>
      {title && <h4 className="text-lg font-bold mb-4 text-charcoal">{title}</h4>}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 2, bottom: 6 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(26, 26, 26, 0.2)" />
          <XAxis
            dataKey="time"
            label={{ value: 'Minutes', position: 'bottom', offset: -5 }}
            stroke="#2D2D2D"
          />
          <YAxis
            label={{ value: '°F', angle: -90, position: 'insideLeft' }}
            stroke="#2D2D2D"
            domain={[0, 225]}
          />
          <Legend wrapperStyle={{ paddingTop: 20 }} />
          <Tooltip
            contentStyle={{
              border: '3px solid var(--color-charcoal)',
              boxShadow: '4px 4px 0px 0px var(--color-charcoal)',
              borderRadius: '0.5rem',
              backgroundColor: 'var(--color-parchment)',
              padding: '8px 12px',
            }}
            labelStyle={{ color: 'var(--color-charcoal)', marginBottom: 4 }}
            itemStyle={{ color: 'var(--color-charcoal)', padding: '2px 0' }}
            labelFormatter={(value) => `${value} min`}
            formatter={(value: number, name: string) => [`${value}°F`, name]}
          />
          {ovenTemp && (
            <ReferenceLine
              y={ovenTemp}
              stroke="var(--color-terracotta)"
              strokeDasharray="5 5"
              label={{ value: `Oven: ${ovenTemp}°F`, fill: 'var(--color-terracotta)', fontWeight: 'bold', position: 'insideBottomLeft' }}
            />
          )}
          {targetTemp && (
            <ReferenceLine
              y={targetTemp}
              stroke="var(--color-ochre)"
              strokeDasharray="5 5"
              label={{ value: `Core: ${targetTemp}°F`, fill: 'var(--color-ochre)', fontWeight: 'bold', position: 'insideBottomLeft' }}
            />
          )}
          <Line
            type="monotone"
            dataKey="core"
            name="Core"
            stroke="var(--color-ochre)"
            strokeWidth={3}
            dot={{ fill: 'var(--color-ochre)', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: 'var(--color-ochre)' }}
          />
          {hasSurface && (
            <Line
              type="monotone"
              dataKey="surface"
              name="Surface"
              stroke="var(--color-sage)"
              strokeWidth={3}
              dot={{ fill: 'var(--color-sage)', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: 'var(--color-sage)' }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
