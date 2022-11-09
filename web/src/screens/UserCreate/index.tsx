import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { api } from "../../service/api";
import { FloppyDisk } from 'phosphor-react'

export function UserCreate() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    type: '',
    phone: '',
    interest_area: '',
    admin: false
  })

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }
  
  async function handleCreateCollege(event:FormEvent) {
    event.preventDefault();

    const { email, name, type, phone, interest_area } = formData;
    let admin = false;

    if(type === 'Admin') {
      admin = true
    }

    const data = {
      email,
      name,
      type, 
      phone,
      interest_area,
      admin
    }

    await api.post("users",  data)

    alert('Novo Usuário criado!');

    navigate('/home'); 
  }

  return (

    <div>
      <h2 className="text-2xl font-sans font-bold ml-[265px] mt-6 mb-8">
        Criar novo usuário
      </h2>
      <div className="flex flex-col justify-center items-center">
        <form className="flex flex-col" onSubmit={handleCreateCollege}>
          <label className="font-semibold font-sans" htmlFor="name"> Nome: </label>
          <input 
            className="w-[900px] h-10 rounded my-4"
            id="name" 
            name="name" 
            type="text" 
            onChange={handleInputChange}/>

          <label className="font-semibold font-sans" htmlFor="email">Email: </label>
          <input 
            className="w-[900px] h-10 rounded my-4"
            id="email" 
            name="email" 
            type="email"
            onChange={handleInputChange} />

          <label className="font-semibold font-sans" htmlFor="phone">Telefone: </label>
          <input 
            className="w-[900px] h-10 rounded my-4"
            id="phone" 
            name="phone" 
            type="text"
            onChange={handleInputChange} />

          <div className="flex justify-between my-4">

            <p className="font-semibold font-sans">Tipo de usuário: </p>

            <div className="flex justify-center">
              <label htmlFor="type">Estudante</label>
              <input
              className="ml-8"
              type="radio"
              id="type"
              name="type"
              value="Student"
              onChange={handleInputChange} />
            </div>
            
            <div className="flex justify-center">
              <label htmlFor="type">Psicólogo</label>
              <input 
              className="ml-8"
              type="radio"
              id="type"
              name="type"
              value="Psychologist"
              onChange={handleInputChange} /> 
            </div>

            <div className="flex justify-center">
              <label htmlFor="type">Pedagogo</label>
              <input 
              className="ml-8"
              type="radio"
              id="type"
              name="type"
              value="Pedagogue"
              onChange={handleInputChange} /> 
            </div>

            <div className="flex justify-center">
              <label htmlFor="type">Admin</label>
              <input 
              className="ml-8 mr-4"
              type="radio"
              id="type"
              name="type"
              value="Admin"
              onChange={handleInputChange} /> 
            </div>
          </div>
          
          <button 
            className="flex justify-center items-center font-sans text-base cursor-pointer bg-aqua w-32 h-10 rounded my-4" 
            type="submit">
            <FloppyDisk />
            <span className="pl-2 font-sans">Salvar</span>
          </button>
        </form>
      </div>
    </div>
  )
}