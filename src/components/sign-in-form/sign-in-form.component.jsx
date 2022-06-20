import { useState} from 'react'
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email:'',
    password:''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password)

            resetFormFields()
        } catch (error) {
            alert("Incorrect Email/Password. Try Again")
        }
          
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormFields({...formFields, [name]:value})
        
    }

    const signInWithGoogle =async () => {
          await signInWithGooglePopup()
    }
 
    return (
        <div className="sign-up-container">
           <h2>Already have an account ?</h2>
           <span>Sign in with your email and password</span>
           <form onSubmit={handleSubmit}>
                
                <FormInput label="Email" type="email" name="email" onChange={handleChange} value={email} required/>

                <FormInput label="Password" type="password" name="password" onChange={handleChange} value={password} required/>

                <div className="buttons-container">
                    <Button type="submit">Sign in</Button> 
                    <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>
                        Google sign in
                    </Button>
                </div>
                
           </form>
            
        </div>
    )
}

export default SignInForm