import React,{memo} from "react";


const Second = memo(({ email, password, handleChange, errorEmail, errorPassword  })=>{

    return(
        <>
            <p>Email:</p>
            <input
                type="text"
                name='email'
                value={email}
                onChange={handleChange}
            />
            {errorEmail && <div className="errorMess">{errorEmail}</div>}
            <p>Password:</p>
            <input
                type="password"
                name='password'
                value={password}
                onChange={handleChange}
            />
            {errorPassword && <div className="errorMess">{errorPassword}</div>}
        </>
    )
})
export default Second;
