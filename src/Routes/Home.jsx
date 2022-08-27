import { TriangleDownIcon } from "@chakra-ui/icons"
import { Box, Button, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styles from "../Components/Navbar.module.css"
export const Home=()=>{
    return(
        <>
         <Box className={styles.home}>
       <Box className={styles.homeBox1} >
        <Text>A global leader in survey software. 20 million questions answered daily.</Text>
       <Link to="/signup"> <Button backgroundColor="#00BF6F" className={styles.homeBtn} >Get started</Button></Link>
       </Box>
       <Box className={styles.homeBox2}>
        <Heading className={styles.homeHeading} >Who is your survey audience?</Heading>
      
        <HStack spacing="200px" className={styles.homeBtn1}>
            <Button backgroundColor="#FFFFFF" >Employees</Button>
            <Button backgroundColor="#FFFFFF">Customers</Button>
            <Button backgroundColor="#FFFFFF">Target Markets</Button>
            <Button backgroundColor="#FFFFFF">Other</Button>
        </HStack>
       </Box>
       <Box>
       <Heading className={styles.homeHeading} >Join more than 19 million active users worldwide</Heading>
       <SimpleGrid columns={5} className={styles.simplegrid} spacing={40} >
         <Box>
            <img width="220px" height="170px" src="https://prod.smassets.net/assets/cms/sm/uploads//Allbirds-slate.png" alt="" />
         </Box>
         <Box>
            <img width="220px" height="170px" src="https://prod.smassets.net/assets/cms/sm/uploads//Tweezerman-logo-2x.png" alt="" />
         </Box>
         <Box>
            <img  width="220px" height="170px" src="https://prod.smassets.net/assets/cms/sm/uploads//Adobe-logo-2x.png" alt="" />
         </Box>
         <Box>
            <img  width="220px" height="170px" src="https://prod.smassets.net/assets/cms/sm/uploads//Verizon-logo-2x.png" alt="" />
         </Box>
         <Box>
            <img  width="220px" height="170px" src="https://prod.smassets.net/assets/cms/sm/uploads//sephora-logo.png" alt="" />
         </Box>
       </SimpleGrid>
       </Box>
       <Box>
       <Heading className={styles.homeHeading1} >Choose a plan that works for you</Heading>
       <Text marginTop="30px" fontWeight="500" fontSize="22px" >Get an individual plan with features that you need, or create a team instead!</Text>
       </Box>

       <Box >
        <SimpleGrid className={styles.simplegrid1} columns={3} spacing="40px">
            <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius= "10px" height="540px" width="100%">
                <Box  borderTopRadius="10px" border="1px solid #00BF6F" backgroundColor="#00BF6F"  width="100%" height="100px" >
                <Text fontSize="22px" color="#FFFFFF" fontWeight="bold" marginTop="40px">Basic</Text>
                <Text fontSize="18px" marginTop="150px">Always free</Text>
                <Button  color="#FFFFFF" backgroundColor="#00BF6F" marginTop="30px" padding="25px 30px 25px 30px">Sign up</Button>
                <Text fontSize="20px" marginTop="40px">Send unlimited surveys with up to 10 questions. Response limits apply.</Text>
                </Box>
               
            </Box>
            <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius= "10px" height="540px" width="100%">
                <Box  borderTopRadius="10px" border="1px solid #05467E" backgroundColor="#05467E"  width="100%" height="100px" >
                <Text  fontSize="22px" color="#FFFFFF" fontWeight="bold" marginTop="40px">Individual Advantage</Text>
                <Text fontWeight="bold" fontSize="24px" marginTop="50px">₹1,999</Text>
                <Text fontSize="18px" marginTop="10px">/month</Text>
                <Text fontSize="18px" marginTop="20px">Billed ₹23,988 annually</Text>
                <Button  color="#FFFFFF" backgroundColor="#05467E" marginTop="30px" padding="25px 30px 25px 30px">See all features</Button>
                <Text fontSize="20px" marginTop="40px">Get our most popular features for creating, sending & analyzing surveys.</Text>
                </Box>
               
            </Box>
            <Box  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius= "10px" height="540px" width="100%">
                <Box borderTopRadius="10px" border="1px solid #53225B" backgroundColor="#53225B"  width="100%" height="100px" >
                <Text  fontSize="22px" color="#FFFFFF" fontWeight="bold" marginTop="40px">Team Advantage</Text>
                <Text fontWeight="bold" fontSize="24px" marginTop="50px">₹1,550</Text>
                <Text fontSize="18px" marginTop="10px">per user / month</Text>
                <Text fontSize="18px" marginTop="20px">Starting at 3 users, billed annually</Text>
                <Button  color="#FFFFFF" backgroundColor="#53225B" marginTop="30px" padding="25px 30px 25px 30px">See all features</Button>
                <Text fontSize="20px" marginTop="40px">Collaboration tools and survey features that help your team work more efficiently.</Text>
                </Box>
            </Box>
        </SimpleGrid>
       </Box>

       <Box marginTop="70px" width="100%" border="1px solid #05467E" height="380px" backgroundColor="#05467E" >
        <Text marginTop="120px" marginBottom="10px" fontWeight="bold" fontSize="20px" color="#FFFFFF">Looking for targeted responses to your surveys?</Text>
        <Text fontSize="20px" color="#FFFFFF">Get the responses you need in minutes with SurveyMonkey Audience, our trusted </Text>
        <Text fontSize="20px" color="#FFFFFF">panel of more than 175 million respondents from across the globe.</Text>
        <Button padding="20px 30px" marginTop="40px" >Learn more</Button>
       </Box>

       <Box marginTop="130px" width="100%"  height="100px"  >
        <Text  marginBottom="20px" fontWeight="bold" fontSize="28px" >Start with an expert-written template</Text>
        <Text fontWeight="semibold" fontSize="20px" >Our sample survey templates make it easy for you to start collecting feedback in </Text>
        <Text fontWeight="semibold"  fontSize="20px" >just minutes. Explore hundreds of questions across different survey types, all</Text>
        <Text fontWeight="semibold"  fontSize="20px" >designed to get you accurate results you can rely on.</Text>
       </Box>

       <Box marginTop="130px" width="100%"  height="80px"  >
        <Text  marginBottom="20px" fontWeight="bold" fontSize="28px" >Tools that spark business breakthroughs</Text>
        <Text fontWeight="semibold" fontSize="20px" >Discover specialized toolkits designed for your role and industry. </Text>
       </Box>
       <Box>
        <SimpleGrid display="flex" margin="auto" width="95%" height="550" marginTop="60px" spacing="80px" columns={[1,2,3]}>
          <Box width="30%">
            <img src="https://prod.smassets.net/assets/cms/sm/uploads//customer-support-toolkit-directory.png" alt="" />
            <Text marginTop="50px" marginBottom="10px" fontWeight="bold" fontSize="28px" >Customer support</Text>
            <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >Provide better customer experiences</Text>
           <Text marginBottom="20px" fontWeight="semibold" fontSize="20px" >while keeping your teams engaged.</Text>
           <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" color="#007FAA" >Learn more</Text>
          </Box>
          <Box width="30%">
            <img src="https://prod.smassets.net/assets/cms/sm/uploads//hr-leader-toolkit-directory.png" alt="" />
            <Text marginTop="50px" marginBottom="10px" fontWeight="bold" fontSize="28px" >Human resources</Text>
            <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >Retain your workforce by fostering a</Text>
           <Text marginBottom="20px" fontWeight="semibold" fontSize="20px" >world-class employee experience.</Text>
           <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" color="#007FAA" >Learn more</Text>
          </Box>
          <Box width="30%">
            <img src="https://prod.smassets.net/assets/cms/sm/uploads//product-manager-toolkit-directory.png" alt="" />
            <Text marginTop="50px" marginBottom="10px" fontWeight="bold" fontSize="28px" >Product management</Text>
            <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >Build products that drive impact and</Text>
           <Text marginBottom="20px" fontWeight="semibold" fontSize="20px" >offer a strong product-market fit.</Text>
           <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" color="#007FAA" >Learn more</Text>
          </Box>
        </SimpleGrid>
       </Box>

       <Box marginTop="100px">
       <Text  marginBottom="20px" fontWeight="bold" fontSize="28px" >More toolkits for industry leaders</Text>
        <SimpleGrid display="flex" margin="auto" width="95%" height="550" marginTop="60px" spacing="80px" columns={[1,2,3]}>
          <Box width="30%">
            <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" color="#007FAA" >Demand generation manager</Text>
           <Text marginBottom="20px" fontWeight="semibold" fontSize="20px" color="#007FAA" >Brand marketer</Text>
          </Box>
          <Box width="30%">
            <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" color="#007FAA" >Diversity, equity & inclusion</Text>
           <Text marginBottom="20px" fontWeight="semibold" fontSize="20px" color="#007FAA" >User researcher</Text>
          </Box>
          <Box width="30%">
            <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" color="#007FAA" >Product marketer</Text>
           <Text marginBottom="20px" fontWeight="semibold" fontSize="20px" color="#007FAA" >CRM admin</Text>
          </Box>
        </SimpleGrid>
        <Button padding="20px 30px" border="1px solid " marginTop="-750px">View all</Button>
       </Box>
      
       <Box marginTop="-250px" border="1px solid #EDF2F7" width="100%" height="870px" backgroundColor="#EDF2F7">
       <Text  marginTop="140px" fontWeight="bold" fontSize="28px" >Go beyond collecting feedback—deliver</Text>
       <Text  marginBottom="70px" fontWeight="bold" fontSize="28px" >better experiences that drive your business</Text>
       <SimpleGrid width="80%" spacing={40} margin="auto" columns={2} >
        <Box >
            <img className={styles.Image} src="https://prod.smassets.net/assets/cms/sm/uploads//Momentive-Symbol-RGB-1-1.png" alt="" />
            <Text marginTop="50px" marginBottom="10px" fontWeight="bold" fontSize="28px" >Momentive Solutions</Text>
            <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >Get a platform that can grow and change along with</Text>
            <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >your survey needs over time. Browse our plans to</Text>
            <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >learn more about specific features.</Text>
            <Button padding="20px 30px" border="1px solid " marginTop="40px">Visit Momentive</Button>
        </Box>
        <Box>
            <img className={styles.Image} src="https://prod.smassets.net/assets/cms/sm/uploads//gfp-logo-rgb-2x-1.png" alt="" />
            <Text marginTop="50px" marginBottom="10px" fontWeight="bold" fontSize="28px" >GetFeedback</Text>
            <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >Manage your company’s data with advanced security</Text>
            <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >and control, so you can enable your teams to share</Text>
            <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >and collaborate safely.</Text>
            <Button padding="20px 30px" border="1px solid " marginTop="40px">Visit Momentive</Button>
        </Box>
       </SimpleGrid>
       </Box>

       <Box>
            <Text marginTop="130px" marginBottom="10px" fontWeight="bold" fontSize="28px" >Still curious?</Text>
            <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >Explore these additional resources to help you launch successful survey</Text>
            <Text marginBottom="100px" fontWeight="semibold" fontSize="20px" >projects.</Text>
            <SimpleGrid width="90%" margin="auto" spacing={35} columns={3}>
                <Box>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//golden-state-warriors.png" alt="" />
                    <Text marginTop="50px" marginBottom="10px" fontWeight="bold" fontSize="28px" >Success Stories</Text>
                    <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >Read about our customers, explore</Text>
                    <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >our webinars, and get guides on</Text>
                   <Text marginBottom="20px" fontWeight="semibold" fontSize="20px" >collecting feedback in your industry.</Text>
                   <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" color="#007FAA" >Explore resources</Text>
                </Box>
                <Box>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//blog-tile-card.png" alt="" />
                    <Text marginTop="50px" marginBottom="10px" fontWeight="bold" fontSize="28px" >Blog</Text>
                    <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >Get tips on how to create better</Text>
                    <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >surveys, hear the latest product</Text>
                   <Text marginBottom="20px" fontWeight="semibold" fontSize="20px" >news, or check out our signature</Text>
                   <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >research.</Text>
                   <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" color="#007FAA" >See Curiosity at Work</Text>
                </Box>
                <Box>
                    <img src="https://prod.smassets.net/assets/cms/sm/uploads//help-center-tile.png" alt="" />
                    <Text marginTop="50px" marginBottom="10px" fontWeight="bold" fontSize="28px" >Help Center</Text>
                    <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >Access tutorials on how features</Text>
                    <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >work, learn more about billing,</Text>
                   <Text marginBottom="20px" fontWeight="semibold" fontSize="20px" >contact Customer Support, and</Text>
                   <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" >more.</Text>
                   <Text marginBottom="10px" fontWeight="semibold" fontSize="20px" color="#007FAA" >Visit Help Center</Text>
                </Box>
            </SimpleGrid>
       </Box>
       
       <Box marginTop="200px" marginBottom="120px">
        <Text>Net Promoter, Net Promoter System, Net Promoter Score, NPS and the NPS-related emoticons are</Text>
         <Text>registered trademarks of Bain & Company, Inc., Fred Reichheld and Satmetrix Systems, Inc.</Text>
       </Box>

       <Box width="95%"  margin="auto" >
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
                <HStack marginTop="30px" spacing="30px"  >
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

                <Box  width="95%"  margin="auto" >
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
                <HStack  marginBottom="30px" marginTop="20px" spacing="30px"  >
                <Text fontWeight="bold" >Use cases:</Text>
                <Text>Online Polls</Text>
                <Text>Facebook Surveys</Text>
                <Text>Survey Template</Text>
                <Text>Scheduling Polls</Text>
                <Text>Google Forms vs</Text>
                <Text>SurveyMonkey</Text>
                <Text>Employee Satisfaction Surveys</Text>
                <Text>Free Survey Templates</Text>
              
                </HStack>
                </Box>
                <HStack  marginTop="30px">
                <Button marginLeft="30px"  color="#FFFFFF" backgroundColor="black" >English</Button>
                <Button color="#FFFFFF" backgroundColor="black"><TriangleDownIcon></TriangleDownIcon></Button>
                </HStack>
                <Box width="95%" margin="auto" marginTop="30px">
                    <Text textAlign="start">SurveyMonkey is brought to you by momentive.ai. Shape what's next</Text>
                    <Text textAlign="start">with AI‑driven insights and experience management solutions built for</Text>
                    <Text textAlign="start">the pace of modern business.</Text>
                    <Text textAlign="start" marginBottom="40px" marginTop="40px">Copyright © 1999-2022 Momentive</Text>
                </Box>
          </Box>
        </>
    )
}