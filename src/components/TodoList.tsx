import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { useTodos } from '../context/TodoContext'
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {
  const { todos, addTodo } = useTodos()
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium')

  const handleAddTodo = () => {
    if (newTodoTitle.trim()) {
      addTodo({
        title: newTodoTitle.trim(),
        completed: false,
        priority
      })
      setNewTodoTitle('')
    }
  }

  const sortedTodos = [...todos].sort((a, b) => {
    // Sort by completion status, then by priority, then by creation date
    if (a.completed !== b.completed) return a.completed ? 1 : -1
    const priorityOrder = { high: 3, medium: 2, low: 1 }
    return priorityOrder[b.priority] - priorityOrder[a.priority] || b.createdAt - a.createdAt
  })

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          My Todos
        </h1>

        <div className="flex mb-6">
          <input 
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
            placeholder="Add a new todo..."
            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select 
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            className="px-2 py-2 border-y border-r rounded-r-lg bg-gray-100"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button 
            onClick={handleAddTodo}
            className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            <Plus />
          </button>
        </div>

        <div className="space-y-3">
          {sortedTodos.length === 0 ? (
            <p className="text-center text-gray-500">No todos yet. Add one!</p>
          ) : (
            sortedTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default TodoList
