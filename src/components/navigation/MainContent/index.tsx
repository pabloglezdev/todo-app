import TaskItem from '../../tasks/TaskItem';

const MainContent: React.FC = () => {
  return (
    <div>
      <TaskItem />
      <TaskItem priority="low" />
      <TaskItem priority="medium" isChecked />
      <TaskItem priority="high" />
    </div>
  );
};

export default MainContent;
