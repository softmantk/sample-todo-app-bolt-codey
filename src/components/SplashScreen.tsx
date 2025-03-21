import React, { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'

interface SplashScreenProps {
  duration?: number
  onComplete: () => void
}

const SplashScreen: React.FC<SplashScreenProps> = ({ 
  duration = 2000, 
  onComplete 
}) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="animate-pulse">
        <img 
          src="/mytodo-icon.svg" 
          alt="MyTODO Logo" 
          className="w-32 h-32 mb-6"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">MyTODO</h1>
      <div className="flex items-center">
        <Loader2 className="mr-2 animate-spin" />
        <span>Loading...</span>
      </div>
    </div>
  )
}

export default SplashScreen
