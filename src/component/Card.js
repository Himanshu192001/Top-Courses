import React, {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FcLikePlaceholder , FcLike} from "react-icons/fc"

const Card = ({description , img , title }) => {
    description = description.substring(0 , 100);
    const [btn, setBtn] = useState(false);
    const clickHandler = () => 
    {
        btn ? toast('Course added successfully') : toast('Course removed Successfully');
        setBtn(!btn);
    }

    return (
        <div className="w-[300px] h-[350px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img src={img.url} alt={img.alt} className="w-full min-h-[168px] object-cover" />
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 shadow-xl grid place-items-center">
                    <button className="text-[25px]" onClick={clickHandler}> { btn ? <FcLike/> : <FcLikePlaceholder/>}</button>
                </div>
             </div>
            <div className="p-4">
                    <p className="text-white font-semibold text-lg leading-6">{title}</p>
                <p className="text-white text-base mt-2">{description}...</p>
            </div>
        </div>
    )
}

export default Card;