import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[32px] font-sans font-bold mt-[200px] mb-3">Seja muito bem vindo(a)</h2>
      <Link to="/student-list">
        <div className="w-[900px] h-12 bg-blue-100 shadow-md hover:shadow-lg rounded flex justify-center items-center my-4">
          <span className="font-sans font-extralight">Visualizar todos os estudantes</span>
        </div>
      </Link>
      <Link to="/expert-list">
        <div className="w-[900px] h-12 bg-green-100 shadow-md hover:shadow-lg rounded flex justify-center items-center my-4">
          <span className="font-sans font-extralight">Visualizar todos os especialistas</span>
        </div>
      </Link>
      <Link to="/vocational-test">
        <div className="w-[900px] h-12 bg-purple-100 shadow-md hover:shadow-lg rounded flex justify-center items-center my-4">
          <span className="font-sans font-extralight">Realizar um teste vocacional</span>
        </div>
      </Link>
    </div>
  )
}