import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../supabase/signUp'
import Button from '../../Common/Button/Button'

import './SignUp.scss'

export default function SignUp ({supabase}) {
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    lokal_num: '',
    duty: '',
    date_of_birth:'',
    city: '',
  })

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      duty: selectedOption,
    }));
  }, [selectedOption]);

  const navigate = useNavigate();
  
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      signUp(formData, navigate, '/confirm')
    } catch (error) {
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

  return (
    <form className='signUp' onSubmit={handleSubmit} id='user_form'>
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
      <select
        form={'user_form'}
        name={'duty'} 
        id={'duty'} 
        placeholder={'Посада'} 
        onChange={handleSelectChange}
        value={selectedOption}
        className='signUp__input'
      >
        <option value="" disabled selected>Оберіть вашу посаду</option>
        <option value="Офіціант">Офіціант</option>
        <option value="Менеджер">Менеджер</option>
        <option value="Асістент">Асістент</option>
        <option value="Наставник">Наставник</option>
        <option value="Кухар">Кухар</option>
        <option value="Шеф">Шеф</option>
        <option value="Су-шеф">Су-шеф</option>
      </select>
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
      <Button 
        type={'submit'}
        color={'red'}
        title={'Продовжити'}
        src={'/home'}
      />
    </form>
  )
}
