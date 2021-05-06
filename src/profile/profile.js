import 'bootstrap/dist/css/bootstrap.min.css'
import'./profile.css'
import React from 'react'
import PropTypes from "prop-types";



const Profile = ({ fullName , bio , profession, age }) => {
     return (
         

        <div > <div className="welcome"> <span style={{ color : "#ba74d6"}}>Wel</span>come! </div>
       <div className="my-profile">
           <Photo></Photo>          
            <br/><br/>
           <div className="file-import">

                    <input type="file" accept="image/*" id="file-input" onChange={Photo}/>
           
        </div>
           <br/>
           <div className="full-name"> {fullName} </div>
           <br/>
           <div>{bio} 
               <p> Bio : Hi I'm {fullName} and I'm a web developer, currently taking a course at <a href="http://www.gomycode.com"> Gomycode</a>.
               <br/> <br/><br/> <span style={{ color : "black"}} >Feal free to contact me whenever you need any help! </span>
                </p> </div> <br/>
                <div>Profession :{profession}</div><br/>
                <div>Age : {age}</div><br/>

                </div>
                
               
                <footer style={{ color :"black",
                 fontSize:"20px" , 
                 textAlign:"center" , 
                 letterSpacing : "5px",
                 fontWeight :"bold",
                 fontFamily :"sans serif"}}> All rights Reserved 2021 (C) </footer>     
       </div>
      
     )
     
    }

    
    /*children props*/

    const Photo = props => {
        return  <img src='https://lzraic.lv/wp-content/uploads/2017/03/profile.jpg' id="output" alt="profile" style={{ height: "100px" ,
                                                                        width : "100px",
                                                                    boxShadow : "8px 5px 5px 2px grey"}}>{props.children}</img>
       }

    
      
       Profile.propTypes = {
        fullName : PropTypes.string,
        bio : PropTypes.string,
        profession : PropTypes.string,
        age : PropTypes.number,

    };
    Profile.defaultProps = {
        fullName: "Ghada bouzaiene",
        profession : "Automation Engineer-Web developer",
        age: 25 ,
       };
   
       
    


       export default Profile ;

       