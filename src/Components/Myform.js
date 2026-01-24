import { useState } from "react"

const Myform = () => {
    const [ Data, setData] = useState({
        name: "",
        age : "",
        contact : "",
        email : "",
    })

    const [errors, setErrors] =useState({});
    const handleChange =(e) =>{
        const {age,value} =e.target;
        setData({...Data, [age]:value});
    };

    const validate =() =>{
        let newErrors ={};
        

    }
    return (
        <div>
            <div>
                <h1 >Form validaction </h1>
            </div>
        </div>
    )
}

export default Myform
