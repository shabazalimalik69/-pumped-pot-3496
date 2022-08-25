import { Box, Button, Checkbox, Divider, FormControl, FormHelperText, FormLabel, HStack, Input, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styles from "../Components/Navbar.module.css"
export const OldLogin=()=>{
    return(
        <> 
        <Box className={styles.signup}>
          <FormControl marginTop="20px">
            <FormLabel marginTop="20px">Enter your usernamer</FormLabel>
            <Input marginTop="20px" type='email' placeholder="Enter Email" required />
            <FormLabel marginTop="20px">Enter your password</FormLabel>
            <Input marginTop="20px" type='email' placeholder="Enter Email" required />
            <FormHelperText textAlign="start" marginTop="20px" >We'll never share your password.</FormHelperText>
         </FormControl>
         <Checkbox marginRight="280px" marginTop="20px" defaultChecked>Remember me</Checkbox>
        <Link to="/login"><Button padding="30px 200px 30px 200px" marginTop="30px" marginBottom="30px" backgroundColor="#00BF6F">Login</Button></Link>
         <Divider/>
         <Text textAlign="start" marginTop="20px" fontSize="20">Or sign up with</Text>
         <HStack marginTop="20px" spacing="32px">
         <Link to="/login">  <img style={{width:"60px", height:"60px",border:"1px solid grey",padding:"5px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAdVBMVEXzUyWBvAYFpvD/ugjz8/N8ugDz9vfz+Pr49vr39fPz9Pfz9vrzm4vzSxTzRQDX5cXF4PL25MUAn/D/tQCLxfIAo/D60Yuy0ovzz8jzlobz3dji6tfzOwDW5/P16tcAnPDzw7zQ4Lvz6+nr7+X07+W82vP34Ls2Hta5AAAA+ElEQVRoge3ZyRKCMBREUdQYMSoojjjh/P+fKAolukxLiYt79y+nsu7ANFgA3hxue0rFC6GSq3B7SIf+pWtrjNsslY7uhffSaOTfdpXjYdxVWoYVPhwF/kUl3vIPHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBy8JjzdRv7VtLGY9Urp9Dg9x0obU+FW6nn69a7WVP+A95WKUyf1hu/GSs8XLhOlfYX3Z1niXzbO/+4mU6XF4A2ft/1LSrwjBA4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OXhOezP3LdPxjY7nOlHb5qdsvlG72hWuzWrmrDZSKKfQfFkXw33YHerznS+0sSvEAAAAASUVORK5CYII=" alt="" />Microsoft</Link>
           <Link to="/login"> <img style={{width:"60px", height:"60px",border:"1px solid grey",padding:"5px"}} src="data:image/png;base64,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" alt="" />Facebook</Link>
           <Link to="/login"> <img style={{width:"60px", height:"60px",border:"1px solid grey",padding:"5px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACaCAMAAABmIaElAAAAYFBMVEUCdLP///8BdLMAa6+iwNqWutjc5/EAZ63c6fLk7fQAcrIAb7EAZKxYlMP2+fw1g7rK3Ouwy+G71OYge7cyf7lKjcDV5fCJsdNqnshhmMWNttZtpMymxt9Bg7p+rtF7pcxDuUbSAAAEqklEQVR4nO2cDXOyMAzHSyPQpvIuTN3cvv+3fEB8N8HhpPTx+t9u3m45/K0lIUlrRXCQyouFAypydSQS/Uu5rsARVevyAk0lYIQzMpCoI5pagZRStF/HH7evz/zyvLmElerRosrIuUfqWtKsoj1a7RpZx1Z3aAU4R9ayQRGINHHIA84ySSoixLkxKCFGooTXedmLPHT/DaVYwNwDRAsWInQVLfRo4+XRntEezdHg4fiozQ1B6z9GkxJNmxMblNazkwdoaEy13i62n5Vp6exhdRr0UIzrUB+qGx3WgOP8b0IPRdimwVnpFqwO3ACaqZrgWs3KZtLJo2GVB7dqKotsLBoadUfWVoWVvYyYRYtDgiwIvmK7aISHtEUDiRa0Nc68HirNF00WFNa8lEFDwwxakO5s3W0MWlc7M1rbclIGDWgn6GStAGPQ4oJFy5czo5UsWrO05AdM8HiANmfwgAWLVtgKupyHrlm075ndACsWrZ45rklzn3b0ysXsaD8M2oe1tIh7vCMzbA3g7Am4ySgym81VFk3CJ/GE/7HYK+cTcAl3AST9iS3WLQNlizwsx5ykE6vrC4MlsoHwXFQ1obG78jFcvaOpNl95muom3NgspvZ61F9rR27Zad/1+GM0eGH1PrM82jPyaM/IXgcc0TkPxTb+xMs4NrB/aaPQL+t//vGOhtJ1Hilpm4u3RsBVsi2VTltplRff9Q7hV48VDk3KOqF0lX4zRvWRTeIy+yhvE5g0X9Twi84wh4bYpJSaq3pKKsomP7wtmuyLbp2kao0PR45Hi8iLqms0Tdn0aNJUfHeizRbW8KDIYBNwFu3SoQSLJhFq8o9nFWie8tA/j9pAQ+d0rd1gMjMVGnCtw0vpbIhtGjQ0fM/kUukQ2zRoy8ezefov7KIBV1/fa6C5Mwla9cA3L1WzU/q34MGg/e5G69UIrh0wxaiNE9u2nh+t4XrD86MF3LKXA2gLZmefA2gNPWiTeOhIpQk66qFB8E2nbi6gMdtIJ0XTxWdm2lrF1IvbZfwrM7prNyXaR9aXT90uFvHBrWK2sj2heXW59wJBUGv5vejUaDK0/KZRKE3GGtPPqqmCh1rhTTQgesNHbcFm8Pi8Hwi55HyBTtomQiMXTdk1udImGn33rBjzhgxs06DpiiKTXDETGSr5mAaN2QwCW9pcUcYTeWhIuhx7s6lK2PLQlEmqMaMfCZrMJqdBy+jEFSWDtrKGppmUmtsOZBON+7AMMPb20CKuJI/pR7wmb4BJ0Nj6bTzaq4NHvmRa8DyareDB7oiaf0I9mkfj0LyHvtmEerQ3Q/Me+mYT6tE8mi00HzzebEI9mlU0eguK99DhUXN4Qj2aR3sfNB883mxCPdrL0MqIUnlpjDJXhI1i98sBeVGV8+sGhId228lJXbscY0RvdxEDFx3hod240W863uix/ajNFA7Ioz0j19EoD335B0hGm7s+anND0PJoz8htNIePISxjN4NHXIpo7uHhFIl04+ZBoZtUBKWbx6uW3aG0iXtsEjb783L1zrUDc6XZ6f4AZL1z7QDkjqw/NlpvHDo2Gg1s9qXa4bDtfOPQYduHAzvEqcR07ojyf/ocdjZ2MxK/AAAAAElFTkSuQmCC" alt="" />Linkedin</Link>
            <Link to="/login"><img style={{width:"60px", height:"60px",border:"1px solid grey",padding:"5px"}} src="data:image/png;base64,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" alt="" />Google</Link>
            <Link to="/login"><img style={{width:"60px", height:"60px",border:"1px solid grey",padding:"5px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACZCAMAAAALgmiIAAAAY1BMVEX///8AAAD8/Pz39/f09PTf39/m5uYGBgaQkJDv7+/Nzc0kJCSHh4fGxsa9vb3V1dWZmZl5eXkdHR2qqqosLCxMTExCQkK0tLSkpKRsbGxjY2Nzc3M7OztUVFQzMzNbW1sUFBQAxfQKAAAExUlEQVR4nO2c2ZKrIBCGRXE3YjQu0UR9/6c8ZpuJEaON0Hiq5rvH+guhV8Aw/vgDjBPEVLeGCZZddr1LTrZuIR/41ZncCZluKSOcJiVP0j0psyPyy47mjHrpmzBy2o2yoCAjLo5uRU8SdyyM5PuwGvRMPul0a3pQTISRSLemGz5HGAl0q7px4Qgjlm5VhmHWPGFn3bIGEp4wUuqWNdgxrrBCvzXzuYtsDzvzyBVG9JtZmy9sB1N25Qrbgc888KdM/8bkmzKS69Y1t8pO+v/lzMaMdcsaYh+uLfN0yxqIecKOulXd4HnMPXhyw+o4wvQb/wF/KqzRremBM11jpm5NDz4dQJrpVvSiHAvbT+prVCNdiW45b7wri3ZVk8qeqtyrt4NE6Z27C7g0WaBBF3VsFpdZFjPb5xgEc2AygpVRfUn7MD975TBMhSxWRV34s5DyY7KYdfulV48qVcOwqJK7Ai3ba/tPO+qemmB2Dky/vKafI+70YWLLssBmyY9VB1rvwBtBy+azSjWikRJ/myU/hXzNXJs44ymgrDl9G3GnKDfvk5ifDo2oqx97Tw9euzzgRretOuTPZLafhEUUUIvG58vXvzjCjTYst4C/iGWRC7vWavnj2zhx988idOWf3IRQpMQJnhUAtx80RxEmMGuzxlU6wG3QoAkD9hfL5Q/KA1KR4RdbFREBclLrq6eUSw/anNHyB2XRgWJJhicMmCuvDBYkAKxg4e1LYE7qYxl/cM0PbcrANT+1IdkvHTRunCnpywdc8cYIym6AQww7XP6oDGpwDsCtTysAngGsyOFkIFDyxhFG4JkJUvgDX2Uz7XnpVGBhxvTUjBLgNQ0fZwOE8CljONZMoH2H5JoEagY4drYXKLQoL7HcETnwgpOadAKtRRyjcRao6OEYDZEGNk4GLKJsuSatSxlODrBfZSLddRxltUCTAqducBXo2OGk561Auw6nnC2QnmBVZwVOVyGV9ATMBk6sQQhcGVYeDN+cWOUWeLjNkEpUV3CE5vBO9qsAnAlYWN0m+EFWtHYTuImOVD0YJg3q1fEaTuCOK5oyAnXrkzM2yoBWqhCbYUDviVZ0J9Aqmo2TPj0A9Z3QbO0dUFPAw1QGcu2IbdcbkLsz6w9DSeG63q5hNZ5epKu9AfLvHMhXVvrwesK/rDyyjLs7H6SrHMLMDTS1rPMHiCdcXqy84Y+V272xMvDw8Y6SvFjrptBi7h9WCjNsZD8ACNVQAw4CibyR/QCgq27iOk9IpQ8z6CYtQBjuSoPl64grDVqEx0vvoCUOrANCAk+CYDkCeHPAxAk5RK4Ro4QcJ6FLsRibQOxKOFVfGBK9FRuojjlC4Xt2qv/nhuv9aqvwW57dUNq6uGy6rK7QdLgb70uqi9S23nFWVurb/rYL59EAGRQSbhMzFQZXpMs/RcUukHTBX35AJO0FFdmFK4nP9MiVJnDQd57FUwltHSVVViVRvdjrkPwYzpdt0BfHg09fVsCiTly381FKKnbP9QtsxrvnFSf5MWNvZupqBe8a8e5Zp2d7zi37h2JqCMNMzXMNbNxmT4/Z92jBTsaurUiUvMhww3SiZxrqpseDsxwqUzs+hr37HKBM1wPnUJYxA4VWDmPSHmH44z/kHyZlTrHOUTDiAAAAAElFTkSuQmCC" alt="" />Apple</Link>
         </HStack>
        </Box>
        <Box width="60%" margin="auto" marginTop="30px">
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