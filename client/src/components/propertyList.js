import axios from "../api/axios";
import React ,{useEffect,useState} from "react";

const FeaturedTypes = ()=>{
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await axios.get("/hotels/countByType")
                setData(res.data);
            } catch (err) {
                setError(err)
            }finally {
                setLoading(false)
            }
        };
        fetchData()

    },[])
    if (loading) return <p>loading...</p>
    if(error) return <p>Error:{error.message}</p>
    return (
        <div>
            <ul>{data.map((item)=>(
                <li key={item._id}>
                    {item._id}
                </li>

            ))}</ul>
        </div>
    )
}
export default FeaturedTypes