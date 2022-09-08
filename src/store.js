import create from 'zustand'
import { requestIdleCallback } from './polyfills/requestIdleCallback'
import { subscribeWithSelector } from 'zustand/middleware'

import config from './config'

const useCanvasStore = create(
  subscribeWithSelector((set) => ({
    // //////////////////////////////////////////////////////////////////////////
    // GLOBAL ScrollRig STATE
    // //////////////////////////////////////////////////////////////////////////
    globalRenderQueue: false,
    clearGlobalRenderQueue: () => set(() => ({ globalRenderQueue: false })),

    // true if WebGL initialized without errors
    isCanvasAvailable: true,
    setCanvasAvailable: (isCanvasAvailable) => set(() => ({ isCanvasAvailable })),

    // true if <VirtualScrollbar> is currently enabled
    hasVirtualScrollbar: false,
    setVirtualScrollbar: (hasVirtualScrollbar) => set(() => ({ hasVirtualScrollbar })),

    // map of all components to render on the global canvas
    canvasChildren: {},

    // add component to canvas
    renderToCanvas: (key, mesh, props = {}) =>
      set(({ canvasChildren }) => {
        // check if already mounted
        if (Object.getOwnPropertyDescriptor(canvasChildren, key)) {
          // increase usage count
          canvasChildren[key].instances += 1
          canvasChildren[key].props.inactive = false
          return { canvasChildren }
        } else {
          // otherwise mount it
          const obj = { ...canvasChildren, [key]: { mesh, props, instances: 1 } }
          return { canvasChildren: obj }
        }
      }),

    // pass new props to a canvas component
    updateCanvas: (key, newProps) =>
      set(({ canvasChildren }) => {
        if (!canvasChildren[key]) return
        const {
          [key]: { mesh, props, instances },
        } = canvasChildren
        const obj = {
          ...canvasChildren,
          [key]: { mesh, props: { ...props, ...newProps }, instances },
        }
        // console.log('updateCanvas', key, { ...props, ...newProps })
        return { canvasChildren: obj }
      }),

    // remove component from canvas
    removeFromCanvas: (key, dispose = true) =>
      set(({ canvasChildren }) => {
        // check if remove or reduce instances
        if (canvasChildren[key]?.instances > 1) {
          // reduce usage count
          canvasChildren[key].instances -= 1
          return { canvasChildren }
        } else {
          if (dispose) {
            // unmount since no longer used
            const { [key]: _omit, ...obj } = canvasChildren // make a separate copy of the obj and omit
            return { canvasChildren: obj }
          } else {
            // or tell it to "act" hidden
            canvasChildren[key].instances = 0
            canvasChildren[key].props.inactive = true
            return { canvasChildren }
          }
        }
      }),

    // Used to ask components to re-calculate their positions after a layout reflow
    pageReflowRequested: 0,
    pageReflowCompleted: 0,
    requestReflow: () => {
      config.debug && console.log('ScrollRig', 'reflow() requested')
      set((state) => {
        requestIdleCallback(state.triggerReflowCompleted, { timeout: 100 })
        return { pageReflowRequested: state.pageReflowRequested + 1 }
      })
    },
    triggerReflowCompleted: () => {
      set((state) => ({ pageReflowCompleted: state.pageReflowCompleted + 1 }))
    },

    // keep track of scroll position
    scrollY: 0,
    setScrollY: (scrollY) => set(() => ({ scrollY })),
    scrollX: 0,
    // TODO: setScrollX to support horizontal scroll

    scrollLerp: 0.14,
  }))
)

export { useCanvasStore }

export default useCanvasStore
