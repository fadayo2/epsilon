import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './component/Intro';
import Music from './component/Music';
import Signup from './component/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for Intro, Music, and Signup components */}
          <Route path="/" element={<Intro />} />
          <Route path="/music" element={<Music />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
