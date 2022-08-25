import { Box, Button, Heading, HStack, Link, SimpleGrid, Text } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'

export const PlanPricing=()=>{
    return(
        <>
        <Heading marginInlineStart="70px" marginBlockStart="50px" >Choose a plan that works for you</Heading>
        <Box style={{display:"flex",justifyContent:"center"}} >
            <HStack marginInlineStart="70px" marginBlockStart="20px" spacing={10}  >
                <Link to="/team" ><Text fontSize="20px" fontWeight="medium" >Team Plans</Text></Link>
                <Link to="/individual" ><Text fontSize="20px" fontWeight="medium" >Individual Plans</Text></Link>
                <Link to="/enterprise"><Text fontSize="20px" fontWeight="medium">Enterprise</Text></Link>
            </HStack>
        </Box>
        <Box display="grid" margin="auto" width="75%" marginBlockStart="40px" >
            <SimpleGrid columns={3} spacing={10} >
              <Box padding="15px" borderRadius="5px" height="2,000px" border="1px solid #4A4A3B">
                <Text marginTop="35px" fontSize="20px" fontWeight="bold" >TEAM ADVANTAGE</Text>
                <Text  marginTop="10px" fontSize="24px" fontWeight="bold">Rs 1,550 /user/month</Text>
                <Text marginTop="10px">Starting at 3 users, billed annually</Text>
                <Button  marginBottom="20px" marginTop="40px" color="#FFFFFF" backgroundColor="#007FAA" padding="25px 80px 25px 80px" >SIGN UP</Button>
                <Text  marginTop="20px" textAlign="justify" >Survey sharing with fine control over who can view and edit</Text>
                <Text marginTop="20px" textAlign="justify">Gather comments all in one place</Text>
                <Text marginTop="20px" textAlign="justify">Let team members analyze, filter, and export results</Text>
                <Text marginTop="20px" textAlign="justify">Notify others when you get new responses</Text>
                <Text marginTop="20px" textAlign="justify">Shared asset library for on-brand surveys</Text>
                <Text marginTop="20px" textAlign="justify">Add Contributor Seats</Text>
                <Text marginTop="20px" textAlign="justify">Add or reassign accounts at any time</Text>
                <Text marginTop="20px" textAlign="justify">Free integrations with popular collaboration apps</Text>
                <Text marginTop="20px" textAlign="justify">50,000 responses per year*</Text>
                <Text marginTop="20px" textAlign="justify">24/7 Expedited email support</Text>
                <Text marginTop="20px" textAlign="justify">Quizzes with custom feedback</Text>
                <Text marginTop="20px" textAlign="justify">Custom logo, colors, and survey URL</Text>
                <Text marginTop="20px" textAlign="justify">Question and page skip logic</Text>
                <Text marginTop="20px" textAlign="justify"> All data exports (CSV, PDF, PPT, SPSS, XLS)</Text>
                <Text marginTop="20px" textAlign="justify"> Accept Payments</Text>
                <Text marginTop="20px" textAlign="justify"> Advanced analyze features</Text>
                <Text marginTop="20px" textAlign="justify">SurveyMonkey industry benchmarks</Text>
                <Text marginTop="60px" textAlign="justify">Multilingual surveys</Text>
                <Text color="#007FAA" marginTop="900px" textAlign="justify">See all plan features</Text>
              </Box>
              <Box 
              padding="15px" borderRadius="5px" height="2,000px" border="1px solid #4A4A3B">
                <Text marginTop="35px" fontSize="20px" fontWeight="bold" >TEAM PREMIER</Text>
                <Text  marginTop="10px" fontSize="24px" fontWeight="bold">Rs 3,800 /user/month</Text>
                <Text marginTop="10px">Starting at 3 users, billed annually</Text>
                <Button  marginBottom="20px" marginTop="40px" color="#FFFFFF" backgroundColor="#671E75" padding="25px 80px 25px 80px" >SIGN UP</Button>
                <Text  marginTop="20px" textAlign="justify" >Survey sharing with fine control over who can view and edit</Text>
                <Text marginTop="20px" textAlign="justify">Gather comments all in one place</Text>
                <Text marginTop="20px" textAlign="justify">Let team members analyze, filter, and export results</Text>
                <Text marginTop="20px" textAlign="justify">Notify others when you get new responses</Text>
                <Text marginTop="20px" textAlign="justify">Shared asset library for on-brand surveys</Text>
                <Text marginTop="20px" textAlign="justify">Add Contributor Seats</Text>
                <Text marginTop="20px" textAlign="justify">Add or reassign accounts at any time</Text>
                <Text marginTop="20px" textAlign="justify">Free integrations with popular collaboration apps</Text>
                <Text marginTop="20px" textAlign="justify">100,000 responses per year*</Text>
                <Text marginTop="20px" textAlign="justify">Phone support & 24/7 Expedited email support</Text>
                <Text marginTop="20px" textAlign="justify">Quizzes with custom feedback</Text>
                <Text marginTop="20px" textAlign="justify">Custom logo, colors, and survey URL</Text>
                <Text marginTop="20px" textAlign="justify">Question and page skip logic</Text>
                <Text marginTop="20px" textAlign="justify">All data exports (CSV, PDF, PPT, SPSS, XLS)</Text>
                <Text marginTop="20px" textAlign="justify">Accept Payments</Text>
                <Text marginTop="20px" textAlign="justify">Advanced analyze features</Text>
                <Text marginTop="20px" textAlign="justify">SurveyMonkey industry benchmarks</Text>
                <Text marginTop="20px" textAlign="justify">Click map data visualization</Text>
                <Text marginTop="20px" textAlign="justify">Multilingual surveys</Text>
                <Text marginTop="20px" textAlign="justify">Response Quality</Text>
                <Text marginTop="20px" textAlign="justify">Cross tabs</Text>
                <Text marginTop="20px" textAlign="justify">Unlimited filter and compare rules, data trends</Text>
                <Text marginTop="20px" textAlign="justify">Advanced survey logic tools</Text>
                <Text marginTop="20px" textAlign="justify">Block randomization</Text>
                <Text marginTop="20px" textAlign="justify">White label surveys</Text>
                <Text marginTop="20px" textAlign="justify">Survey completion redirect</Text>
                <Text marginTop="20px" textAlign="justify">Remove SurveyMonkey footer</Text>
                <Text color="#007FAA" marginTop="550px" textAlign="justify">See all plan features</Text>
              </Box>
              <Box padding="15px" borderRadius="5px" height="2,000px" border="1px solid #4A4A3B">
                <Text marginTop="35px" fontSize="20px" fontWeight="bold" >ENTERPRISE</Text>
                <Text fontSize="18px"  marginTop="10px">Powerful admin tools, integrations, and collaboration features for your organization.</Text>
                <Button  marginBottom="20px" marginTop="30px" color="#FFFFFF" backgroundColor="#05467E" padding="25px 80px 25px 80px" >CONTACT SALES</Button>
                <Text  marginTop="20px" textAlign="justify" >Survey sharing with fine control over who can view and edit</Text>
                <Text marginTop="20px" textAlign="justify">Gather comments all in one place</Text>
                <Text marginTop="20px" textAlign="justify">Let team members analyze, filter, and export results</Text>
                <Text marginTop="20px" textAlign="justify">Notify others when you get new responses</Text>
                <Text marginTop="20px" textAlign="justify">Shared asset library for on-brand surveys</Text>
                <Text marginTop="20px" textAlign="justify">Add Contributor Seats</Text>
                <Text marginTop="20px" textAlign="justify">Add or reassign accounts at any time</Text>
                <Text marginTop="20px" textAlign="justify">Free integrations with popular collaboration apps</Text>
                <Text marginTop="20px" textAlign="justify">Unlimited surveys & questions</Text>
                <Text marginTop="20px" textAlign="justify">Phone support & 24/7 Expedited email support</Text>
                <Text marginTop="20px" textAlign="justify">Quizzes with custom feedback</Text>
                <Text marginTop="20px" textAlign="justify">Custom logo, colors, and survey URL</Text>
                <Text marginTop="20px" textAlign="justify">Question and page skip logic</Text>
                <Text marginTop="20px" textAlign="justify">All data exports (CSV, PDF, PPT, SPSS, XLS)</Text>
                <Text marginTop="20px" textAlign="justify">Accept Payments</Text>
                <Text marginTop="20px" textAlign="justify">Advanced analyze features</Text>
                <Text marginTop="20px" textAlign="justify">SurveyMonkey industry benchmarks</Text>
                <Text marginTop="20px" textAlign="justify">Click map data visualization</Text>
                <Text marginTop="20px" textAlign="justify">Multilingual surveys</Text>
                <Text marginTop="20px" textAlign="justify">Response Quality</Text>
                <Text marginTop="20px" textAlign="justify">Cross tabs</Text>
                <Text marginTop="20px" textAlign="justify">Unlimited filter and compare rules, data trends</Text>
                <Text marginTop="20px" textAlign="justify">Advanced survey logic tools</Text>
                <Text marginTop="20px" textAlign="justify">Block randomization</Text>
                <Text marginTop="20px" textAlign="justify">White label surveys</Text>
                <Text marginTop="20px" textAlign="justify">Survey completion redirect</Text>
                <Text marginTop="20px" textAlign="justify">Remove SurveyMonkey footer</Text>
                <Text marginTop="20px" textAlign="justify">Unlimited API access**</Text>
                <Text marginTop="20px" textAlign="justify">Flexible plan types for multiple users</Text>
                <Text marginTop="20px" textAlign="justify">HIPAA-compliant features**</Text>
                <Text marginTop="20px" textAlign="justify">Customization and branding</Text>
                <Text marginTop="20px" textAlign="justify">Integrations with Salesforce, Marketo, Eloqua, and Tableau**</Text>
                <Text marginTop="20px" textAlign="justify">Admin dashboard and user management</Text>
                <Text marginTop="20px" textAlign="justify">Account control and migration</Text>
                <Text marginTop="20px" textAlign="justify">Enhanced governance and security features</Text>
                <Text marginTop="20px" textAlign="justify">Single sign-on (SSO)</Text>
                <Text marginTop="20px" textAlign="justify">Activity tracking through audit logs</Text>
                <Text marginTop="20px" textAlign="justify">Dedicated customer success manager**</Text>
                <Text color="#007FAA" marginTop="40px" textAlign="justify">See all plan features</Text>
              </Box>
            </SimpleGrid>
        </Box>
        <Box display="flex" justifyContent="space-evenly" margin="auto" width="90%" marginBlockStart="20px">
                <Button  marginBottom="10px" marginTop="20px" color="#FFFFFF" backgroundColor="#007FAA" padding="25px 80px 25px 80px" >SIGN UP</Button>
                <Button  marginBottom="10px" marginTop="20px" color="#FFFFFF" backgroundColor="#671E75" padding="25px 80px 25px 80px" >SIGN UP</Button>
                <Button  marginBottom="10px" marginTop="20px" color="#FFFFFF" backgroundColor="#05467E" padding="25px 80px 25px 80px" >CONTACT SALES</Button>
            </Box>
            <Box style={{width:"70%",textAlign:"justify",margin:"auto"}}>
                <Text>*Displayed pricing represents a 20% or more savings per user per month compared to individual Advantage and Premier plans</Text>
                <Text  marginTop="10px">**Add-on features available with Enterprise plan must be purchased separately</Text>
            </Box>
            <Box style={{padding:"10px 0px 10px 0px",backgroundColor:"#F9BE0040",marginTop:"20px",width:"70%",textAlign:"center",margin:"auto"}}>
                <Text fontSize="20px" fontWeight="bold">SurveyMonkey Audience includes access to Paid Features</Text>
            </Box>
            <Heading marginInlineStart="70px" marginBlockStart="30px" marginBlockEnd="60px" >More about plans and pricing</Heading>
            <Box  width="70%" margin="auto" marginBottom="40px" >
            <SimpleGrid  columns={2} spacing={20} >
                <Box>
                 <Text textAlign="justify" fontSize="18px" fontWeight="bold" >How much does SurveyMonkey cost?</Text>
                 <Text textAlign="justify" fontSize="18px" marginTop="10px" >(Response overages may incur additional fees)</Text>
                 <Text textAlign="justify" fontSize="18px" marginTop="10px" >The Basic plan is FREE.</Text>
                 <Text textAlign="justify" fontSize="18px" marginTop="10px" >The Standard Monthly plan costs ₨ 899 a month.</Text>
                 <Text textAlign="justify" fontSize="18px" marginTop="10px" >The Standard Annual plan costs ₨ 699 a month, billed annually.</Text>
                 <Text textAlign="justify" fontSize="18px" marginTop="10px" >The Advantage plan costs ₨ 1,999 a month, billed annually.</Text>
                 <Text textAlign="justify" fontSize="18px" marginTop="10px" >The Premier plan costs ₨ 4,999 a month, billed annually.</Text>
                 <Text textAlign="justify" fontSize="18px" marginTop="10px" >The Team Advantage plan costs ₨ 1,550 a month, per user, billed annually.</Text>
                 <Text textAlign="justify" fontSize="18px" marginTop="10px" >The Team Premier plan costs ₨ 3,800 a month, per user, billed annually.</Text>
                </Box>
                <Box>
                <Text textAlign="justify" fontSize="18px" fontWeight="bold" >Do you offer discounts for teams?</Text>
                <Text textAlign="justify" fontSize="18px" marginTop="20px" >We offer discounts when you sign up for business plans that include 3 or more people. With Team Advantage and Team Premier plans, you’ll save 20% or more over personal plans and get access to additional collaboration features. See pricing <ArrowForwardIcon></ArrowForwardIcon> </Text>
                <Text textAlign="justify" fontSize="18px" fontWeight="bold" marginTop="20px" >Do you offer plans for corporate needs?</Text>
                <Text textAlign="justify" fontSize="18px" marginTop="20px">Our Enterprise plans offer HIPAA compliance, advanced security, and admin features for increased governance. Contact sales <ArrowForwardIcon></ArrowForwardIcon> </Text>
                </Box>
            </SimpleGrid>
            </Box>
            
                <Box borderBlockStart="1px solid #4A4A3B" width="95%"  margin="auto" >
                <HStack marginTop="30px"  spacing="30px"  >
                <Text fontWeight="bold" >Community:</Text>
                <Text>Our blog</Text>
                <Text>Facebook</Text>
                <Text>Twitter</Text>
                <Text>Linkedin</Text>
                <Text>YouTube</Text>
                <Text>Instagram</Text>
                <Text>Developers</Text>
                </HStack>
                </Box>

                <Box  width="95%"  margin="auto" >
                <HStack marginTop="20px" spacing="30px"  >
                <Text fontWeight="bold" >About Us:</Text>
                <Text>Leadership Team</Text>
                <Text>Board of Directors</Text>
                <Text>Investor Relations</Text>
                <Text>App Directory</Text>
                <Text>Office Locations</Text>
                <Text>Imprint </Text>
                <Text>Careers</Text>
                <Text>Sitemap</Text>
                <Text>Help</Text>
                </HStack>
                </Box>

                <Box  borderBlockEnd="1px solid #4A4A3B" width="95%"  margin="auto" >
                <HStack  marginBottom="30px" marginTop="20px" spacing="30px"  >
                <Text fontWeight="bold" >Policies:</Text>
                <Text>Terms of Use</Text>
                <Text>Privacy Notice</Text>
                <Text>California Privacy Notice</Text>
                <Text>Acceptable Uses Policy</Text>
                <Text>Security Statement</Text>
                <Text>GDPR Compliance</Text>
                <Text>Email Opt-In</Text>
                <Text>Accessibility</Text>
                <Text>Cookies Notice</Text>
                <Text>Cookies Preferences</Text>
                </HStack>
                </Box>

                <Box borderBlockEnd="1px solid #4A4A3B" width="95%"  margin="auto" >
                <HStack  marginBottom="20px" marginTop="20px" spacing="30px"  >
                <Text fontWeight="bold" >Language:</Text>
                <Text>English</Text>
                <Text>Español</Text>
                <Text>Português</Text>
                <Text>Deutsch</Text>
                <Text>Nederlands</Text>
                <Text>Français</Text>
                <Text>Русский</Text>
                <Text>Italiano</Text>
                <Text>Dansk</Text>
                <Text>Svenska</Text>
                <Text>日本語</Text>
                <Text>한국어</Text>
                <Text>中文(繁體)</Text>
                <Text>English(UK)</Text>
                </HStack>
                </Box>

                <Box width="95%" margin="auto" marginTop="20px">
                <Text textAlign="start" >Copyright © 1999-2022 Momentive</Text>
                </Box>
           
        </>
    )
}