import React from "react";

function Header(props){
    return(
        <div className="header">
            <h5>{props.title}</h5>
        </div>
    )
}
export default Header