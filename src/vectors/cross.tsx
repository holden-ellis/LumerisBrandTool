import type { VectorModule } from './types'
import { coverageGridCells } from './coverageGrid'

// SPEC.md §4.4 — same coverage/spread/origin mechanism and uniformSchema as
// Dot; only the shape differs. Drawn as two crossed strokes (not an SVG
// text glyph) so it renders identically across browsers/OS and exports
// crisply at any size, same reasoning as Dot/Square being pure geometry.
// `radius` is reused unchanged from Dot — Walker's ask was the exact same
// settings, just a different mark — and stroke width is derived from it
// rather than adding a new param.
export const crossVector: VectorModule = {
  id: 'cross',
  label: 'X',
  uniformSchema: [
    { key: 'cellsAcross', label: 'Cells across', type: 'float', unit: 'cellsAcross', min: 4, max: 60, step: 1, default: 20 },
    { key: 'radius', label: 'Radius', type: 'float', min: 0.05, max: 0.5, step: 0.01, default: 0.3 },
    { key: 'coverage', label: 'Coverage', type: 'float', min: 0, max: 1, step: 0.01, default: 0.6 },
    { key: 'spread', label: 'Spread', type: 'float', min: 0.05, max: 1.5, step: 0.01, default: 0.35 },
    { key: 'originX', label: 'Position X', type: 'float', unit: 'normalized', min: 0, max: 1, step: 0.01, default: 0.5 },
    { key: 'originY', label: 'Position Y', type: 'float', unit: 'normalized', min: 0, max: 1, step: 0.01, default: 0.5 },
    { key: 'color', label: 'Color', type: 'color', default: '#FEFB53' },
    { key: 'opacity', label: 'Opacity', type: 'float', min: 0, max: 1, step: 0.01, default: 1 },
    { key: 'blendMode', label: 'Blend mode', type: 'enum', options: ['normal', 'multiply', 'screen', 'overlay'], default: 'normal' },
  ],
  render: ({ size, seed, values }) => {
    const cellsAcross = Number(values.cellsAcross)
    const radius = Number(values.radius) * (size.width / cellsAcross)
    const color = String(values.color)
    const opacity = Number(values.opacity)
    const blendMode = String(values.blendMode)
    const strokeWidth = radius * 0.35

    const cells = coverageGridCells({
      size,
      seed,
      cellsAcross,
      coverage: Number(values.coverage),
      spread: Number(values.spread),
      originX: Number(values.originX),
      originY: Number(values.originY),
    })

    return (
      <g opacity={opacity} style={{ mixBlendMode: blendMode as React.CSSProperties['mixBlendMode'] }}>
        {cells.map(({ cx, cy }) => (
          <g key={`${cx}-${cy}`}>
            <line x1={cx - radius} y1={cy - radius} x2={cx + radius} y2={cy + radius} stroke={color} strokeWidth={strokeWidth} strokeLinecap="butt" />
            <line x1={cx - radius} y1={cy + radius} x2={cx + radius} y2={cy - radius} stroke={color} strokeWidth={strokeWidth} strokeLinecap="butt" />
          </g>
        ))}
      </g>
    )
  },
}
