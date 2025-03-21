import React from 'react'
import { TodoProvider } from './context/TodoContext'
import { AuthProvider } from './context/AuthContext'
import TodoList from './components/TodoList'
import Auth from './components/Auth'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <TodoProvider>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <Auth />
          <TodoList />
        </div>
      </TodoProvider>
    </AuthProvider>
  )
}

export default App
