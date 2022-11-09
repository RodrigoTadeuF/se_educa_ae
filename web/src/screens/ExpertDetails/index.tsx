import { User, Phone, EnvelopeSimple } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../service/api';

interface User {
  id: string,
  name: string,
  phone: string,
  email: string,
  type: string
}

export function ExpertDetails() {

  const { id } = useParams();

  const [user, setUser] = useState<User>();

  useEffect(() => {
      api.get<User>(`/user/${id}`).then(response => {
        setUser(response.data)
      })
  }, [])

  console.log(user)

    return (
      <div key={user?.id} className="flex flex-col items-center">
        <h2 className="font-sans text-4xl font-semibold mt-4 mb-10">Detalhes do usuário</h2>
        <div className="flex justify-center items-center">
          <User size={32}/>
          
          <h2 className="ml-4 font-sans text-[32px] font-semibold">{user?.name}</h2>
        </div>
        <div className="flex mt-6 mb-6">
          <div className="flex items-center mx-2">
            <Phone size={16} />
            <p className="font-sans text-base ml-2">{user?.phone}</p>
          </div>
          <div className="flex items-center mx-2">
            <EnvelopeSimple size={16} />
            <p className="font-sans text-base ml-2">{user?.email}</p>
          </div>
        </div>
  
        <div className="mb-12">
          <p>Área de atuação: {user?.type === 'Psychologist' ? 'Psicologia' : 'Pedagogo'}</p>
        </div>
  
        <Link to="/booking">
          <div className="w-60 h-12 flex items-center justify-center bg-aqua rounded shadow-sm hover:shadow-md">
            <span>Agende uma conversa</span>
          </div>
        </Link>
  
      </div>
  )
}