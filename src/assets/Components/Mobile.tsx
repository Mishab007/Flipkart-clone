import React from "react";
import Nothing from "../Image/nothing.png"
import Vivo from "../Image/Vivo.png"
import Samsung from "../Image/samsung.png"
import Redmi from "../Image/Redmi.png"
import Iphone from "../Image/iphone.png"
import Realme from "../Image/Realme.png"

function Mobile() {
  return (
    <div className="h-96 w w-full bg-black flex items-center justify-center gap-5 ">
      <div className="h-80 w-4/6 bg-white">
        <div className="h-12 w-44 flex justify-center place-items-center">
        <p className=" font-bold text-xl ">Best Mobile</p>
        </div>
        <div className="flex gap-3 justify-center ">
          <div className="h-64 w-48 flex justify-center items-center flex-col gap-2 rounded-md border border-slate-300 bg-white">
            <img className="h-44 w-36" src={Nothing} alt="loading" />
            <div>
            <p>Nothing Phone 2</p>
            <p className="font-bold">Incl Of Offfers</p>
            </div>
          </div>
          <div className="h-64 w-48 flex justify-center items-center flex-col gap-2 rounded-md border border-slate-300 bg-white">
            <div>
            <img className="h-44 w-36" src={Vivo} alt="loading" />
            </div>
            <p>Vivo T20 pro</p>
            <p className="font-bold">Incl Of Offfers</p>
          </div>
          <div className="h-64 w-48 flex justify-center items-center flex-col gap-2 rounded-md border border-slate-300 bg-white">
            <div>
            <img className="h-44 w-36" src={Samsung} alt="loading" />
            </div>
            <p>Samsung Galaxy S23 Ultra</p>
            <p className="font-bold">Incl Of Offfers</p>
          </div>
          <div className="h-64 w-48 flex justify-center items-center flex-col gap-2 rounded-md border border-slate-300 bg-white">
            <div>
            <img className="h-44 w-36" src={Redmi} alt="loading" />
            </div>
            <p>Redmi 12</p>
            <p className="font-bold">Incl Of Offfers</p>
          </div>
          <div className="h-64 w-48 flex justify-center items-center flex-col gap-2 rounded-md border border-slate-300 bg-white">
            <div>
            <img className="h-44 w-36" src={Iphone} alt="loading" />
            </div>
            <p>Iphone 15 max pro</p>
            <p className="font-bold">Incl Of Offfers</p>
          </div>
          <div className="h-64 w-48 flex justify-center items-center flex-col gap-2 rounded-md border border-slate-300 bg-white">
            <div>
            <img className="h-44 w-36" src={Realme} alt="loading" />
            </div>
            <p>Realme 11 pro 5G</p>
            <p className="font-bold">Incl Of Offfers</p>
          </div>
        </div>
      </div>
      <div className="h-5/6 w-1/6 bg-red-900 ">

      </div>
    </div>
  );
}

export default Mobile;
