
import CoffeeItem from '../components/CoffeeItem'
import CartBtn from '../components/CartBtn'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function Menu() {
  const menu = useSelector((state) => state.menu)
  const [rerender, setRerender] = useState(true)
  function update() {
    setRerender(!rerender)
  }

  return (
    <div className='grid menu'>
        <CartBtn />
        <br/>
      <ul className='menu-list'>
        {menu.map((item) => {
          return <CoffeeItem key={item.id} item={item} update={update} />
        })}
      </ul>
    </div>
  )
}

export default Menu
