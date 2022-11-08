import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { api } from "../../service/api";
import { FloppyDisk } from 'phosphor-react'

export function CollegeCreate() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    logo_url: ''
  })

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }
  
  async function handleCreateCollege(event:FormEvent) {
    event.preventDefault();

    const { name, description, url, logo_url } = formData;

    const data = {
      name,
      description,
      url, 
      logo_url
    }

    await api.post("colleges",  data)

    alert('Nova Faculdade criada!');

    navigate('/college-list');
  }

  return (

    <div>
      <h2 className="text-2xl font-sans font-bold ml-[265px] mt-6 mb-8">
        Criar nova faculdade
      </h2>
      <div className="flex flex-col justify-center items-center">
        <form className="flex flex-col" onSubmit={handleCreateCollege}>
          <label 
            className="font-semibold font-sans" 
            htmlFor="name">
              Nome: 
            </label>
          <input 
            className="w-[900px] h-10 rounded my-4"
            id="name" 
            name="name" 
            type="text" 
            onChange={handleInputChange}/>

          <label className="font-semibold font-sans" htmlFor="description">Descrição: </label>
          <input 
            className="w-[900px] h-10 rounded my-4"
            id="description" 
            name="description" 
            type="text"
            onChange={handleInputChange} />

          <label className="font-semibold font-sans" htmlFor="url">Site: </label>
          <input 
            className="w-[900px] h-10 rounded my-4"
            id="url" 
            name="url" 
            type="text"
            onChange={handleInputChange} />

          <label className="font-semibold font-sans" htmlFor="logo_url">Link para o logo:</label>
          <input 
            className="w-[900px] h-10 rounded my-4"
            id="logo_url" 
            name="logo_url" 
            type="text"
            onChange={handleInputChange} />

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