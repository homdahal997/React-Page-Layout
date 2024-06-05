import React from "react";
import Header from "./Header";
import Search from "./search";

function HomePage(){
    return(
        <div className="HomePage">
            <Header title =  "Employee Directory" />
            <Search />
        </div>
    )
}
export default HomePage