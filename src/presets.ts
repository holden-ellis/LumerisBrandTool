import type { PresetLook } from './state'

// SPEC.md §5.2 — named presets are "art-directed by Holden Ellis," the
// brand-governance layer. These are the client's most-frequently-used looks,
// provided as shareable-state links (2026-09-02) and decoded into preset
// params here. Canvas/fit/seed from the source links are intentionally
// dropped — a preset is a look applied to whatever canvas/image is already
// active (see PresetLook doc comment in state.ts), not a session snapshot.
export const PRESETS: PresetLook[] = [
  {
    id: 'event',
    label: 'Event',
    shader: {
      id: 'pixelated',
      params: { cellsAcross: 280, bg: '#081011', fg: '#FEFB53' },
    },
    vector: { id: 'none', params: {} },
  },
  {
    id: 'tom-in-practice',
    label: 'Tom in Practice',
    shader: {
      id: 'dither',
      params: {
        cellsAcross: 400,
        matrixType: 'bayer8',
        levels: 2,
        contrast: 2.65,
        fg: '#E6EDDE',
        bg: '#032C30',
      },
    },
    vector: { id: 'none', params: {} },
  },
  {
    id: 'diagonal-line-halftone',
    label: 'Diagonal Line Halftone',
    shader: {
      id: 'halftone',
      params: {
        cellsAcross: 200,
        dotShape: 'line',
        screenAngle: 30,
        contrast: 1,
        fg: '#212100',
        bg: '#FFFAE9',
      },
    },
    vector: { id: 'none', params: {} },
  },
  {
    id: 'dither-1',
    label: 'Dither 1',
    shader: {
      id: 'dither',
      params: {
        cellsAcross: 193,
        matrixType: 'bayer4',
        levels: 3,
        contrast: 1,
        fg: '#FFFAE9',
        bg: '#1836F0',
      },
    },
    vector: { id: 'none', params: {} },
  },
  {
    id: 'dither-2',
    label: 'Dither 2',
    shader: {
      id: 'dither',
      params: {
        cellsAcross: 400,
        matrixType: 'bayer8',
        levels: 6,
        contrast: 1.6,
        fg: '#FFFAE9',
        bg: '#081011',
      },
    },
    vector: { id: 'none', params: {} },
  },
  {
    id: 'pixelated-large',
    label: 'Pixelated Large',
    shader: {
      id: 'pixelated',
      params: { cellsAcross: 9, bg: '#081011', fg: '#FEFB53' },
    },
    vector: { id: 'none', params: {} },
  },
  {
    id: 'pixelated-medium',
    label: 'Pixelated Medium',
    shader: {
      id: 'pixelated',
      params: { cellsAcross: 30, bg: '#081011', fg: '#FEFB53' },
    },
    vector: { id: 'none', params: {} },
  },
  {
    id: 'pixelated-small',
    label: 'Pixelated Small',
    shader: {
      id: 'pixelated',
      params: { cellsAcross: 100, bg: '#081011', fg: '#FEFB53' },
    },
    vector: { id: 'none', params: {} },
  },
  {
    id: 'vector-dot-lower-right',
    label: 'Vector Dot Lower Right',
    shader: { id: 'none', params: {} },
    vector: {
      id: 'dot',
      params: {
        cellsAcross: 49,
        radius: 0.2,
        coverage: 0.81,
        spread: 0.37,
        originX: 0.86,
        originY: 1,
        color: '#FEFB53',
        opacity: 1,
        blendMode: 'normal',
      },
    },
  },
  {
    id: 'vector-dot-everywhere',
    label: 'Vector Dot Everywhere',
    shader: { id: 'none', params: {} },
    vector: {
      id: 'dot',
      params: {
        cellsAcross: 48,
        radius: 0.23,
        coverage: 0.3,
        spread: 1.5,
        originX: 0.5,
        originY: 0.5,
        color: '#FEFB53',
        opacity: 1,
        blendMode: 'normal',
      },
    },
  },
]
