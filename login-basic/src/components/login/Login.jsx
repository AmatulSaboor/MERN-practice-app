import './Login.module.css';
let Login = () => {
    return (
        <>
            <p>Login Form</p>
            <form action="">
            <label>Name: </label>
                <input type="text" name="name" placeholder="enter name" />
                <input type="text" name="number" placeholder="enter number" />
                <input type="submit" value="save" />
            </form>
        </>
    )
}

export default Login;