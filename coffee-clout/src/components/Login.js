// import logo from '../assets/logo.svg'
// import Input from './Input'
// import Btn from './Btn'
// import { useDispatch } from 'react-redux'
// import { setUser } from '../actions/menuAction'
// import { useHistory } from 'react-router-dom'

// function LoginForm() {
//   const dispatch = useDispatch()
//   const history = useHistory()
//   let user = {
//     username: '',
//     email: ''
//   }
//   function updateUsername(username) {
//     user.username = username
//   }
//   function updateEmail(email) {
//     user.email = email
//   }
//   async function getUser() {
//     const response = await fetch('http://localhost:8888/api/account', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     })
//     const data = await response.json()
//     dispatch(setUser(data.user))
//     if (!data.user.Error) {
//       history.push('/menu')
//     } else {
//       alert(data.user.Error)
//     }
//   }
//   return (
//     <div className='login-form  flex'>
//       <img src={logo} alt='logo' />
//       <div className='text'>
//         <h1>Welcome</h1>
//            <h3>
//              Log in
//         </h3>
//       </div>
//       <Input type='text' id='Namn' update={updateUsername} />
//       <Input type='email' id='Email' update={updateEmail} />
//       <Btn text='Log in' selector='btn-dark' update={getUser}></Btn>
//     </div>
//   )
// }

// export default LoginForm
