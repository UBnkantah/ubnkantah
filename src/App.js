import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePg from './pages/HomePg';
import BlogPg from './pages/BlogPg';
import ProjectsPg from './pages/ProjectsPg';
import ContactPg from './pages/ContactPg';
import {useTheme} from 'next-themes'
import {FaSun, FaMoon} from 'react-icons/fa'
// import 

function App() {
  const {resolvedTheme, systemTheme, setTheme, theme} = useTheme()

  const themeBox = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme

    if(currentTheme === 'dark'){
      return(
        <FaSun />
      )
      
    }else{
      return(
        <FaMoon />
      )
      
    }

  } 
  return (
    <BrowserRouter>
    <div style={{position: "fixed", bottom: "25%", right: "5%"}}>
    <button onClick={() => setTheme(theme === 'light'? 'dark' : 'light')}>
          {themeBox()}
        </button>
    </div>
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
