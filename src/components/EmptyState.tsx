import { ClipboardList } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm">
      <ClipboardList className="mx-auto h-16 w-16 text-slate-600" />
      <h3 className="mt-4 text-lg font-medium text-slate-300">
        No tasks yet
      </h3>
      <p className="mt-2 text-sm text-slate-500">
        Add your first task above to get started!
      </p>
    </div>
  );
}
