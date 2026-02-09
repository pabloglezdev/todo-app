import { useState } from 'react';
import type { PriorityType } from '../../../types/misc';
import Checkbox from '../../ui/Checkbox';

interface TaskItemProps {
  priority?: PriorityType;
  isChecked?: boolean;
}

const styles = {
  taskItemContainer:
    'flex group items-center gap-4 m-4 p-4 border rounded-[8px] w-[264px]',
};

const TaskItem: React.FC<TaskItemProps> = (props) => {
  const { priority = 'none', isChecked = false } = props;

  const [checked, setChecked] = useState<boolean>(isChecked);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <button
      type="button"
      className={`${styles.taskItemContainer}`}
      onClick={handleClick}
    >
      <Checkbox priority={priority} isChecked={checked} />
      {checked}
      TaskItem
    </button>
  );
};

export default TaskItem;
