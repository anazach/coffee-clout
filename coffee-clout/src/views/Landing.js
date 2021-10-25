// import ImgHeader from '../components/ImgHeader'
// import LoginForm from '../components/LoginForm'
// import DropdownBtn from '../components/DropdownBtn'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setMenu } from '../store/actions/MenuActions'
import Menu from './Menu'
import Nav from '../components/Nav'
// import MobileNav from '../components/MobileNav'


function Landing() {
  const dispatch = useDispatch()

  async function getMenu() {
    const response = await fetch('http://localhost:8888/api/coffee')
    const data = await response.json()
    const menu = await data.menu.map((item) => {
      item.amount = 0
      return item
    })
    dispatch(setMenu(menu))
    console.log('hey')
  }
  useEffect(() => {
    getMenu()
  })
  return (
    <div className='grid landing'>
      <Nav/>
      {/* <MobileNav/> */}
      <Menu />
      {/* <ImgHeader /> */}
    </div>
  )
}

export default Landing
