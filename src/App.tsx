import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
