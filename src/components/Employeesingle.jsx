function EmployeeSingle(props){
    return(
        <div className="profileEmployee">
        <img className="profilePhotoEmployee" src = {props.src} alt={props.name} />
        <div className="profileNameEmployee">
            <h3>{props.name}</h3>
            <h6>{props.title}</h6>
            
        </div>
        <hr />
        
        <table className="contactInfo">
                <tbody>
                    <tr>
                        <td>Office:</td>
                        <td>{props.office}</td>
                        <td>{'>'}</td>
                    </tr>
                    <tr>
                        <td>Mobile:</td>
                        <td>{props.mobile}</td>
                        <td>{'>'}</td>
                        <hr />
                        <br />
                    </tr>
                    <tr>
                        <td>SMS:</td>
                        <td>{props.sms}</td>
                        <td>{'>'}</td>
                        <hr />
                        <br />
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{props.email}</td>
                        <td>{'>'}</td>
                        <hr />
                        <br />
                    </tr>
                </tbody>
            </table>     
    </div>
    )
}
export default EmployeeSingle