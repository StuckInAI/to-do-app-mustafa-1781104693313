export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  category: string;
}

export type FilterType = 'all' | 'active' | 'completed';
