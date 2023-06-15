import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Experience from './Experience';
import AddExperience from './AddExperience';
import Navbar from './Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience/:id" element={<Experience />} />
                <Route path="/add-experience" element={<AddExperience />} />
            </Routes>
        </Router>
    );
}

export default App;
