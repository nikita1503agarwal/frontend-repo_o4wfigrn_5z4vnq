import { useState } from 'react'

function TodoInput({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd({ title: title.trim(), description: description.trim() || undefined, priority: priority || undefined, completed: false })
    setTitle('')
    setDescription('')
    setPriority('')
  }

  return (
    <form onSubmit={submit} className="w-full grid grid-cols-1 md:grid-cols-[1fr,1fr,160px,120px] gap-3">
      <input
        className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
        placeholder="Optional details"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="">Priority (none)</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="rounded-xl bg-sky-500 text-white font-semibold px-4 py-3 hover:bg-sky-600 transition-colors">
        Add task
      </button>
    </form>
  )
}

export default TodoInput
