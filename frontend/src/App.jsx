import { Route, Routes } from 'react-router-dom';
import Dashboard from './features/dashboard/Dashboard';
import Students from './features/students/Students';
import Teachers from './features/teachers/Teachers';
import Classes from './features/classes/Classes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/student" element={<Students />} />
        <Route path="/teacher" element={<Teachers />} />
        <Route path="/class" element={<Classes />} />
      </Routes>
    </div>
  );
}

export default App;
