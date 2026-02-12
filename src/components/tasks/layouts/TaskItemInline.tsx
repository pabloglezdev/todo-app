import type { TaskItemLayoutProps } from '../../../types/task';
import Checkbox from '../../ui/Checkbox';

const TaskItemInline: React.FC<TaskItemLayoutProps> = (props) => {
  const { priority = 4, isChecked = false, onClickFn } = props;

  const styles = {
    taskItemContainer:
      'relative flex group items-center gap-4 m-4 p-4 border-b w-[80%]',
    taskItemContent:
      'flex flex-col flex-1 gap-1 text-left pl-8 text-[13px] leading-4',
    checkboxContainer: 'absolute top-4',
    description: 'opacity-50',
  };

  return (
    <button
      type="button"
      className={`${styles.taskItemContainer}`}
      onClick={onClickFn}
    >
      <div className={`${styles.checkboxContainer}`}>
        <Checkbox priority={priority} isChecked={isChecked} />
      </div>
      <div className={`${styles.taskItemContent}`}>
        <div>TaskItem</div>
        <div className={`${styles.description}`}>Description</div>
      </div>
    </button>
  );
};

export default TaskItemInline;
