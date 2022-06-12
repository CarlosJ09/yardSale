import '../stylesheets/Home.css'
import ProductCards from './ProductCards';
import NavBar from './NavBar'

function Home() {
    return(
      <div>
        <NavBar />
        <div className='Home'>
          <div className="cards-container">
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />            
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
          </div>
        </div>
      </div>
    )
}

export default Home;