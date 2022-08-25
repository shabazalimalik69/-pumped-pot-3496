import { Box, Checkbox, FormControl, FormHelperText, FormLabel, HStack, Input, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styles from "../Components/Navbar.module.css"
export const SignUp=()=>{
    return(
        <> 
        <Box className={styles.signup}>
          <Link to="/login" ><Text textAlign="end" >Already have an account? Log in</Text> </Link >
          <Text marginTop="20px" textAlign="start" fontSize="30px" >Create an account</Text>
          <FormControl marginTop="20px">
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
         </FormControl>
         <Checkbox marginRight="60px" marginTop="20px" defaultChecked>You agree to the Terms of Use and Privacy Notice.</Checkbox>
         <Checkbox textAlign="justify" marginTop="20px" defaultChecked>You agree to receive product news and special promotions via email. You can opt-out of these emails in your My Account page anytime.</Checkbox>
        </Box>
        </>
    )
}