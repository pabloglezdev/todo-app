interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
  createdAt: Date;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
}

export type { Task };
