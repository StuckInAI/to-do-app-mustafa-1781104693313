import { CheckCircle } from 'lucide-react';

export default function Header() {
  return (
    <div className="text-center">
      <div className="mb-3 flex items-center justify-center gap-3">
        <CheckCircle className="h-10 w-10 text-purple-400" />
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Todo App
        </h1>
      </div>
      <p className="text-lg text-slate-400">
        Organize your tasks, boost your productivity
      </p>
    </div>
  );
}
