import { useTodos } from '@/hooks/useTodos';
import Header from '@/components/Header';
import TodoInput from '@/components/TodoInput';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';
import TodoList from '@/components/TodoList';
import StatsBar from '@/components/StatsBar';
import EmptyState from '@/components/EmptyState';

export default function HomePage() {
  const {
    todos,
    allTodos,
    filter,
    searchQuery,
    stats,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    setFilter,
    setSearchQuery,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
        <Header />
        <div className="mt-8 space-y-4">
          <TodoInput onAdd={addTodo} />
          {allTodos.length > 0 && (
            <>
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              <StatsBar stats={stats} />
              <FilterBar
                filter={filter}
                onFilterChange={setFilter}
                onClearCompleted={clearCompleted}
                completedCount={stats.completed}
              />
            </>
          )}
          {todos.length > 0 ? (
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ) : allTodos.length > 0 ? (
            <div className="rounded-xl bg-white/5 p-8 text-center backdrop-blur-sm">
              <p className="text-slate-400">No tasks match your filters.</p>
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
}
