import { useState } from 'react';
import type { TaskItemProps } from '../../types/task';
import TaskItemBoxed from './layouts/TaskItemBoxed';
import TaskItemInline from './layouts/TaskItemInline';

const TaskItem: React.FC<TaskItemProps> = (props) => {
  const { priority = 4, isChecked = false, layout = 'inline' } = props;

  const [checked, setChecked] = useState<boolean>(isChecked);

  const handleClick = () => {
    setChecked(!checked);
  };

  if (layout === 'boxed') {
    return (
      <TaskItemBoxed
        priority={priority}
        isChecked={checked}
        onClickFn={handleClick}
      />
    );
  }

  return (
    <TaskItemInline
      priority={priority}
      isChecked={checked}
      onClickFn={handleClick}
    />
  );
};

export default TaskItem;
