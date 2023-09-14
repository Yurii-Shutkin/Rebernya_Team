import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Common/Button/Button'

import './SignUp.scss'

export default function SignUp ({supabase}) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    lokal_num: '',
    date_of_birth:'',
    city: '',
  })

  const navigate = useNavigate();
  // const [firstName, setFirsName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [lokalNum, setLokalNum] = useState('')
  // const [dateOdBirth, setDateOfBirth] = useState('')
  // const [city, setCity] = useState('')

  // async function addNewUser() {
  //   const { data, error } = await supabase.auth.signUp({
      
  //   })
  // }
    
  const onClickHandler = () => {
    console.log(formData)
    navigate('/confirm')
  }


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              first_name: formData.first_name,
              last_name: formData.last_name,
              lokal_num: formData.lokal_num,
              date_of_birth: formData.date_of_birth,
              city: formData.city,
            }
          }
        }
      )
      console.log('Check your verif link')

    } catch (error){
      console.log(error)
    } 
  }

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prevFormData)=> {
      return {
        ...prevFormData,
        [e.target.name]:e.target.value
      }
    })
  }

  // const handleFirstNameChange = (e) => {
  //   setFirsName(e.target.value)
  // }

  // const handleLastNameChange = (e) => {
  //   setLastName(e.target.value)
  // }

  // const handleLokalNumChange = (e) => {
  //   setLokalNum(e.target.value)
  // }

  // const handleDateOfBirthChange = (e) => {
  //   setDateOfBirth(e.target.value)
  // }

  // const handleCityChange = (e) => {
  //   setCity(e.target.value)
  // }

  return (
    <form className='signUp' onSubmit={handleSubmit}>
      <input 
        type={'email'} 
        name={'email'} 
        id={'email'} 
        placeholder={'E-mail'} 
        onChange={handleChange}
        className='signUp__input'
      />
      <input 
        type={'password'} 
        name={'password'} 
        id={'password'} 
        placeholder={'Пароль'} 
        onChange={handleChange}
        className='signUp__input'
      />
      <input 
        type={'text'} 
        name={'first_name'} 
        id={'first_name'} 
        placeholder={'Ім’я'} 
        onChange={handleChange}
        className='signUp__input'
      />
      <input 
        type={'text'} 
        name={'last_name'} 
        id={'last_name'} 
        placeholder={'Призвіще'} 
        onChange={handleChange}
        className='signUp__input'
      />
      <input 
        type={'text'} 
        name={'lokal_num'} 
        id={'lokal_num'} 
        placeholder={'Номер картки Local'} 
        onChange={handleChange}
        className='signUp__input'
      />
      <input 
        type={'date'} 
        name={'date_of_birth'} 
        id={'date_of_birth'} 
        placeholder={'Дата народження'} 
        onChange={handleChange}
        className='signUp__input'
      />
      <input 
        type={'text'} 
        name={'city'} 
        id={'city'} 
        placeholder={'Місто проживання'} 
        onChange={handleChange}
        className='signUp__input'
      />
      {/* <InputAuth 
        type={'text'}
        name={'first_name'}
        id={'firstName'}
        placeholder={'Ім’я'}
        clickState={isClicked}
      />
      <InputAuth
        type={'text'}
        name={'last_name'}
        id={'lastName'}
        placeholder={'Призвіще'}
        clickState={isClicked}
      />
      <InputAuth 
        type={'tel'}
        name={'local_num'}
        id={'local_num'}
        placeholder={'Номер картки Local'}
        clickState={isClicked}
      />
      <InputAuth 
        type={'date'}
        name={'date_of_birth'}
        id={'dateOfBirth'}
        placeholder={'Дата народження'}
        clickState={isClicked}
      />
      <InputAuth 
        type={'text'}
        name={'city'}
        id={'city'}
        placeholder={'Місто проживання'}
        clickState={isClicked}
      /> */}
      <Button 
        type={'submit'}
        color={'red'}
        title={'Продовжити'}
        onClickHandler={onClickHandler}
        src={'/home'}
      />
    </form>
  )
}
