import toolbarMid from '../assets/toolbar/toolbar_mid-0000.png'; // Path to the middle toolbar image
import NewClock from './NewClock';
import './TaskbarCenter.css';

const TaskbarCenter = () => {
  return (
      <div className="taskbarcenter">
          <img className="toolbar-img" src={toolbarMid} alt="Mid Toolbar" draggable="false"/>
          <NewClock className = 'newclock'></NewClock>
      </div>
  );
};

export default TaskbarCenter;
