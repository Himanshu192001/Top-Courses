
import React from "react";


const Filters = ({ filterData , currFilter , setCurrFilter}) => {

    let addFilter = (element) =>
    {
        setCurrFilter(element);
    }

    return (
        <div className=" flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {
                filterData.map((element) =>
                (
                    <button key={element.id} className={ (element.title == currFilter ? "text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-white border-2" : "text-lg px-2 py-1 rounded-md font-medium text-white bg-black")} onClick={() => {addFilter(element.title)}}>{element.title}</button>
                ))
            }
        </div>
    )
}

export default Filters;