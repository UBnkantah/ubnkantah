import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePg from './pages/HomePg';
import BlogPg from './pages/BlogPg';
import ProjectsPg from './pages/ProjectsPg';
import ContactPg from './pages/ContactPg';
// import 

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePg />} />
      <Route path='/blog' element={<BlogPg />} />
      <Route path='/projects' element={<ProjectsPg />} />
      <Route path='/contact' element={<ContactPg />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
