import React from "react";
import Header from "./Header";
import Search from "./search";
import EmployeeList from "./EmployeeList";

function HomePage(){
    return(
        <div className="HomePage">
            <Header title =  "Employee Directory" />
            <Search />
            <EmployeeList />
        </div>
    )
}
export default HomePage