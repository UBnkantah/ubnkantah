import {useTheme} from 'next-themes'
import {FaSun, FaMoon} from 'react-icons/fa'
const Navbar = () => {
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
    <div>
      <p>Current Theme: {theme}</p>
      <div>
        <button onClick={() => setTheme(theme === 'light'? 'dark' : 'light')}>
          {themeBox()}
        </button>
      </div>
    </div>
  )
}

export default Navbar