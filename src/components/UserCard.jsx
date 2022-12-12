import React from 'react'

const UserCard = ({user, deleteUser, setUserEdit, handleChangeModal}) => {

  const handleChangeEdit = ()=> {
    setUserEdit(user)
    handleChangeModal()
  }

  return (
    <article className='userCard'>
          <h2 className='userTitle'>{`${user.first_name}`} <br /> <br /> {`${user.last_name}`}</h2>
        <div className='lineContain'><div className='line'></div></div>
        <div className='userList'>
          <ul>
            <li className='userItem'><span>Correo</span><br />{user.email}</li>
            <li className='userItem'><span>Cumpleaños</span><br /><i className='bx bx-gift'></i>{user.birthday}</li>
          </ul>
        </div>
        <div className='lineContain'><div className='line'></div></div>
        <div className='userButton'>
        <button onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
        <button onClick={handleChangeEdit} ><i className='bx bx-edit-alt' ></i></button>
        </div>
    </article>
  )
}

export default UserCard