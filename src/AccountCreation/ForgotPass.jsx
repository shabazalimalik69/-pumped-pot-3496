import { ArrowBackIcon } from "@chakra-ui/icons"
import { Box, Button, Checkbox, Divider, FormControl, FormHelperText, FormLabel, HStack, Input, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styles from "../Components/Navbar.module.css"
export const ForgotPass=()=>{

    const handleForget=()=>{
        alert("Check Your Email")
    }
    return(
        <> 
        <Box className={styles.signup1}>
          <Link to="/login" ><Text textAlign="start"><ArrowBackIcon></ArrowBackIcon> Back</Text> </Link >
          <Text marginTop="40px" textAlign="start" fontSize="30px" >Forgot password</Text>
          <Text fontSize="20px" >Enter your email address and we’ll show you the next steps to reset your password.</Text>
          <FormControl marginTop="40px">
            <FormLabel>Email address</FormLabel>
            <Input type='pemail' required/>
         </FormControl>
        <Button onClick={handleForget} padding="30px 180px 30px 140px" marginTop="50px" backgroundColor="#00BF6F">Submit</Button>
        </Box>
        <Box width="60%" margin="auto" marginTop="120px" >
          <HStack textAlign="end" spacing="20px">
          <Text>Help</Text>
          <Text>Terms of Use</Text>
          <Text>Privacy Notice</Text>
          <Text>California Privacy Notice</Text>
          <Text>Cookies Policy</Text>
          <Text>Do Not Sell My Personal Information</Text>
          <Text>Cookie Preferences</Text>
          </HStack>
        </Box>
        </>
    )

}