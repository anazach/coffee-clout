import CartItems from './CartItems'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setOrderdetails, updateAmount } from '../store/actions/MenuActions'
import { useHistory } from 'react-router-dom'
// import checkIfDiscount from './functions/discountFunctions'

function Cart({ show, update }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const menu = useSelector((state) => state.menu)
  const user = useSelector((state) => state.user)
  const offers = useSelector((state) => state.offers)

  const [showCart, setShowCart] = useState('cart-dropdown cart-hide')
  const [check, setCheck] = useState(false)
  const [total, setTotal] = useState({})
  const [rerender, setRerender] = useState(false)

  let order = menu.filter((item) => item.amount > 0)
  let finalOrder = {
    itemId: [],
    userId: ''
  }

  order.map((item) => {
    for (let i = 0; i < item.amount; i++) {
      finalOrder = {
        itemId: [...finalOrder.itemId, item.id],
        userId: user.userid
      }
    }
    return finalOrder
  })

  function updateCart(type, title) {
    menu.map((item) => {
      return incrementDecement(type, title, item)
    })

    function incrementDecement(type, title, item) {
      if (item.title === title) {
        if (type === 'INCREMENT') {
          item.amount += 1
          dispatch(updateAmount(menu))
        } else {
          item.amount -= 1
          dispatch(updateAmount(menu))
        }
      }
    }

    setRerender(!rerender)
  }

  function handleClick() {
    setCheck(!check)
    setShowCart('cart-dropdown cart-hide')
    update(false)
  }
  async function sendOrder() {
    const response = await fetch('http://localhost:9999/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(finalOrder)
    })
    const data = await response.json()

    dispatch(setOrderdetails(data))
    history.push('/Status')
  }

  useEffect(() => {
    setTotal(menu)
  }, [rerender, offers, menu])

  useEffect(() => {
    if (show === 'true') {
      setTotal(menu)
      setCheck(show)
      setShowCart('cart-dropdown cart-show')
    }
  }, [show, offers, menu])

  return (
    <section className='cart-page'>
      <div className={showCart}>
        <div className='close top' onClick={handleClick}></div>
        <div className='close left' onClick={handleClick}></div>
        <div className='cart-inner'>
          {/* <article className='order-text'> */}
            <h1>Your order</h1>
            <ul>
              <h6>
                {order.map((item, index) => {
                  return (
                    <CartItems
                      key={index}
                      title={item.title}
                      price={item.price}
                      amount={item.amount}
                      update={updateCart}
                    />
                  )
                })}
              </h6>
            </ul>
          {/* </article> */}
          <footer>
            <div className='total'>
              <h2>Total</h2>
              {/* {total.discount ? (
                <Fragment>
                  <h2 className='red'>{total.totalDiscount} Kr</h2>{' '}
                  <h2 className='line-big'>{total.total} Kr</h2>
                </Fragment>
              ) : ( */}
              <h2>{total.total} SEK</h2>
            </div>
            <div className='moms'>
              <p>includes VAT + drone delivery</p>
            </div>
            <div className='btn-wrapper'>
              <button onClick={sendOrder} className='order-btn'>
                Place order
              </button>
            </div>
          </footer>
        </div>
        <div className='close right' onClick={handleClick}></div>
        <div className='close bottom' onClick={handleClick}></div>
      </div>
    </section>
  )
}

export default Cart
