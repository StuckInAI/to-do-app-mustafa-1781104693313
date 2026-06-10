interface StatsBarProps {
  stats: {
    total: number;
    active: number;
    completed: number;
  };
}

export default function StatsBar({ stats }: StatsBarProps) {
  const progressPercent = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <div className="mb-2 flex items-center justify-between text-sm">
        <div className="flex gap-4">
          <span className="text-slate-400">
            Total: <span className="font-medium text-white">{stats.total}</span>
          </span>
          <span className="text-slate-400">
            Active: <span className="font-medium text-blue-400">{stats.active}</span>
          </span>
          <span className="text-slate-400">
            Done: <span className="font-medium text-green-400">{stats.completed}</span>
          </span>
        </div>
        <span className="font-medium text-purple-400">{progressPercent}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
