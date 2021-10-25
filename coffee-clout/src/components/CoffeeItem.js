
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { updateAmount } from '../store/actions/MenuActions'

function CoffeeItem({ item, update }) {
  const menu = useSelector((state) => state.menu)

  const dispatch = useDispatch()

  function handleClick() {
    menu[item.id - 1].amount += 1
    dispatch(updateAmount(menu))
    update()
  }

  return (
    <li>
      <button className='menu-btn' onClick={() => handleClick()}>
        +
      </button>
      <div>
        <section>
          <h2>{item.title}</h2>
          <h3>{item.price} Kr</h3>
        </section>
        <p className='p-menu'>{item.desc}</p>
      </div>
    </li>
  )
}

export default CoffeeItem;