// import ImgHeader from '../components/ImgHeader'
// import DropdownBtn from '../components/DropdownBtn'
import CoffeeItem from './CoffeeItem'
// import ImgFooter from '../components/ImgFooter'
import CartBtn from './CartBtn'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function Menu() {
  const menu = useSelector((state) => state.menu)
  const [rerender, setRerender] = useState(true)
  function update() {
    setRerender(!rerender)
  }

  return (
    <div className='menu-grid bg-pink menu'>
      {/* <DropdownBtn /> */}
      <CartBtn />
      {/* <ImgHeader /> */}
      <h1 className='big-h1 brown'>Menu</h1>
      <ul className='menu-list'>
        {menu.map((item) => {
          return <CoffeeItem key={item.id} item={item} update={update} />
        })}
      </ul>
      {/* <ImgFooter /> */}
    </div>
  )
}

export default Menu
