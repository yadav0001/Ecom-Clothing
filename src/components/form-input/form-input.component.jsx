import { FormInputLabel, Input, Group } from './form-input.styles'
const FormInput = ({label, ...additionalProps}) =>{

   return(
    <Group>
        <Input {...additionalProps}/>
       {label && 
            <FormInputLabel 
                shrink = {additionalProps.value.length}
            >
                {label}
            </FormInputLabel>} 
    </Group>
    ) 
}

export default FormInput