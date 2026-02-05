import MainContent from '../components/navigation/MainContent';
import Sidebar from '../components/navigation/Sidebar';

const MainLayout = () => {
  return (
    <div className="flex flex-row w-screen h-screen p-0">
      <div className="w-64 h-full bg-ui-sidebar border-r border-fill-vibrant-secondary">
        <Sidebar />
      </div>
      <div className="flex-1 h-full bg-white overflow-y-auto">
        <MainContent />
      </div>
    </div>
  );
};

export default MainLayout;
