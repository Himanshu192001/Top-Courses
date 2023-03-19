import React, { useEffect , useState } from 'react'

import Card from './Card';

export const Listing = ({data , filter}) => {
  const [tag, setTag] = useState([]);
  useEffect(()=>
  {
   setTag(Object.keys(data));
  } , [])
  return (
    <div className='w-[1000px] flex gap-5  flex-wrap h-[100%]'>
      {
        tag.map((tagName)=>{
          return tagName == filter ? data[tagName].map((element) => 
          {
            return <Card key={element.id} description={element.description} img={element.image} title = {element.title} />
          }) : data[tagName].map((element) => 
          {
            return <Card key={element.id} description={element.description} img={element.image} title = {element.title} />
          });
        })
        
      }
    </div>
  )
}
