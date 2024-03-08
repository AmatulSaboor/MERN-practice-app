import './Login.module.css';
let Login = () => {
    return (
        <>
            <p>Login Form</p>
            <form action="">
            <div>
                <label for='name'>Name: </label>
                <input type="text" name="name" id='name'/>
            </div>
            <div>
                <label for='number'>Number: </label>
                <input type="text" name="number" id='number'/>
            </div>
            <div>
                <input type="submit" value="save" />
            </div>
            </form>
        </>
    )
}

export default Login;