import { useState } from 'react'

export function useHover() {
   const [isHovering, setIsHovering] = useState(false)

   const hoverHandlers = {
      onMouseEnter: () => setIsHovering(true),
      onMouseLeave: () => setIsHovering(false),
   }

   return { isHovering, hoverHandlers }
}
