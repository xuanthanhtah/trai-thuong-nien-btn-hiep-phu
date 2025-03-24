
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Use null as initial state to indicate "not determined yet"
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    // Function to check if device is mobile based on window width
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Set initial value immediately
    checkIfMobile()
    
    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Return false as fallback while waiting for client-side detection
  // This prevents hydration mismatches
  return isMobile === null ? false : isMobile
}
