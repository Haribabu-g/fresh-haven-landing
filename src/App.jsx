
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menus from './components/Menu/Menus'
import './index.css'
import Banner from './components/Banners/Banner'
import Banner2 from './components/Banners/Banner2'
import Banner3 from './components/Banners/Banner3'
import Footer from './components/Footer/Footer'
function App() {
 

  return (
    <>
    
    <main className='w-full overflow-x-hidden '>
      <Navbar/>
      <Hero/>
      <Menus/>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Footer/>
    </main>
    
      
    </>
  )
}

export default App
