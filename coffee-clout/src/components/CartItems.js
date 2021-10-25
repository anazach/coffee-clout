import arrowSmall from '../assets/arrow-small.svg'

function CartItems({ title, price, amount, update }) {
  return (
    <section className='cart-content'>
      <li>
        <h2>{title}</h2>
        <div className='amount'>
          <img
            src={arrowSmall}
            alt='arrow'
            onClick={() => {
              update('INCREMENT', title)
            }}
          />
          <p>{amount}</p>
          <img
            src={arrowSmall}
            alt='arrow'
            className='arrow-down'
            onClick={() => {
              update('DECREMENT', title)
            }}
          />
        </div>

        <button
          value='down'
          className='arrow-down'
          onClick={() => {
            update('DECREMENT', title)
          }}
        />
        <button
          value='up'
          className='arrow-down'
          onClick={() => {
            update('INCREMENT', title)
          }}
        />

        <p>{price} Kr</p>
      </li>
    </section>
  )
}

export default CartItems
