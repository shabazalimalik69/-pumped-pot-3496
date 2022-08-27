import { ArrowBackIcon } from "@chakra-ui/icons"
import { Box, Button, Checkbox, Divider, FormControl, FormHelperText, FormLabel, HStack, Input, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styles from "../Components/Navbar.module.css"
export const SignUp1=()=>{

    const handleCreate=()=>{
        alert("Successfully Created")
    }
    return(
        <> 
        <Box className={styles.signup1}>
          <Link to="/signup" ><Text textAlign="start"><ArrowBackIcon></ArrowBackIcon> Back</Text> </Link >
          <Text marginTop="20px" textAlign="start" fontSize="30px" >Create password</Text>
          <FormControl marginTop="20px">
            <FormLabel>Enter a password</FormLabel>
            <Input type='password' required/>
            <FormHelperText>Enter at least 8 characters. Don’t use common words, names, or sequential or repeated characters.</FormHelperText>
            <FormLabel  marginTop="20px">Confirm password</FormLabel>
            <Input type='password' required/>
         </FormControl>
        <Link to="/login"><Button onClick={handleCreate} padding="30px 180px 30px 140px" marginTop="30px" backgroundColor="#00BF6F">Create account</Button></Link>
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