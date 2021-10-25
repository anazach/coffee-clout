import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setMenu } from '../store/actions/MenuActions'
import { useEffect, useState } from 'react'
import drone from '../assets/drone.svg'

function OrderStatus() {
  const orderDetails = useSelector((state) => state.orderDetails)
  const menu = useSelector((state) => state.menu)
  const history = useHistory()
  const dispatch = useDispatch()
  const [timeLeft, setTimeLeft] = useState()
  const url = `http://localhost:9999/api/orderId/${orderDetails.orderid}`

  function handleClick() {
    menu.map((item) => {
      return (item.amount = 0)
    })
    dispatch(setMenu(menu))
    history.push('/')
  }

  useEffect(() => {
    async function fetchTimeLeft() {
      const response = await fetch(url)
      const data = await response.json()

      if (data[0]) {
        setTimeLeft(data[0][0].timeLeft)
      }
    }
    fetchTimeLeft()
  }, [url])
   return (
     <section className='landing order'>
       <div className='grid status'>
         <p>
           Ordernumber<b>#{orderDetails.orderid}</b>
         </p>
         <img src={drone} alt='drone' />
         <h1>
           {timeLeft ? 'Your order is on the way!' : 'Your order is ready!'}
         </h1>
         <h3>
  {timeLeft ? timeLeft : 'Enjoy!'}
           {timeLeft ? ' minutes' : ''}
         </h3>
         <button className='status-btn' onClick={handleClick}>
           OK
         </button>
       </div>
     </section>
   )
}

export default OrderStatus
