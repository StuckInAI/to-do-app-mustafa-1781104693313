import { useState } from 'react';
import { Check, Trash2, Pencil, X, Save } from 'lucide-react';
import type { Todo } from '@/types/todo';
import { cn, formatDate } from '@/lib/utils';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') handleCancel();
  };

  const categoryColors: Record<string, string> = {
    General: 'bg-slate-500/20 text-slate-300',
    Work: 'bg-blue-500/20 text-blue-300',
    Personal: 'bg-purple-500/20 text-purple-300',
    Shopping: 'bg-amber-500/20 text-amber-300',
    Health: 'bg-green-500/20 text-green-300',
    Learning: 'bg-cyan-500/20 text-cyan-300',
  };

  return (
    <div
      className={cn(
        'group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/8',
        todo.completed && 'opacity-60'
      )}
    >
      <button
        onClick={() => onToggle(todo.id)}
        className={cn(
          'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all',
          todo.completed
            ? 'border-green-500 bg-green-500'
            : 'border-slate-500 hover:border-purple-400'
        )}
      >
        {todo.completed && <Check className="h-3.5 w-3.5 text-white" />}
      </button>

      <div className="min-w-0 flex-1">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="w-full rounded-lg border border-purple-500 bg-white/10 px-3 py-1.5 text-white outline-none"
          />
        ) : (
          <p
            className={cn(
              'text-white transition-all',
              todo.completed && 'text-slate-400 line-through'
            )}
          >
            {todo.text}
          </p>
        )}
        <div className="mt-1.5 flex items-center gap-2">
          <span
            className={cn(
              'rounded-md px-2 py-0.5 text-xs font-medium',
              categoryColors[todo.category] || categoryColors['General']
            )}
          >
            {todo.category}
          </span>
          <span className="text-xs text-slate-500">{formatDate(todo.createdAt)}</span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="rounded-lg p-1.5 text-green-400 transition-colors hover:bg-green-500/20"
            >
              <Save className="h-4 w-4" />
            </button>
            <button
              onClick={handleCancel}
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Pencil className="h-4 w-4" />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-red-500/20 hover:text-red-400"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
