import { Link, Navigate, useNavigate } from "react-router-dom"
import svg from "/public/svganimada.svg"
export default function LoginPage() {
  // const Navigate = useNavigate()
  return (
    <div className="flex w-full h-screen">
      <div className="w-[40%] h-full bg-white flex items-center justify-center flex-col">
        {/*  top */}
        <div className="text-[32px] font-bold">
          <h1>Faça seu Login</h1>
        </div>

        {/* meio */}
        <div className="">

        </div>

        {/* end */}
        <div className="">
          {/*

          <Link to="/cadastro">Cadastrar</Link>

          <button
          onClick={() => Navigate("/cadastro")} 
          >Cadastrar
          </button>
         */}
          <button
            className="text-[18px] font-bold text-[#6366ee] cursor-pointer"
            onClick={() => window.location.href = "/cadastro"}>
            Cadastrar
          </button>
        </div>

      </div>



      <div className="w-[60%] h-full bg-[#6366ee] flex items-center justify-center rounded-l-lg flex-col">
        <img width={600} src={svg} alt="Imagem animada" />
        <p className="text-white font-bold text-[20px] w-[300px] text-center">A melhor experiência de login que você já teve na sua vida!</p>
      </div>

    </div>
  )
}