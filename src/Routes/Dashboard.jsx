import { CheckCircleIcon, CheckIcon, ChevronRightIcon, TriangleDownIcon } from "@chakra-ui/icons"
import { Box, Button, Checkbox, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react"

export const Dashboard=()=>{
    return(
        <>
        <Box width="95%" margin="auto">
          <HStack marginTop="20px">
            <Text  fontSize="24px">Welcome back, </Text>
            <Text  fontSize="24px" color="#007FAA">malikshabaz69@gmail.com </Text>
            <Text  fontSize="24px">!</Text>
         </HStack>
         <HStack marginTop="20px">
           <CheckCircleIcon color="#00BF6F"></CheckCircleIcon>
            <Text  fontSize="18px">You've completed 1 of 3 tasks.</Text>
            <Text  fontSize="18px" color="#007FAA">Explore your account</Text>
            <ChevronRightIcon color="#007FAA"></ChevronRightIcon>
         </HStack>
        </Box>
        <Box width="100%" height="1560px" backgroundColor="#EDF2F7" marginTop="20px" border="1px solid #EDF2F7" >
            <Box  marginTop="90px">
            <Text fontWeight="light" fontSize="30px" >Let's get started & create your first survey!</Text>
            <Button padding="20px 40px" marginTop="40px" backgroundColor="#00BF6F" color="#FFFFFF">CREATE SURVEY</Button>
            </Box>
            <Box  width="80%" margin="auto" marginTop="90px">
            <Text fontWeight="light" fontSize="30px" textAlign="start" >Survey Examples</Text>
            <HStack marginTop="10px">
                <Text textAlign="start"  fontWeight="light" fontSize="16px">
                See what kinds of insights you can discover from survey results. Here is an example of an imaginary company with a realistic challenge. 
                </Text>
                <Text fontSize="16px"  color="#007FAA">
                See all examples.
                </Text>
            </HStack>
            </Box>
            <Box backgroundColor="#FFFFFF"   width="80%" margin="auto" marginTop="20px" height="550px">
                <Box width="95%" margin="auto"  marginTop="20px" borderBlockEnd="1px solid#EDF2F7" >
                    <SimpleGrid columns={2}>
                        <Box marginTop="20px" >
                            <Text textAlign="start" fontSize="20px" fontWeight="bold" >Your experience with our ridesharing service.</Text>
                            <Text textAlign="start">Customer Satisfaction Survey</Text>
                            <HStack marginBottom="10px" spacing={8}>
                                <Text>Questions: 9</Text>
                                <Text>Answered: 359</Text>
                            </HStack>
                        </Box>
                        <Box>
                            <Button marginLeft="500px" marginTop="30px" backgroundColor="#00BF6F" color="#FFFFFF">VIEW INSIGHTS</Button>
                        </Box>
                    </SimpleGrid>
                </Box>
                <Box width="90%" margin="auto"  marginTop="20px">
                    <SimpleGrid columns={2} spacing={5}>
                        <Box>
                            <Text textAlign="start" fontWeight="bold" >What you can learn:</Text>
                            <HStack marginTop="10px">
                            <CheckIcon></CheckIcon>
                           <Text>Would our customers recommend us to a friend?</Text>
                            </HStack>
                            <HStack marginTop="10px">
                            <CheckIcon></CheckIcon>
                           <Text>Are they finding value from our service?</Text>
                            </HStack>
                            <HStack marginTop="10px">
                            <CheckIcon></CheckIcon>
                           <Text>How is our support team doing?</Text>
                            </HStack>
                            <HStack marginTop="10px">
                            <CheckIcon></CheckIcon>
                           <Text>What new features should we build?</Text>
                            </HStack>
                            <Text marginTop="30px" textAlign="start">This ridesharing app sends this quarterly survey to their</Text>
                            <Text textAlign="start">customers to understand what they think about the</Text>
                            <Text textAlign="start">service overall and what the company can do next to</Text>
                            <Text textAlign="start">keep their customers happy. The competition is fierce, so</Text>
                            <Text textAlign="start">they always want to make sure they’re delivering the</Text>
                            <Text textAlign="start">best possible customer experience.</Text>
                            <Button fontWeight="black" marginTop="20px" marginRight="430px" border="1px solid" backgroundColor="#FFFFFF">WATCH THE VIDEO</Button>
                        </Box>
                        <Box>
                            <img src="https://cdn.smassets.net/assets/dashweb/dashweb/8.0.0/assets/img-chart-CSAT.png" alt="" />
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
            <Box width="90%" margin="auto">
            <Box>
                <SimpleGrid width="90%" margin="auto" columns={3} spacing={20} marginTop="70px">
                    <Text fontSize="24px" textAlign="start">Your Profile </Text>
                    <Text fontSize="24px" textAlign="start">Quick Poll</Text>
                    <Text fontSize="24px" textAlign="start">Survey Tips</Text>
                </SimpleGrid>
            </Box>
            <Box>
                <SimpleGrid width="90%" margin="auto" columns={3} spacing={20} marginTop="10px">
                    <Box borderRadius="5px" height="430px"  backgroundColor="#FFFFFF">
                        <Text marginTop="60px" fontWeight="bold" fontSize="24px">29%</Text>
                        <Text>COMPLETE</Text>
                        <Text marginTop="60px" fontWeight="bold" fontSize="20px">malikshabaz69@gma…</Text>
                        <Text>malikshabaz69@gmail.com</Text>
                        <HStack borderBlockEnd="1px solid#EDF2F7" marginTop="10px" marginBottom="10px" >
                            <Text color="#007FAA" marginLeft="90px">Job Role</Text>
                            <Text>at</Text>
                            <Text color="#007FAA" >Organization</Text>
                        </HStack>
                        <HStack spacing={4} marginTop="15px">
                            <Text marginLeft="20px" fontWeight="bold">Plan Type:</Text>
                            <Text>BASIC</Text>
                        </HStack>
                        <Text>Joined 4 days ago</Text>
                        <Button backgroundColor="#F9BE00" marginTop="40px">UPGRADE <ChevronRightIcon></ChevronRightIcon> </Button>
                    </Box>
                    <Box borderRadius="5px" height="430px"  backgroundColor="#FFFFFF">
                        <Text marginRight="70px" marginTop="25px" fontSize="20px">What’s the perfect number of</Text>
                        <Text marginRight="70px" fontSize="20px">questions for your survey?</Text>
                       <HStack marginTop="30px">
                       <Checkbox marginLeft="30px"></Checkbox>
                       <Text fontSize="20px">1-10 questions</Text>
                       </HStack>
                       <HStack marginTop="30px">
                       <Checkbox marginLeft="30px"></Checkbox>
                       <Text fontSize="20px">1-15 questions</Text>
                       </HStack>
                       <HStack marginTop="30px">
                       <Checkbox marginLeft="30px"></Checkbox>
                       <Text fontSize="20px">10-20 questions</Text>
                       </HStack>
                       <HStack marginTop="30px">
                       <Checkbox marginLeft="30px"></Checkbox>
                       <Text fontSize="20px">20-40 questions</Text>
                       </HStack>
                       <Button backgroundColor="#00BF6F" color="#FFFFFF" marginTop="40px">CREATE SURVEY <ChevronRightIcon></ChevronRightIcon> </Button>
                    </Box>
                    <Box borderRadius="5px" height="430px"  backgroundColor="#FFFFFF">
                       <Text marginTop="150px">Flow chart: Which question type is</Text>
                       <Text>right for you?</Text>
                       <Text fontWeight="light" fontSize="16px" textAlign="start"  marginLeft="40px" marginTop="60px">By Eric V.</Text>
                       <Text marginTop="30px">Don’t know which question types to use on</Text>
                       <Text>your first survey? This handy flow chart will</Text>
                       <Text>guide you to the best choice.</Text>
                       <Text marginTop="10px" color="#007FAA">Try it out »</Text>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
        </Box>
        <Box>
          <HStack  marginTop="30px">
            <Button marginLeft="30px"  color="#FFFFFF" backgroundColor="black" >English</Button>
            <Button color="#FFFFFF" backgroundColor="black"><TriangleDownIcon></TriangleDownIcon></Button>
          </HStack>
          <HStack marginTop="20px" spacing={10}>
            <Text marginLeft="25px">About Momentive</Text>
            <Text>Careers</Text>
            <Text> Developers</Text>
            <Text> Privacy Notice</Text>
            <Text> California Privacy Notice</Text>
            <Text> Email Opt-In</Text>
            <Text> Help</Text>
            <Text> Cookies Notice</Text>
            <Text>Copyright © 1999-2022 Momentive</Text>
            <Text> Cookies Preferences</Text>
          </HStack>
          
        </Box>
        
        </>
    )
}