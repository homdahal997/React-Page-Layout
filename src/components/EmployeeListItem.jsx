function EmployeeListItem(props){
    return(
        <div className="profile">
        <img className="profilePhoto" src = {props.src} alt={props.name} />
        <div className="profileName">
            <h3>{props.name}</h3>
            <h6>{props.title}</h6>
        </div>
    </div>
    )
}
export default EmployeeListItem