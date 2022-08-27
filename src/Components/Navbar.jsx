import { Box, HStack, Menu, MenuButton,Button, MenuItem, MenuList, SimpleGrid, Text, Divider } from "@chakra-ui/react"
import { ChevronDownIcon,ArrowForwardIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
export const Navbar=()=>{
    return(
        <Box  className={styles.navbar} style={{display:"flex",marginLeft:"80px",marginBlockStart:"30px"}} >
        <SimpleGrid columns={[1,2,2,3]} spacing={10}>
            <Link to="/" >
                <img src="https://prod.smassets.net/assets/website/2.182.0/images/logo-surveymonkey.svg" alt="" />
            </Link>
            <Box>
              <SimpleGrid columns={4} spacing={30}>
                    <Link to="/products" >
                        <Menu>
                            <MenuButton backgroundColor="white" as={Button} rightIcon={<ChevronDownIcon />}>
                            <Text   fontWeight="medium" color="#1E2124" fontSize="18px" >Products</Text>
                            </MenuButton>
                            <MenuList style={{padding:"20px"}}>
                                <MenuItem>Surveys</MenuItem>
                                <Divider/>
                                <MenuItem>
                                <Text color="#007FAA" fontSize="22px" >SurveyMonkey</Text>
                                </MenuItem>
                                <Text style={{textAlign:"inherit"}} > Create & send surveys with the<br/> world's leading online survey<br/> software</Text>
                                <MenuItem>
                                <Text color="#007FAA" fontSize="22px" >Enterprise</Text>
                                </MenuItem>
                                <Text style={{textAlign:"inherit"}} > Empower your organization with<br/> our secure survey platform</Text>
                                <MenuItem>
                                <Text color="#007FAA" fontSize="22px" >Integrations & Plug-ins</Text>
                                </MenuItem>
                                <Text style={{textAlign:"inherit"}} > Bring survey insights into your <br/> business apps</Text>
                                <MenuItem>
                                <Text color="#007FAA" fontSize="22px" >Feedback</Text>
                                </MenuItem>
                                <Text style={{textAlign:"inherit"}} > Customer feedback for<br/> salesforce</Text>
                            </MenuList>
                        </Menu>
                    </Link>
                    <Link to="/solutions">
                        <Menu>
                            <MenuButton backgroundColor="white" as={Button} rightIcon={<ChevronDownIcon />}>
                            <Text  fontWeight="medium" color="#1E2124" fontSize="18px" > Solutions</Text>
                            </MenuButton>
                            <MenuList  style={{padding:"20px"}}>
                            <MenuItem>Solutions for teams</MenuItem>
                                <Divider/>
                                <MenuItem>
                                <Text color="#007FAA" fontSize="22px" >Customer Experience</Text>
                                </MenuItem>
                                <Text style={{textAlign:"inherit"}} > Delight customers & increase loyalty<br/> through feedback</Text>
                                <MenuItem>
                                <Text color="#007FAA" fontSize="22px" >Human Resources</Text>
                                </MenuItem>
                                <Text style={{textAlign:"inherit"}} > Improve your employee experience,<br/> engagement & retention</Text>
                                <MenuItem>
                                <Text color="#007FAA" fontSize="22px" >Marketing</Text>
                                </MenuItem>
                                <Text style={{textAlign:"inherit"}} > Create winning campaigns boost ROI & <br/> drive growth</Text>
                                <MenuItem>
                                <Text color="#007FAA" fontSize="22px" >Education</Text>
                                </MenuItem>
                                <Text style={{textAlign:"inherit"}} > Elevate your student experience and<br/>become a data-driven institution</Text>
                            </MenuList>
                        </Menu>
                   </Link>
                   <Link to="/resources">
                        <Menu>
                            <MenuButton backgroundColor="white" as={Button} rightIcon={<ChevronDownIcon />}>
                            <Text   fontWeight="medium" color="#1E2124" fontSize="18px" >Resources</Text>
                            </MenuButton>
                            <MenuList  style={{padding:"20px"}}>
                               <MenuItem>
                                <Text color="#007FAA" fontSize="22px" >Resources</Text>
                                </MenuItem>
                                <Text style={{textAlign:"inherit"}} > Best practices for using surveys &<br/> survey data</Text>
                                <MenuItem>
                                <Text color="#007FAA" fontSize="22px" >Curiosity at Work</Text>
                                </MenuItem>
                                <Text style={{textAlign:"inherit"}} > Our blog about surveys, tips for<br/> business & more</Text>
                                <MenuItem>
                                <Text color="#007FAA" fontSize="22px" >Marketing</Text>
                                </MenuItem>
                                <Text style={{textAlign:"inherit"}} > Create winning campaigns boost ROI & <br/> drive growth</Text>
                                <MenuItem>
                                <Text color="#007FAA" fontSize="22px" >Help Center</Text>
                                </MenuItem>
                                <Text style={{textAlign:"inherit"}} > Tutorials & how-to guides for using <br/>SurveyMonkey </Text>
                                <Text color="#007FAA" fontSize="18px" >Explore our 180+ survey templates <ArrowForwardIcon></ArrowForwardIcon> </Text>
                            </MenuList>
                        </Menu>
                   </Link>
                <Link to="/planpricing">
                    {/* <Text style={{marginTop:"5px"}}  fontWeight="medium" color="#1E2124" fontSize="16px" >Plan & Pricing</Text> */}
                    <Button backgroundColor="white" fontWeight="medium" color="#1E2124" fontSize="16px">Plan & Pricing</Button>
                </Link>
              </SimpleGrid>
            </Box>
            <Box style={{marginInlineStart:"200px"}}>
                    <HStack spacing="10px">
                        <Box >
                        <Link to="/login">
                        <Text padding="0px 12px" fontWeight="medium" color="#1E2124" fontSize="18px" >Log in</Text>
                        </Link>
                        </Box>
                        <Box style={{borderRadius:"5px",backgroundColor:"#F9BE00",padding:"5px"}}>
                        <Link to="/signup">
                        <Text padding="0px 12px" fontWeight="medium" color="#1E2124" fontSize="18px"  >Sign up free</Text>
                        </Link>
                        </Box>
                    </HStack>
            </Box>
        </SimpleGrid>
        </Box>
    )
}