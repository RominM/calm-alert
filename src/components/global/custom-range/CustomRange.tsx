import{ useEffect, useRef } from 'react'
import './custom-range.scss'

interface CustomRangeProps {
  label: string
  min: number
  max: number
  step: number
  value: number
  onChange: (value: number) => void
  unit?: string
}

export function CustomRange({
  label,
  min,
  max,
  step,
  value,
  onChange,
  unit = ''
}: CustomRangeProps) {
  const rangeRef = useRef<HTMLInputElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!rangeRef.current || !tooltipRef.current || !containerRef.current) return

    const percent = ((value - min) / (max - min)) * 100

    rangeRef.current.style.background = `linear-gradient(to right, black 0%, black ${percent}%, #ccc ${percent}%, #ccc 100%)`

    tooltipRef.current.style.left = `calc(${percent}% - 16px)`
  }, [value, min, max])

  return (
    <div className="custom-range-container" ref={containerRef}>
      <label className="custom-range-label">{label}</label>

      <div className="custom-range-wrapper">
        <input
          ref={rangeRef}
          type="range"
          className="custom-range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <div ref={tooltipRef} className="custom-range-tooltip">
          {value} {unit}
        </div>
      </div>
    </div>
  )
}
