import React from "react";
import { RxCross2 } from "react-icons/rx";
import { LuDelete } from "react-icons/lu";
import './App.css'

function Button({value, updateValue}) {
    <RxCross2 />
    const giveIcons = ()=> {
        if(value == "*") {
            return <RxCross2 />;
        }else if(value == "<") {
            return <LuDelete />;
        }else {
            return value;
        }
    }
    return <>
   <button className="btn" onClick={()=> {updateValue(value)}}>{giveIcons()}</button>
   </>
}
//    <button className="btn" onClick={()=> {updateValue(value)}}>{value}</button>
export default Button;