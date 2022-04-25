import axios from "axios";
import { useState,useEffect } from "react";
import S3Card from "../Card/s3Card";
const CustomList = (props) => {
    const [s3List, sets3List] = useState(null);
    const baseURL = `http://127.0.0.1:5000/s3/list`;
    console.log("thuis is the base url")
    console.log(baseURL);
    useEffect(() => {
        async function fetchData() {
            await axios.get(baseURL).then((response) => {
            sets3List(response.data);
          });
        }
        fetchData();
      }, [baseURL]);
    console.log("This is the s3 List")
    console.log(s3List);
    return ( <>
        <h1>this is the {props.name} list</h1>
        {s3List && <ul>
            {s3List.map ((instance) => (
              <S3Card key={instance.Name} action = "Delete" title = {instance.Name} message={instance.CreationDate}/>
            ))}
        </ul>}
    </> );
}
 
export default CustomList;