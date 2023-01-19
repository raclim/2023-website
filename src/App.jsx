import React from 'react';

import { Routes, Route} from "react-router-dom";

import Home from './pages';
import Blog from './pages/blog';
import Projects from './pages/projects';
import Github from './pages/github';
import Resume from './pages/resume';
import ProjectDetails from './pages/ProjectDetails';

import './styles/main.scss';

function App() {
  return (
    <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/github' element={<Github />} />
            <Route path='/projects' element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path='/resume' element={<Resume />} />
    </Routes>
  );
}

export default App;
