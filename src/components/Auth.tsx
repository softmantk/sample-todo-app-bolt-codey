import React from 'react'
import { useAuth } from '../context/AuthContext'
import { LogIn, LogOut } from 'lucide-react'

const Auth: React.FC = () => {
  const { user, signIn, signOutUser } = useAuth()

  return (
    <div className="mb-4">
      {!user ? (
        <button 
          onClick={signIn} 
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          <LogIn className="mr-2" /> Sign in with Google
        </button>
      ) : (
        <div className="flex items-center space-x-4">
          <img 
            src={user.photoURL || ''} 
            alt="Profile" 
            className="w-10 h-10 rounded-full" 
          />
          <span>{user.displayName}</span>
          <button 
            onClick={signOutUser} 
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            <LogOut className="mr-2" /> Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Auth
