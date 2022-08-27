import { Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styles from "../Components/Navbar.module.css"
export const ForgotEmail=()=>{
    return(
        <>
        <Box className={styles.forgotEmail}  >
          <Text textAlign="start" fontWeight="semibold" fontSize="24px" >Forgot your email?</Text>
          <Text marginTop="30px"  textAlign="start" fontSize="24px">We moved to a new system where you log in with email instead of username. For a limited time, you can go back to the old login page to log in with your username.</Text>
          <Link to="/oldlogin"> <Text color="blue" fontSize="18px">Go back</Text> </Link>
          <Text marginTop="30px"  textAlign="start" fontSize="24px">Once you log in, make sure you have an updated email address on your My Account page.</Text>
        </Box>
        </>
        
    )
}