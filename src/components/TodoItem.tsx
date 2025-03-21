import React, { useState } from 'react'
import { Check, Trash2, Edit3 } from 'lucide-react'
import { Todo } from '../types/todo'
import { useTodos } from '../context/TodoContext'

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { removeTodo, toggleTodo, updateTodo } = useTodos()
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(todo.title)

  const handleSaveEdit = () => {
    if (editedTitle.trim()) {
      updateTodo(todo.id, { title: editedTitle.trim() })
      setIsEditing(false)
    }
  }

  const getPriorityColor = () => {
    switch (todo.priority) {
      case 'high': return 'border-red-500'
      case 'medium': return 'border-yellow-500'
      case 'low': return 'border-green-500'
      default: return 'border-gray-300'
    }
  }

  return (
    <div className={`
      flex items-center p-4 bg-white rounded-lg shadow-sm 
      border-l-4 ${getPriorityColor()} 
      transition-all duration-300 hover:shadow-md
    `}>
      <button 
        onClick={() => toggleTodo(todo.id)}
        className={`
          w-6 h-6 mr-4 rounded-full border-2 
          ${todo.completed 
            ? 'bg-green-500 border-green-500' 
            : 'border-gray-300 hover:border-green-500'}
          flex items-center justify-center
        `}
      >
        {todo.completed && <Check className="text-white w-4 h-4" />}
      </button>

      {isEditing ? (
        <input 
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onBlur={handleSaveEdit}
          onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit()}
          className="flex-grow px-2 py-1 border rounded"
          autoFocus
        />
      ) : (
        <span 
          className={`
            flex-grow 
            ${todo.completed ? 'line-through text-gray-500' : ''}
          `}
        >
          {todo.title}
        </span>
      )}

      <div className="flex space-x-2">
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="text-blue-500 hover:text-blue-700"
        >
          <Edit3 className="w-5 h-5" />
        </button>
        <button 
          onClick={() => removeTodo(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default TodoItem
