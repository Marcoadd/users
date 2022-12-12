import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const BASE_URL = 'https://users-crud.academlo.tech/'

function App() {

  const [users, setUsers] = useState()
  const [userEdit, setUserEdit] = useState()
  const [isShow, setIsShow] = useState(true)

  const getAllUsers = () => {
    const URL = `${BASE_URL}users/`
    axios.get(URL)
    .then (res => setUsers(res.data))
    .catch (err => console.log(err))
  }

  const createUser = (data) => {
    const URL = `${BASE_URL}users/`
    axios.post(URL, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
      handleChangeModal()
    })
    
    .catch(err => console.log(err))
  }

  const deleteUser = (id) => {
    const URL = `${BASE_URL}users/${id}/`
      axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUser = (id, data) => {
    const URL = `${BASE_URL}users/${id}/`
    axios.patch(URL, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
      setUserEdit()
      handleChangeModal()
    })
    .catch(err => console.log(err))
  }

  const handleChangeModal = () => { 
    setIsShow(!isShow)
  } 

  useEffect(() => {
    getAllUsers()
  }, [])
  
  return (
    <div className="App">
      <div className='header_container'>
        <h2 className='titlePrincipal'>USUARIOS</h2>
        <button onClick={handleChangeModal} className='header_button'><i className='bx bx-plus'></i>Crear Nuevo Usuario</button>
      </div>
     
      <FormUsers createUser ={createUser} userEdit = {userEdit} updateUser={updateUser} isShow={isShow} handleChangeModal={handleChangeModal}/>
     <div className='usersContainer'>
     {
        users?.map(user => ( 
        <UserCard key={user.id} deleteUser ={deleteUser} setUserEdit={setUserEdit} user = {user} handleChangeModal={handleChangeModal}/> 
        ))
      }
     </div>
    </div>
  )
}

export default App
