import { useState } from 'react';
import { Plus, Tag } from 'lucide-react';

interface TodoInputProps {
  onAdd: (text: string, category: string) => void;
}

const CATEGORIES = ['General', 'Work', 'Personal', 'Shopping', 'Health', 'Learning'];

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('General');
  const [showCategories, setShowCategories] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text, category);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What needs to be done?"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-slate-500 backdrop-blur-sm transition-all focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
          />
        </div>
        <button
          type="button"
          onClick={() => setShowCategories(!showCategories)}
          className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-3.5 text-sm text-slate-300 backdrop-blur-sm transition-all hover:bg-white/10"
        >
          <Tag className="h-4 w-4" />
          <span className="hidden sm:inline">{category}</span>
        </button>
        <button
          type="submit"
          className="flex items-center gap-1.5 rounded-xl bg-purple-600 px-5 py-3.5 font-medium text-white transition-all hover:bg-purple-500 active:scale-95"
        >
          <Plus className="h-5 w-5" />
          <span className="hidden sm:inline">Add</span>
        </button>
      </div>
      {showCategories && (
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setCategory(cat);
                setShowCategories(false);
              }}
              className={`rounded-lg px-3 py-1.5 text-sm transition-all ${
                category === cat
                  ? 'bg-purple-600 text-white'
                  : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </form>
  );
}
