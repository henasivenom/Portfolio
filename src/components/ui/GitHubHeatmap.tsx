'use client'

import { useState } from 'react'

interface DayData {
  date: string
  count: number
}

interface Props {
  data: DayData[]
}

export function GitHubHeatmap({ data }: Readonly<Props>) {
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null)

  const getColor = (count: number) => {
    // Slightly richer palette and softer alpha steps for improved contrast
    if (count === 0) return 'rgba(255,255,255,0.03)'
    if (count <= 2) return 'rgba(124,58,237,0.22)'
    if (count <= 5) return 'rgba(124,58,237,0.42)'
    if (count <= 9) return 'rgba(124,58,237,0.68)'
    return 'rgba(124,58,237,0.98)'
  }

  const weeks: DayData[][] = []
  for (let index = 0; index < data.length; index += 7) {
    weeks.push(data.slice(index, index + 7))
  }

  const handleActivate = (day: DayData, x: number, y: number) => {
    setTooltip({ text: `${day.count} contributions on ${day.date}`, x, y })
  }

  return (
    <div style={{ position: 'relative', overflowX: 'auto' }}>
      <div style={{ display: 'flex', gap: 6, padding: '6px 4px' }}>
        {weeks.map((week, weekIndex) => (
          <div key={`${weekIndex}-${week[0]?.date ?? 'week'}`} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {week.map((day) => (
              <button
                key={day.date}
                type="button"
                aria-label={`${day.count} contributions on ${day.date}`}
                onFocus={(event) => handleActivate(day, event.currentTarget.getBoundingClientRect().left + 8, event.currentTarget.getBoundingClientRect().top - 42)}
                onBlur={() => setTooltip(null)}
                onMouseEnter={(event) => handleActivate(day, event.clientX, event.clientY - 48)}
                onMouseLeave={() => setTooltip(null)}
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 4,
                  background: getColor(day.count),
                  cursor: 'pointer',
                  transition: 'transform 0.12s ease, box-shadow 0.12s ease',
                  boxShadow: day.count > 0 ? '0 2px 6px rgba(0,0,0,0.25)' : 'none',
                  border: day.count > 0 ? '1px solid rgba(124,58,237,0.22)' : '1px solid rgba(255,255,255,0.02)',
                  padding: 0,
                  appearance: 'none',
                }}
                onMouseOver={(event) => {
                  event.currentTarget.style.transform = 'scale(1.25)'
                }}
                onMouseOut={(event) => {
                  event.currentTarget.style.transform = 'scale(1)'
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {tooltip ? (
        <div
          style={{
            position: 'fixed',
            left: tooltip.x,
            top: tooltip.y,
            background: 'rgba(3,6,15,0.96)',
            border: '1px solid rgba(124,58,237,0.34)',
            borderRadius: 8,
            padding: '6px 10px',
            fontSize: 12,
            color: 'var(--text)',
            pointerEvents: 'none',
            zIndex: 9999,
            fontFamily: 'var(--font-mono)',
            whiteSpace: 'nowrap',
            transform: 'translate(-50%, -100%)',
          }}
        >
          {tooltip.text}
        </div>
      ) : null}

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10, justifyContent: 'flex-end' }}>
        <span style={{ fontSize: 11, color: 'var(--muted)' }}>Less</span>
        {[0, 2, 5, 9, 12].map((count) => (
          <div key={count} style={{ width: 12, height: 12, borderRadius: 3, background: getColor(count) }} />
        ))}
        <span style={{ fontSize: 11, color: 'var(--muted)' }}>More</span>
      </div>
    </div>
  )
}
