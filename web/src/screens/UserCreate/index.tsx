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
    admin: ''
  })

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }
  
  async function handleCreateCollege(event:FormEvent) {
    event.preventDefault();

    const { email, name, type, phone, interest_area, admin } = formData;

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

    navigate('/user-list');
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

          {/* <label className="font-semibold font-sans" htmlFor="type">Tipo de usuário: </label>
          <input 
            className="w-[900px] h-10 rounded my-4"
            id="type" 
            name="type" 
            type="text"
            onChange={handleInputChange} /> 
            
            FAZER COMO RADIO*/}


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