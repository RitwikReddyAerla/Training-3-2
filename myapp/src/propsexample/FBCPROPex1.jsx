import React from 'react'

const FBCPROPex1 = (props) => {
    console.log(props);
    if(props.isLoggedIn == true){
        return (
            <div>
                <h1>Welcome {props.username}</h1>
                {
                    props.hobbies.map((value)=>{
                        return <li>{value}</li>
                    })
                }
            </div>
        )
    }else{
        return <h1>Please login first</h1>
    }
}

export default FBCPROPex1;