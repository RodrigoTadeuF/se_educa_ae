import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="flex flex-col items-center pt-32">
      <header className="flex flex-col text-center">
        <h1 className="text-[32px] font-sans font-bold mb-3">Se Educaê</h1>
        <p className="font-sans text-base font-light">Faça login na nossa plataforma e construa conosco sua carreira</p>
      </header>
      <div className="flex flex-col justify-center items-center mt-8">
        <form>
          <label className="font-semibold" htmlFor="email">Endereço de email</label>
          <div className="flex mt-4 mb-[18px]">
            <input 
              className="w-[400px] h-10 rounded "
              type="email" 
              id="email"
            />
          </div>
          <label className="font-semibold" htmlFor="password">Senha</label>
          <div className="flex mt-4 mb-6">
            <input 
              className="w-[400px] h-10 rounded"
              type="password" 
              id="password"
            />
          </div>

          <div className="flex mb-6">
            <input 
              className="w-6 h-6 mr-4 rounded cursor-pointer"
              type="checkbox" 
              name="connected" 
              id="connected" />
            <span>Mantenha-me conectado</span>
          </div>

          <div className="flex flex-col items-center">
            <Link to="/college-list"
              className="w-[400px] h-10 rounded bg-aqua font-extralight">
              <span className="flex py-2 justify-center">Fazer login</span>
            </Link>

            <span className="text-[14px] font-sans font-extralight mt-4 underline">Esqueceu a senha?</span>
          </div>

        </form>

      </div>
    </div>
  )
}