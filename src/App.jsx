import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchTodos = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/todos`)
      if (!res.ok) throw new Error('Failed to load')
      const data = await res.json()
      setTodos(data)
    } catch (e) {
      setError('Could not load tasks')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const addTodo = async (payload) => {
    try {
      const res = await fetch(`${API_BASE}/api/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Create failed')
      const data = await res.json()
      setTodos((prev) => [data, ...prev])
    } catch (e) {
      setError('Could not create the task')
    }
  }

  const toggleTodo = async (todo) => {
    try {
      const res = await fetch(`${API_BASE}/api/todos/${todo.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...todo, completed: !todo.completed }),
      })
      if (!res.ok) throw new Error('Update failed')
      const updated = await res.json()
      setTodos((prev) => prev.map((t) => (t.id === updated.id ? updated : t)))
    } catch (e) {
      setError('Could not update the task')
    }
  }

  const deleteTodo = async (todo) => {
    try {
      const res = await fetch(`${API_BASE}/api/todos/${todo.id}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Delete failed')
      setTodos((prev) => prev.filter((t) => t.id !== todo.id))
    } catch (e) {
      setError('Could not delete the task')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-violet-50">
      <Hero />

      <main id="app" className="relative -mt-12 sm:-mt-16 pb-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="rounded-2xl bg-white/70 backdrop-blur p-6 sm:p-8 shadow-sm border border-white/60">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">Your Tasks</h2>
              <a href="/test" className="text-sm text-sky-600 hover:text-sky-700 font-semibold">Status</a>
            </div>

            <div className="mt-6">
              <TodoInput onAdd={addTodo} />
            </div>

            <div className="mt-6">
              {loading ? (
                <p className="text-slate-500">Loading...</p>
              ) : error ? (
                <p className="text-rose-500">{error}</p>
              ) : todos.length === 0 ? (
                <p className="text-slate-500">No tasks yet — add your first one above.</p>
              ) : (
                <TodoList items={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm">
        Built with calm pastels for focus.
      </footer>
    </div>
  )
}

export default App
