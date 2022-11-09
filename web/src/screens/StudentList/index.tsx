import { Plus, User, Phone } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../service/api'

interface UserList {
  id: string,
  name: string,
  phone: string
}

export function StudentList() {
  const [users, setUsers] = useState<UserList[]>([])

  useEffect(() => {
    api.get<UserList[]>('/students').then(response => {
      setUsers(response.data)
    });
  }, [])

  return (
      <>
        <h2 className="font-sans font-semibold text-2xl ml-[270px] my-6">
          Estudantes
        </h2>
        {users.map(user => {
          return (
            <div className="flex flex-col items-center" key={user.id}>
              <div className="w-[900px] h-18 bg-darkBase mb-6 drop-shadow-md hover:drop-shadow-xl">
                <div className="flex items-center pl-4 py-2">
                  <User size={18}/>
                  <p className="font-sans pl-2">{user.name}</p>
                </div>
                <div className="flex items-center pl-4 pb-2">
                  <Phone size={18}/>
                  <p className="font-sans pl-2">{user.phone}</p>
                </div>
              </div>
            </div>
          )
        })}

        <Link to="/user-create" 
          className="flex justify-center items-center w-14 h-14 rounded-full
            bg-cleanGreen drop-shadow-md hover:drop-shadow-xl cursor-pointer absolute left-[1150px] top-[700px]">
          <Plus
            size={32}/>
        </Link>
      </>
  )
} 