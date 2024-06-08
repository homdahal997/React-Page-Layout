import React from "react";
import Header from "./Header";
import EmployeeSingle from "./Employeesingle";

function EmployeePage(){
    return(
        <div className="EmployeePage">
            <Header title =  "Employee" />
            <EmployeeSingle
                src="https://ashallendesign.co.uk/images/custom/ash-on-a-laptop.png"
                name="Julie Taylor"
                title="VP of Marketing"
                office="781-000-0002"
                mobile="781-000-0002"
                sms="781-000-0002"
                email="jtaylor@fakemail.com"
            />
        </div>
    )
}
export default EmployeePage