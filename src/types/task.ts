import type { PriorityType } from './misc';

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
  createdAt: string;
  priority?: PriorityType;
  projectId: string;
}

interface TaskItemBaseProps {
  priority?: PriorityType;
  isChecked?: boolean;
}

interface TaskItemProps extends TaskItemBaseProps {
  layout?: 'boxed' | 'inline';
}

interface TaskItemLayoutProps extends TaskItemBaseProps {
  onClickFn?: () => void;
}

export type { Task, TaskItemProps, TaskItemLayoutProps };
