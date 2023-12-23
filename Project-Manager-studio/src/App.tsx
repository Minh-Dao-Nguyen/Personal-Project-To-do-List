import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from '@/Components/NavBar';
import Home from '@/Pages/Home';
import About from '@/Pages/About';
import Report from '@/Pages/Report';

import Projects from '@/Pages/Home/Projects';
import Planning from '@/Pages/Home/Planning';
import Tasks from '@/Pages/Home/Tasks';
import Analytic from '@/Pages/Home/Analytic';


function App() {
  return (
    <div className={`app pt-20`}> 
     <Router>   
     <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Planning/>} />
          <Route path="Project" element={<Projects/>} />
          <Route path="Task" element={<Tasks/>} />
          <Route path="Analytic" element={<Analytic/>} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/report" element={<Report />} />
      </Routes>

     </Router>
     
    </div>
  )
}

export default App
