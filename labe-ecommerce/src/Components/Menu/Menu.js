import React,{useState}from "react";
import { MenuStyle, Input } from "./style"
export default function Menu (){

    const [name, setName] = useState("")
    const selectName = (e) => {
        setName(e.target.value)
    };
    const imprimir = ()=>{
        alert(`Esta funcioando ${name}`)
    }

    return (
        <MenuStyle>
           <label>
                Nome :
            <Input value={name} onChange={selectName} placeholder="VAMOS"/>
            </label>
            
            <button  onClick={imprimir}> Filtrar </button>
        </MenuStyle>
    )
} 