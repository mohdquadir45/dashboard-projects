
import Data from './components/orders/Data'
import Main from './components/topBarAdmin/Main'
import Navbar from './components/sidebar/Navbar'
import "@/assets/css/style.css";
import Footer from './components/footer/Footer';
import BackToTop from './components/footer/BackToTop';

function App() {
 return (
    <>
    <Navbar/>
       <Main/>
     <Data />
     <Footer />
     <BackToTop/>


       {/* <div class="container">
  <div class="menu">
    <!-- Menu items go here -->
  </div>
  <div class="content">
    <!-- Content container -->
  </div>
</div> */}
     
    </>
  )
}

export default App
