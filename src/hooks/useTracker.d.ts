export interface ScrollState {
  inViewport: boolean
  progress: number
  visibility: number
  viewport: number
}

export type Rect = {
  top: number
  bottom: number
  left: number
  right: number
  width: number
  height: number
  x: number
  y: number
}
export type Bounds = Rect & {
  positiveYUpBottom: number
}

export interface Tracker {
  rect: Rect | undefined
  scale: vec3 | undefined
  inViewport: boolean
  bounds: Bounds
  scrollState: ScrollState
  position: vec3
  update: (args?: { onlyUpdateInViewport?: boolean; scroll?: any }) => void
}

export interface TrackerOptions {
  rootMargin?: string
  threshold?: number
  autoUpdate?: boolean
  wrapper?: Window | HTMLDivElement
  [key: string]: any
}
