import img from '../assets/Icons/bt_add_to_cart.svg'

function ProductCards() {
    return(
        <div className="cards-container">
            <div className="product-card">
              <img src="https://images.pexels.com/photos/264917/pexels-photo-264917.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="product-img" />
              <div className="product-info">
                <div>
                  <p>$15.00</p>
                  <p>Teddy Bear</p>
                </div>
                <figure>
                  <img src={img} alt="" />
                </figure>
              </div>
            </div>
        </div>
    )
}

export default ProductCards;