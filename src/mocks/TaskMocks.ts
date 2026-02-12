import type { Task } from '../types/task';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: '🚀 Replicar la interfaz de Todoist',
    description: 'Terminar el componente TaskItem y los estilos del Sidebar.',
    dueDate: '2026-02-11',
    createdAt: '2026-02-11T10:00:00Z',
    priority: 1,
    projectId: 'proyecto-web',
    completed: false,
  },
  {
    id: '2',
    title: '🍎 Comprar manzanas',
    description: 'Ir al mercado antes de que cierren.',
    dueDate: '2026-02-12',
    createdAt: '2026-02-10T15:30:00Z',
    priority: 3,
    projectId: 'personal',
    completed: true,
  },
  {
    id: '3',
    title: '📖 Leer sobre Tailwind v4',
    description: 'Revisar la documentación de @theme y variables CSS.',
    dueDate: '2026-02-11',
    createdAt: '2026-02-11T09:15:00Z',
    priority: 2,
    projectId: 'estudio',
    completed: false,
  },
  {
    id: '4',
    title: '🧘 Sesión de meditación',
    createdAt: '2026-02-11T08:00:00Z',
    priority: 4,
    projectId: 'bienestar',
    completed: false,
  },
];
