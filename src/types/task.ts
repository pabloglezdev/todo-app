interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
  createdAt: Date;
  priority?: 'none' | 'low' | 'medium' | 'high';
}

export type { Task };
