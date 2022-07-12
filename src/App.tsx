import { Route, Routes } from 'react-router-dom';
import { Quiz } from './pages/Quiz';
import { Wines } from './pages/Wines';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/wines" element={<Wines />} />
    </Routes>
  );
}

export default App;
