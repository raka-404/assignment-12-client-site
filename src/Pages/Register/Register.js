import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [error,setError] = useState('')
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'
    const { register, handleSubmit} = useForm();
    const {handleUserRegister,setUser,updateProfile,auth} = useAuth()
    const onSubmit = data => {
        handleUserRegister(data.email,data.password)
        .then(res => {
            const newUser = res.user
            const newUserName = {...newUser}
            newUserName.displayName = data.name
            savedUser(data.name,data.email,'user')
            setUser(newUserName)
            updateProfile(auth.currentUser, {
                displayName: data.name
              }).then(() => {
                history.push(redirect_url)
              })
            
        }).catch((error)=>{
            setError(error.message)
            alert(error.message)
          })
        
    };

    const savedUser = (name,email,role) => {
        const user = {name,email,role:role}
        fetch('https://calm-stream-31615.herokuapp.com/user',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user)
        })
        .then()

    }
    return (
        <Container style={{height:'100vh'}} className="bg-2 w-100 d-flex align-items-center justify-content-center">
            <div className="c-w mx-auto text-center">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 p-3">
                        <img src="https://i.pinimg.com/originals/8a/03/13/8a0313eddbcf70f7bbb5f81888b5f4c1.gif" alt="" className="w-100" />
                    </div>
                    <div className="col-12 col-md-6 p-3">
                        <form className="w-100 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-100" type="text" placeholder="Your Name" {...register("name")} /><br/><br/>
                        <input className="w-100" type="text" placeholder="Your Email" {...register("email")} /><br/><br/>
                        <input className="w-100" type="password" placeholder="Your Password" {...register("password")} /><br/><br/>
                        <input className="w-100" type="submit" value="Register" />
                        </form>
                        <small>{error}</small><br />
                        <Link to="/login" className="mx-1"><Button className="bg-warning">Already registered</Button></Link>
                        <Link to="/home" className="mx-1"><Button className="bg-success">Back to Home</Button></Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Register;