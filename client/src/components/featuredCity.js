import axios from "../api/axios";
import React ,{useEffect,useState} from "react";


export default function CountByCity (){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null);
    useEffect (()=>{
        const fetchData = async ()=>{
            try {
                setLoading(true);
                const res = await axios.get("/hotels/countBycity");
                setData(res.data);
                
            } catch (err) {
                setError(err.message)
                
            } finally {
                setLoading(false)
            }
            
        }
        fetchData();
    },[]);
    if (loading) return <p>loading...</p>;
    if (error) return <p>Error:{error}</p>;
    
    return (
        <div>
        {data.map((item)=>(
        <div key={item._id} >
            <h4>{item._id}:{item.count} hotels</h4>
            {/* <p>{count} properties</p> */}
        </div>
    ))}
    </div>
    )
}
//  let outside = "ball"
//  function Play(){
//     let inside = "car"
//     console.log(inside)
//     console.log(outside)
//  }
//  Play()
// //  console.log(inside)
//  console.log(outside)

// function doubleNumber (){
//     return num * 2

// }
// // doubleNumber()
// console.log(doubleNumber(5))

// function createAdder(){
//     let count = 0;
//     function add (){
//         count +=5
//         return count;
//     }
//     return add
    
// }
// let add = createAdder();
// console.log(add())
// console.log(add())
// console.log(add())
// function num (a,b){
//     return a + b
    
   
// }
// console.log(num(2,5))

// function isEven (num){
//     if(num %2 ===0){
//         return true
//     }else{
//         return false
//     }
    
    
// }
// console.log(isEven(10))
// console.log(isEven(7))
// function greet (name){
//     return "Hello"+ " "+ name

// }
// console.log(greet("Ayoola"))


// function Counter (){
//     let count = 0;
//     function add (){
//         count ++
//         return count
//     }
//     return add
// }
// let add = Counter ()
// console.log(add ())
// console.log(add ())
// console.log(add ())
  

function createMultiplier (n){
    
    return function (x){
       
        return  n * x
    }

}
let double = createMultiplier(2)
console.log(double(5))
let triple = createMultiplier(3)
console.log(triple(4))


