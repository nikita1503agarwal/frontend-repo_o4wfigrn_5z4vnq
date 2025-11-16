function Badge({ children, color = 'slate' }) {
  const colors = {
    slate: 'bg-slate-100 text-slate-700',
    green: 'bg-emerald-100 text-emerald-700',
    yellow: 'bg-amber-100 text-amber-700',
    red: 'bg-rose-100 text-rose-700',
  }
  return <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colors[color]}`}>{children}</span>
}

function TodoList({ items, onToggle, onDelete }) {
  const priorityColor = (p) => {
    if (p === 'high') return 'red'
    if (p === 'medium') return 'yellow'
    if (p === 'low') return 'green'
    return 'slate'
  }

  return (
    <ul className="divide-y divide-slate-100">
      {items.map((t) => (
        <li key={t.id} className="flex flex-col md:flex-row md:items-center gap-3 py-4">
          <div className="flex items-start gap-3 flex-1">
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => onToggle(t)}
              className="mt-1 h-5 w-5 rounded border-slate-300 text-sky-500 focus:ring-sky-400"
            />
            <div>
              <div className={`font-semibold ${t.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>{t.title}</div>
              {t.description && (
                <div className="text-sm text-slate-500">{t.description}</div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {t.priority && <Badge color={priorityColor(t.priority)}>{t.priority}</Badge>}
            <button onClick={() => onDelete(t)} className="text-rose-500 hover:text-rose-600 font-semibold">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
