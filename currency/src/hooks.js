import { useEffect,useState } from "react";
function useCurrencyInfo(currency){
  const[Data,setData]=useState({})
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
    console.log(Data)
  },[currency])
  console.log(Data)
  return Data
}
export default useCurrencyInfo;
