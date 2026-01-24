import { useState } from "react"

const Myform = () => {
    const [ Data, setData] = useState({
        name: "",
        age : "",
        contact : "",
        email : "",
    })
    return (
        <div>
            <div>
                <h1 >Form validaction </h1>
            </div>
        </div>
    )
}

export default Myform
