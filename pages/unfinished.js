//pages/index.js
import Head from "next/head";
import axios from "axios"
import Unfinished from "../components/sections/Unfinished";
import {useState} from "react"
export default function Home() {
  const [unfinished,setUnfinished]=useState([])
  getUnfinished().then(data=>setUnfinished(data)) 
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    
       <Unfinished unfinished={unfinished} bg="green.100" px={5}/>
     
    </>
  );
}
async function getUnfinished(){
  const unfinished=await axios.get("https://dev.to/api/articles?username=spiritbro1&tag=unfinishedspiritbro1&state=all")
  return unfinished.data.filter(data=>data.user.username==="spiritbro1")
}
