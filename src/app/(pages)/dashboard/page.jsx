import Admin from './Admin';
import UserList from './UserList';

const Dashboard = () => {
  return (
    <div className="min-h-screen container">

      <Admin />
      <div>
        
      </div>
      <div>
        <UserList />
      </div>
    </div>
  );
};

export default Dashboard;
