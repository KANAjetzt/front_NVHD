import { useState, useEffect } from 'react'

export function useDelayUnmount(isMounted, delayTime) {
  console.log('year Im here but im not realy into working right now')
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isMounted && !shouldRender) {
      setShouldRender(true)
    } else if (!isMounted && shouldRender) {
      setTimeout(() => setShouldRender(false), delayTime)
    }
  })
  return shouldRender
}
