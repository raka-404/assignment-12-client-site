import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
const Login = () => {
    const { register, handleSubmit} = useForm();
    const {handleUserLogin,setError,error} = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'


    const onSubmit = data => {
      handleUserLogin(data.email,data.password)
      .then((result) => {
        history.push(redirect_url)
    })
    .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
        alert(errorMessage)
    });
    };

    const {handleGoogle} = useAuth()

    const handleGoogleLog = () => {
      handleGoogle()
      .then(result => {
        history.push(redirect_url)
    })
    }

  return (
    <Container style={{height:'100vh'}} className="bg-1 d-flex align-items-center justify-content-center">
        <div style={{width:'100%'}}>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 p-3">
            <img src="https://i.pinimg.com/originals/8a/03/13/8a0313eddbcf70f7bbb5f81888b5f4c1.gif" alt="" className="w-100" />
          </div>
          <div className="col-12 col-md-6 p-3">
              <form className="w-100 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <input className="w-100" type="text" placeholder="Your Email" {...register("email")} /><br/><br/>
            <input className="w-100" type="password" placeholder="Your Password" {...register("password")} /><br/><br/>
            <input className="w-100 bg-success border-0 p-2" type="submit" value="Login"/><br/>
            </form>
            
            <div className="w-75 mx-auto text-center pt-3">
            <small className="text-light">{error}</small><br />
            <Button className="text-center mx-1" onClick={handleGoogleLog}>Google log in</Button>
            {/* <Link className="text-center" to="/regi"><small>new user</small></Link> */}
            <Link to="/regi" className="mx-1"><Button className="bg-warning">new user</Button></Link>
            <Link to="/home" className="mx-1"><Button className="bg-warning">Back to Home</Button></Link>
            </div>
          </div>
        </div>
        </div>
    </Container>
  );
};

export default Login;