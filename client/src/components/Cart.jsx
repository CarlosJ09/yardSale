import '../stylesheets/Cart.css'

function Cart() {
  return(
    <div>
      <aside class="product-detail">
        <div class="title-container">
          <img src="./assets/Icons/flechita.svg" alt="arrow" />
          <p class="title">My order</p>
        </div>

        <div class="my-order-content">
          <div class="shopping-cart">
            <figure>
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src="./assets/Icons/icon_close.png" alt="close" />
          </div>

          <div class="shopping-cart">
            <figure>
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src="./assets/Icons/icon_close.png" alt="close" />
          </div>

          <div class="shopping-cart">
            <figure>
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src="./assets/Icons/icon_close.png" alt="close" />
          </div>

          <div class="order">
            <p>
              <span>Total</span>
            </p>
            <p>$560.00</p>
          </div>

          <button class="primary-button">
            Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}

export default Cart