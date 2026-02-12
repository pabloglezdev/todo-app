import TaskItem from '../../tasks/TaskItem';

const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full">
      <TaskItem />
      <TaskItem priority={3} />
      <TaskItem priority={2} isChecked />
      <TaskItem priority={1} />
    </div>
  );
};

export default MainContent;
