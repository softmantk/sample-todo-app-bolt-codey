export interface Todo {
  id: string
  title: string
  description?: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  createdAt: number
  updatedAt: number
  dueDate?: number
}

export interface TodoContextType {
  todos: Todo[]
  addTodo: (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => void
  removeTodo: (id: string) => void
  toggleTodo: (id: string) => void
  updateTodo: (id: string, updates: Partial<Todo>) => void
}
