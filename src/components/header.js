import React from 'react';
import '../styles/styles.css';
import { css } from 'glamor';



const Header= (props) => 
    {

// example of using css glamor
        const logo=css({
            color:'#fff',
            fontSize:'40px',
            fontFamily: 'Anton',
            fontWeight:'bold',
            ':hover':{
                color:'black'
            }
        });

        const obj1=[{
            "firstName": "John",
            "lastName": "Farlign"
        }];

        return (

        <header>

            <div 
            // implementing css glamor
            className={logo}
            >
            {obj1[0].firstName} {obj1[0].lastName} 
            </div>

            <input 
            type="text"
            onChange={props.keywords} 

            />


        </header>
    )
    
}




export default Header;