function EmployeeListItem(props){
    return(
        <div className="profile">
        <img className="profilePhoto" src = {props.src} alt={props.name} />
        <div className="profileName">
            <h3>{props.name}</h3>
            <h4>{props.title}</h4>
        </div>
    </div>
    )
}
export default EmployeeListItem