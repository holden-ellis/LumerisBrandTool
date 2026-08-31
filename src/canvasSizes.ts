import type { Size } from './fit'

export interface CanvasSize {
  id: string
  label: string
  width: number
  height: number
}

// SPEC.md §3.1 — 'native' takes its dimensions from the loaded image rather
// than a fixed size (see resolveCanvasSize).
export const NATIVE_ID = 'native'

// SPEC.md §3.1/§3.2 — the largest edge a 'native' canvas may reach. Matches
// Story's long edge (1920); a larger image is scaled down to fit, preserving
// its exact aspect ratio. Smaller images are used as-is, never upscaled.
const NATIVE_MAX_EDGE = 1920

// SPEC.md §3.1
export const CANVAS_SIZES: CanvasSize[] = [
  { id: 'link-og', label: 'Link / OG', width: 1200, height: 627 },
  { id: 'square', label: 'Square', width: 1080, height: 1080 },
  { id: 'landscape-hd', label: 'Landscape HD', width: 1920, height: 1080 },
  { id: 'portrait', label: 'Portrait', width: 1080, height: 1350 },
  { id: 'story', label: 'Story', width: 1080, height: 1920 },
  { id: 'ratio-3-4', label: 'Portrait 3:4', width: 1080, height: 1440 },
  { id: 'ratio-4-3', label: 'Landscape 4:3', width: 1440, height: 1080 },
  { id: 'ratio-2-3', label: 'Portrait 2:3', width: 1080, height: 1620 },
  { id: 'ratio-3-2', label: 'Landscape 3:2', width: 1620, height: 1080 },
  { id: 'ratio-5-4', label: 'Landscape 5:4', width: 1350, height: 1080 },
  // width/height here are only the placeholder frame shown when 'native' is
  // selected with no image loaded yet.
  { id: NATIVE_ID, label: 'Native (image ratio)', width: 1080, height: 1080 },
]

// Every fixed size is a plain lookup. 'native' derives width/height from the
// loaded image, scaled so the longest edge is at most NATIVE_MAX_EDGE. Pure
// and cheap — called on every render with the current (sizeId, imageSize).
export function resolveCanvasSize(id: string, imageSize: Size | null): CanvasSize {
  const base = CANVAS_SIZES.find((s) => s.id === id) ?? CANVAS_SIZES[0]
  if (id !== NATIVE_ID || !imageSize) return base

  const longest = Math.max(imageSize.width, imageSize.height)
  const scale = Math.min(1, NATIVE_MAX_EDGE / longest)
  return {
    ...base,
    width: Math.max(1, Math.round(imageSize.width * scale)),
    height: Math.max(1, Math.round(imageSize.height * scale)),
  }
}
