import BookDetails from "../../components/BookDetails/BookDetails";
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import { useTheme } from './../../components/Theme';


const AboutBook = () => {
  const { darkMode } = useTheme();
  return (
        <div className= {darkMode ? 'dark' : 'light'} >
            <NavBar />
            <BookDetails/>
            <Footer/>
        </div>
  )
}

export default AboutBook