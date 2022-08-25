import { ArrowBackIcon } from "@chakra-ui/icons"
import { Box, Button, Checkbox, Divider, FormControl, FormHelperText, FormLabel, HStack, Input, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styles from "../Components/Navbar.module.css"
export const Login1=()=>{

    const handleLogin=()=>{
        alert("Successfully Logged")
    }
    return(
        <> 
        <Box className={styles.signup1}>
          <Link to="/login" ><Text textAlign="start"><ArrowBackIcon></ArrowBackIcon> Back</Text> </Link >
          <Text marginTop="40px" textAlign="start" fontSize="30px" >Enter password</Text>
          <FormControl marginTop="40px">
            <FormLabel>Password</FormLabel>
            <Input type='password' required/>
            <Link to="/forgotpass"><FormHelperText textAlign="start" fontWeight="medium" fontSize="18px" >Forgot password? </FormHelperText></Link>
         </FormControl>
        <Link to="/dashboard"><Button onClick={handleLogin} padding="30px 180px 30px 140px" marginTop="50px" backgroundColor="#00BF6F">Login</Button></Link>
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