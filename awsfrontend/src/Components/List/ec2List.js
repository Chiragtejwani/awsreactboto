import axios from "axios";
import { useState,useEffect } from "react";
import CustomCard from "../Card/Card";
const Ec2List = (props) => {
    const [Ec2List, setEc2List] = useState(null);
    const baseURL = `http://localhost:5000/${props.service}/list`;
    console.log("this is the base url")
    console.log(baseURL);
    useEffect(() => {
        async function fetchData() {
            await axios.get(baseURL).then((response) => {
            setEc2List(response.data);
        });
        }
        fetchData();
    }, [baseURL]);
    console.log("This is the EC2 List")
    console.log(Ec2List);
        
    return ( 
        <>
            <h1> {props.service} list</h1>
            {Ec2List && <ul>
                {Ec2List.map ((instance) => (
                <CustomCard key={instance.ReservationID} action = "Delete" title = {instance.ReservationId} message={instance.Instances[0]["ImageId"]} />
                ))}
            </ul>}
        </>
     );
}
 
export default Ec2List;


