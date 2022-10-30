import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import MainPage from './Components/MainPage/MainPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Container } from './Components/ContainerMain/style';
import HeaderPage from './Components/Header/Header';

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


