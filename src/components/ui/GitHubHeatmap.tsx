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
    if (count === 0) return 'rgba(255,255,255,0.04)'
    if (count <= 2) return 'rgba(124,58,237,0.3)'
    if (count <= 5) return 'rgba(124,58,237,0.5)'
    if (count <= 9) return 'rgba(124,58,237,0.75)'
    return 'rgba(124,58,237,1)'
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
      <div style={{ display: 'flex', gap: 3 }}>
        {weeks.map((week, weekIndex) => (
          <div key={`${weekIndex}-${week[0]?.date ?? 'week'}`} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {week.map((day) => (
              <button
                key={day.date}
                type="button"
                aria-label={`${day.count} contributions on ${day.date}`}
                onFocus={(event) => handleActivate(day, event.currentTarget.getBoundingClientRect().left + 6, event.currentTarget.getBoundingClientRect().top - 40)}
                onBlur={() => setTooltip(null)}
                onMouseEnter={(event) => handleActivate(day, event.clientX, event.clientY - 40)}
                onMouseLeave={() => setTooltip(null)}
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: 2,
                  background: getColor(day.count),
                  cursor: 'pointer',
                  transition: 'transform 0.15s, background 0.2s',
                  border: day.count > 0 ? '1px solid rgba(124,58,237,0.3)' : 'none',
                  padding: 0,
                  appearance: 'none',
                }}
                onMouseOver={(event) => {
                  event.currentTarget.style.transform = 'scale(1.4)'
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
            background: 'rgba(5,8,22,0.95)',
            border: '1px solid rgba(124,58,237,0.4)',
            borderRadius: 6,
            padding: '5px 10px',
            fontSize: 11,
            color: 'var(--text)',
            pointerEvents: 'none',
            zIndex: 9999,
            fontFamily: 'var(--font-mono)',
            whiteSpace: 'nowrap',
            transform: 'translateX(-50%)',
          }}
        >
          {tooltip.text}
        </div>
      ) : null}

      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8, justifyContent: 'flex-end' }}>
        <span style={{ fontSize: 10, color: 'var(--muted)' }}>Less</span>
        {[0, 2, 5, 9, 12].map((count) => (
          <div key={count} style={{ width: 10, height: 10, borderRadius: 2, background: getColor(count) }} />
        ))}
        <span style={{ fontSize: 10, color: 'var(--muted)' }}>More</span>
      </div>
    </div>
  )
}
