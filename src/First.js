import React,{memo} from "react";

const First = memo(({ firstName, lastName, handleChange, errorFirstName, errorLastName }) => {
    return (
        <>
            <p>First Name:</p>
            <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
            />
            {errorFirstName && <div className="errorMess">{errorFirstName}</div>}
            <p>Last Name:</p>
            <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
            />
            {errorLastName && <div className="errorMess">{errorLastName}</div>}
        </>
    );
});

export default First;