// import React,{useState, useEffect} from 'react'

// function Watch({color}) {
//   const [time , setTime] = useState(0);
   
//   useEffect(()=>{
//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div>
//       <h1 style={{color: color, backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "5px"}}>Time: {time}</h1>
//       {/* <button onClick={() => setTime(time + 1)}>Increment</button> */}
//     </div>
//   )
// }
// export default Watch
