import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import MainPage from './Components/MainPage/MainPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Container } from './Components/ContainerMain/style';


export default function App() {

 
  return (
    <Container >
    <GlobalStyle/>
    <Header/>
    <MainPage />
    <Footer/>
    </Container>
  )
}


