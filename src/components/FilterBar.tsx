import type { FilterType } from '@/types/todo';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onClearCompleted: () => void;
  completedCount: number;
}

const FILTERS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

export default function FilterBar({
  filter,
  onFilterChange,
  onClearCompleted,
  completedCount,
}: FilterBarProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={cn(
              'rounded-md px-3 py-1.5 text-sm font-medium transition-all',
              filter === f.value
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-sm text-slate-500 transition-colors hover:text-red-400"
        >
          Clear completed ({completedCount})
        </button>
      )}
    </div>
  );
}
