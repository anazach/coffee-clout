// import ImgHeader from '../components/ImgHeader'
// import LoginForm from '../components/LoginForm'
// import DropdownBtn from '../components/DropdownBtn'
import { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { setMenu } from '../store/actions/MenuActions'
import Menu from './Menu'
import Nav from '../components/Nav'
// import MobileNav from '../components/MobileNav'

function LandingLocal() {
//   const dispatch = useDispatch()
const [json, setJson] = useState([])

   const getData=()=>{

    fetch('menu.json'

    ,{

      headers : { 

        'Content-Type': 'application/json',

        'Accept': 'application/json'

       }

    }

    )

      .then(function(response){

        console.log('Response: ', response)

        return response.json();

      })

      .then(function(myJson) {

         console.log('My JSON: ', myJson);
          setJson(myJson)

      });

  }

  useEffect(()=>{

    getData()

  },[])
  
  return (
    <div className='grid landing'>
      <Nav />
      <div>
        {json && json.length > 0 && json.map((item) => <p>Hi {item}</p>)}
      </div>
      {/* <MobileNav/> */}
      <Menu />
      {json}
      {/* <ImgHeader /> */}
    </div>
  )
}

export default LandingLocal;
