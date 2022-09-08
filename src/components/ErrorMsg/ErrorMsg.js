import './ErrorMsg.scss';

function ErrorMsg() {
return (
<div className="errmsg"> 
<img className="errmsg__icon"src={require("../../assets/Icons/error-24px.svg").default} alt={"erricon"}/>
<div className="errormsg__text"> This field is required</div>
</div>
)};
export default ErrorMsg;
