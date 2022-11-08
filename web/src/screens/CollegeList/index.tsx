import { Plus, GraduationCap, LinkSimple } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../service/api'

interface CollegeList {
  id: string,
  name: string,
  url: string
}

export function CollegeList() {
  const [colleges, setColleges] = useState<CollegeList[]>([])

  useEffect(() => {
    api.get<CollegeList[]>('/colleges').then(response => {
      setColleges(response.data)
    });
  }, [])

  return (
      <>
        <h2 className="font-sans font-semibold text-2xl ml-[270px] my-6">
          Faculdades
        </h2>
        {colleges.map(college => {
          return (
            <div className="flex flex-col items-center" key={college.id}>
              <div className="w-[900px] h-18 bg-darkBase mb-6 drop-shadow-md hover:drop-shadow-xl">
                <div className="flex items-center pl-4 py-2">
                  <GraduationCap size={18} />
                  <p className="font-sans pl-2">{college.name}</p>
                </div>
                <div className="flex items-center pl-4 pb-2">
                  <LinkSimple size={18}/>
                  <a href={college.url} target="blank" className="font-sans pl-2 underline">{college.url}</a>
                </div>
              </div>
            </div>
          )
        })}

        <Link to="/college-create" 
          className="flex justify-center items-center w-14 h-14 rounded-full
            bg-cleanGreen drop-shadow-md hover:drop-shadow-xl cursor-pointer absolute left-[1150px] top-[700px]">
          <Plus
            size={32}/>
        </Link>
      </>
  )
} 