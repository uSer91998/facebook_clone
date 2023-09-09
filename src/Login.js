import { useState } from "react";

function Login() {
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")

    const inp1 = (e) => {
        setInput1(e.target.value)
    }
    const inp2 = (e) => {
        setInput2(e.target.value)
    }
    const login = () => {
        if (input1 !== "" && input2 !== "" ) {
            setInput1("");
            setInput2("");
            alert(`Login: ${input1} Password: ${input2}`)
            
        }else {
            alert("EROR")
        }
    }

    return(
        <div>
            <div className="fb2" >
                <input type="text" placeholder="Email or phon number" value={input1} onChange={inp1}/>
                <br/>
                <input type="password" placeholder="Password"  value={input2} onChange={inp2}/>
                <br/>
                <button onClick={login}>Log In</button>
            </div>
        </div>
    )
}
export default Login;