import logo from './logo.svg';
import './App.css';
import Tours from './Tours';
import { useEffect, useState } from 'react';
import Loading from './Loading';

function App() {
  const url='https://course-api.com/react-tours-project';
  const[loading,setLoading]=useState(true);
  const[tours,setTours]=useState([]);
  
  const removetour=(id)=>{
    const tempdata=tours.filter((tour)=>tour.id!=id);
    setTours(tempdata);
  }
  const fetchdata=async()=>{
    try {
      setLoading(true);
      const response=await fetch(url);
      const data=await response.json();
      setLoading(false);
      setTours(data);     
    } catch (error) {
      console.log('Error');
    }
  }

  useEffect(()=>{
    fetchdata();
  },[]);

  if(loading)
  {
    return <main>
    <Loading/>
  </main>
  }
  if(tours.length===0)
  {
    return<main>
      <div className='title'>
      <h2>No tours left</h2>
      <button className='btn' onClick={fetchdata}>Refresh</button>
      </div>
    </main>
  }
  return (   
    <main>
      <Tours tours={tours} removetour={removetour}/>
    </main>  
  );
}

export default App;
