import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormUsers = ({createUser, userEdit, updateUser, isShow, handleChangeModal}) => {

    const defaultValues = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
    }

   const {handleSubmit, register, reset} = useForm()

   const submitForm = (data) => {
    if (userEdit) {
        updateUser(userEdit.id, data)
    }else{
    createUser(data)
    }
    reset(defaultValues)
    }

    useEffect(() => {
        if(userEdit){
             return reset(userEdit)
        }
    }, [userEdit])
    

  return (
    <>
    <div className={`containerForm ${isShow && 'disable_form'}`}>

        <form className='form' onSubmit={handleSubmit(submitForm)}>

        <i onClick={handleChangeModal} className='Form_x bx bx-x'></i>

        <h3 className='form_title'>{userEdit ? 'Editar usuario' : 'Nuevo Usuario'}</h3>

        <div className='form_input'>
            <i className='bx bx-envelope' ></i>
            <input type="email" placeholder='Email' {...register('email')}/>
            <span className='bar'></span>
        </div>
        <div className='form_input'>
            <i className='bx bx-lock-alt'></i>
            <input type="password" placeholder='Password' {...register('password')} />
            <span className='bar'></span>
        </div>
        <div className='form_input'>
            <i className='bx bx-user'></i>
            <input type="text" placeholder='Name' {...register('first_name')} />
            <span className='bar'></span>
        </div>
        <div className='form_input'>
            <i className='bx bx-user'></i>
            <input type="text" placeholder='Last Name' {...register('last_name')} />
            <span className='bar'></span>
        </div>
        <div className='form_input'>
            <i className='bx bx-calendar'></i>
            <input type="date" placeholder='Birthday' {...register('birthday')} />
            <span className='bar'></span>
        </div>
        <button className='form_button'>{userEdit ? 'Editar usuario' : 'Agregar'}</button>
    </form>

    </div>
    </>
  )
}

export default FormUsers