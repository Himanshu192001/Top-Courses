import React, { useEffect, useState } from "react";
import Filters from "./component/Filters";
import { filterData, apiUrl } from "./data";
// import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { Listing } from "./component/Listing";
// import { FcLike } from 'react-icons/fc';


const App = () => {
  const [data , setData] = useState({}); // cards data 
  const [loading  , setLoading] = useState(true); // managing loading 
  const [currFilter, setCurrFilter] = useState('All'); // managing filter

  //fetching response 
  let fetchApi = async () => {
    try {
      let res = await fetch(apiUrl);
      res = await res.json();
      setData({...res['data']});
      console.log(data , res['data'] , "response");
      toast.success('Fetch Successfully');
      setLoading(false);
    }
    catch (error) {
      toast.error("Something went Wrong");
    }
  }

  const setFilter = (filterName) => {
    setCurrFilter(filterName);
  }

 // hitting api when render 
  useEffect(() => {
    fetchApi();
  }, []);



  return loading ? (<p> loading </p>) : (
    <div className="bg-bgDark2 flex flex-col items-center h-full min-h-[100vh]">

      <div className="w-full bg-bgDark  py-5 flex justify-center ">
        <h1 className="text-3xl font-bold  text-center text-white">Top Courses </h1>
      </div>
      <div>
        <Filters filterData={filterData} currFilter={currFilter} setCurrFilter={setFilter} />
        <Listing data={data} filter={currFilter}/>
      </div>



    </div>);
};

export default App;
