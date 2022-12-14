import { Link, routes } from '@redwoodjs/router'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Form, TextField, Submit, FieldError,Label } from '@redwoodjs/forms'
import React, {useState, useEffect} from 'react';
import validator from 'validator';
import './Profile.css';
import { Button, color } from '@chakra-ui/react';
import AuthorizeCell from 'src/components/AuthorizeCell';


const CREATE_PROFILE = gql`
  mutation CreateContactMutation($input: CreateProfileInput!) {
    createProfile(input: $input) {
      id
    }
  }
`
const ProfilePage = () => {
  const [newPass , setNewPass] = useState('');
  const [confirmPass , setConfirmPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [currPass, setCurrPass] = useState('');

const handleNewPassChange=(e)=>{
    setNewPass(e.target.value);
  }
  function handleConfirmPassChange(e) {
    setConfirmPass(e.target.value);
  }

 const handleCurrPassChange = (data) => {
    setCurrPass(e.target.value);
    create({ variables: {
              input: {
                FName: 'Sam',
                LName: 'Smith',
                currPass: 'Bread',
                newPass: 'Butter1!',
                confirmPass: 'Butter1!',
               },
              },
          })
    console.log(data)
  }

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
 if (theme === 'light') {
  setTheme('dark');
 } else {
  setTheme('light');
 }
  };

  useEffect(() => {
    document.body.className = theme;
     }, [theme]);

  const validate = (value) => {

    if (validator.isStrongPassword(value, {
      minLength: 6, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1,
    })) {
      setErrorMessage('Password is strong')
    } else {
      setErrorMessage('Password is not strong enough')
    }
  }

  const handleOnSubmit=(e)=>{
    if(newPass!=confirmPass)
    {
      alert("Password does not match");
    }
    else{

      alert('Your Password has been updated');
    }
    e.preventDefault();
  }

  return (
    <>
      <MetaTags title="Profile" description="Profile Page" />
      <div className={`ProfilePage ${theme}`}>

      <Button className="toggle"onClick={toggleTheme}>Switch Mode</Button>
       <AuthorizeCell/>
      </div>

      <Toaster />
      <h3 className="title">Profile</h3>
      <Form className='' onSubmit={(e) => {handleOnSubmit(e)}}>

        <Label name="FName" errorClassName="error">First Name</Label>
        <TextField name="First Name" validation={{ required: true }} errorClassName="error" /> <br />
        <FieldError name="First Name" className="error" />

        <Label name="LName" errorClassName="error">Last Name</Label>
        <TextField name="Last Name" validation={{ required: true }} errorClassName="error" /> <br/>
        <FieldError name="Last Name" className="error" />

        <Label htmlFor="chgePass">Change Password</Label>

        <Label name="currPass" errorClassName="error">Current Password</Label>
        <TextField name="Current Password" validation={{ required: true }} errorClassName="error"
        input type="currPass" onChange={function (e) { handleCurrPassChange(e); }}/><br/>
        <FieldError name="Current Password" className="error" />

        <Label name="newPass" errorClassName="error">New Password</Label>
        <TextField name="New Password"  validation={{ required: true }} errorClassName="error"
        input type="newPass" onChange={(e) => {validate(e.target.value); {handleNewPassChange(e); }} }/> <br />
          {errorMessage === '' ? null :
          <span style={{
            fontWeight: 'bold',
            color: 'red',

          }}>{errorMessage}</span>}
        <br/>
        <FieldError name="New Password" className="error"  /><br/>

        <Label name="confirmPass">Confirm Password</Label>
        <TextField name="Confirm Password" validation={{ required: true }} errorClassName="error"
        input type="confirmPass" value={confirmPass} onChange={function (e) { handleConfirmPassChange(e); }}/><br/>
        <FieldError name="Confirm Password" className="error"  /><br/>

       <br/>
       <Button type="submit" className='btn'>Save</Button>


      <Link to={routes.home()}><Button>Go Home</Button></Link><br/>

      </Form>
    </>
  )

}

export default ProfilePage;