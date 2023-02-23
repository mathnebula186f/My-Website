import React from 'react'
//Css Files
import "./AboutAuthor.css"
//Images
import Cloud from "../Assets/images/cloud.png"
import Mountain from "../Assets/images/mountain.png"
import Myface from "../Assets/images/my_face.jpg"
import Basketball from "../Assets/images/basketball.jpg"
import Keyboard from "../Assets/images/keyboard.png"
function AboutAuthor() {
return (
    <div id="About-Author">
    <div class="top-container"  >
        <img  class="top-cloud" src={Cloud} alt="cloud"/>
        <h1>I'm Gopal</h1>
        <h2>a sportsperson.</h2>
        <img class="bottom-cloud" src={Cloud} alt="cloud photo"/>
            <img src={Mountain} alt="mountain photo"/>
    </div>
    <div class="middle-container">
        <div class="profile">
            <img  class="myface"src={Myface} alt="face photo"/>
            <img src="" alt=""/>
            <h2>Hello.</h2>
            <p class="intro">My name is gopal bansal. I am a web developer.I also love playing basketball and  keyboard.</p>
        </div>
        <hr/>
        <div class="skills">
            <h2>My Skills.</h2>
            <div class="skill-row">
                <img class="basketball" src={Basketball} alt="basketball photo"/>

                <h3 >BasketBall</h3>
                <p >I have been playing basketball from my childhood. I have also played it at various levels.</p>
            </div>
            <div class="skill-row">
                <img class="keyboard" src={Keyboard} alt="keyboard photo"/>
                <h3>keyboard</h3>
                <p>I have been playing keyboard from my childhood.I used to play keyboard at the school assemblies. </p>
            </div>
        </div>
        <hr/>
        <div class="contact-me">
            <h2>Get In Touch</h2>
            <h3>If you love playing basketball as much as i do.</h3>
            <p class="contact-message">Love playing basketball as much as i do?? Let's talk about and play basketball together.</p>
            <p class="contact-message" > we can talk about web development while playing !!</p>
            <a class="btn" href="getgopalbansal@gmail.com">CONTACT ME</a>
        </div>
    </div>


    <div class="bottom-container">
        <a class="footer-link" href="https://www.linkedin.com/in/gopal-bansal-a4050b229/">LinkedIn</a>
        <a class="footer-link" href="https://twitter.com/">Instagram</a>
        <a class="footer-link" href="/">Website</a>
        <p class="copyright"  >© Gopal Bansal.</p>
    </div>
</div>
);
}

export default AboutAuthor

// {/* <div id="About-Author">
//     <div class="top-container">
//       {" "}
//       {/* <img  class="top-cloud"src="images/cloud.png" alt="cloud photo"> */}
//        <h1>I'm Gopal</h1>
//        <h2>a sportsperson.</h2>
//       {" "}
//       {/* <img class="bottom-cloud" src="images/cloud.png" alt="cloud photo"> */}
//       {/* <img src="images/mountain.png" alt="mountain photo"> */}
//       {" "}
//     </div>
//         <div class="middle-container">
//         <div class="profile">
//             {/* <img  class="myface"src="images/my_face.jpg" alt="face photo"> */}
//             {/* <img src="" alt=""> */}
//             <h2>Hello.</h2>
//             <p class="intro">My name is gopal bansal. I am a web developer.I also love playing basketball and  keyboard.</p>
//         </div>
//         {/* <hr> */}
//         <div class="skills">
//             <h2>My Skills.</h2>
//             <div class="skill-row">
//                 {/* <img class="basketball" src="images/basketball.jpg" alt="basketball photo"> */}

//                 <h3 >BasketBall</h3>
//                 <p >I have been playing basketball from my childhood. I have also played it at various levels.</p>
//             </div>
//             <div class="skill-row">
//                 {/* <img class="keyboard" src="images/keyboard.png" alt="keyboard photo"> */}
//                 <h3>keyboard</h3>
//                 <p>I have been playing keyboard from my childhood.I used to play keyboard at the school assemblies. </p>
//             </div>
//         </div>
//         {/* <hr> */}
//         <div class="contact-me">
//             <h2>Get In Touch</h2>
//             <h3>If you love playing basketball as much as i do.</h3>
//             <p class="contact-message">Love playing basketball as much as i do?? Let's talk about and play basketball together.</p>
//             <p class="contact-message" > we can talk about web development while playing !!</p>
//             <a class="btn" href="getgopalbansal@gmail.com">CONTACT ME</a>
//         </div>
//     </div>
// </div> */}














// <div id="About-Author">
//     <div class="top-container"  >
//         {/* <img  class="top-cloud"src="images/cloud.png" alt="cloud photo"> */}
//         <h1>I'm Gopal</h1>
//         <h2>a sportsperson.</h2>
//         {/* <img class="bottom-cloud" src="images/cloud.png" alt="cloud photo"> */}
//             {/* <img src="images/mountain.png" alt="mountain photo"> */}
//     </div>
//     <div class="middle-container">
//         <div class="profile">
//             {/* <img  class="myface"src="images/my_face.jpg" alt="face photo"> */}
//             {/* <img src="" alt=""> */}
//             <h2>Hello.</h2>
//             <p class="intro">My name is gopal bansal. I am a web developer.I also love playing basketball and  keyboard.</p>
//         </div>
//         {/* <hr> */}
//         <div class="skills">
//             <h2>My Skills.</h2>
//             <div class="skill-row">
//                 {/* <img class="basketball" src="images/basketball.jpg" alt="basketball photo"> */}

//                 <h3 >BasketBall</h3>
//                 <p >I have been playing basketball from my childhood. I have also played it at various levels.</p>
//             </div>
//             <div class="skill-row">
//                 {/* <img class="keyboard" src="images/keyboard.png" alt="keyboard photo"> */}
//                 <h3>keyboard</h3>
//                 <p>I have been playing keyboard from my childhood.I used to play keyboard at the school assemblies. </p>
//             </div>
//         </div>
//         {/* <hr> */}
//         <div class="contact-me">
//             <h2>Get In Touch</h2>
//             <h3>If you love playing basketball as much as i do.</h3>
//             <p class="contact-message">Love playing basketball as much as i do?? Let's talk about and play basketball together.</p>
//             <p class="contact-message" > we can talk about web development while playing !!</p>
//             <a class="btn" href="getgopalbansal@gmail.com">CONTACT ME</a>
//         </div>
//     </div>


//     <div class="bottom-container">
//         <a class="footer-link" href="https://www.linkedin.com/in/gopal-bansal-a4050b229/">LinkedIn</a>
//         <a class="footer-link" href="https://twitter.com/">Instagram</a>
//         <a class="footer-link" href="https://www.appbrewery.co/">Website</a>
//         <p class="copyright" style="margin-bottom:0px;">© Gopal Bansal.</p>
//     </div>
// </div>