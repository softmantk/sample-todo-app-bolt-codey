import React, { useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import { AuthProvider } from './context/AuthContext'
import TodoList from './components/TodoList'
import Auth from './components/Auth'
import SplashScreen from './components/SplashScreen'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  const handleSplashComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading ? (
        <SplashScreen 
          duration={2000} 
          onComplete={handleSplashComplete} 
        />
      ) : (
        <AuthProvider>
          <TodoProvider>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
              <Auth />
              <TodoList />
            </div>
          </TodoProvider>
        </AuthProvider>
      )}
    </>
  )
}

export default App
