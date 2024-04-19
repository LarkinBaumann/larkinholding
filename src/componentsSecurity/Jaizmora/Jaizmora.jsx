import React from "react";
import {useRouter} from 'next/router'

function Jaizmora() {

  const router = useRouter()

  return (
    <div className="w-full h-[70px] flex flex-row justify-center items-center text-[#55B0F0] bg-[#0e192170] text-[15px] font-paragraph z-10">
      Website made by{" "}
      <span className="text-[#005E93] cursor-pointer mx-[4px]"
      onClick={()=>router.push("https://www.instagram.com/jaizmora_agency/")}
      >Jaizmora Digital Media  </span> 
    </div>
  );
}

export default Jaizmora;
