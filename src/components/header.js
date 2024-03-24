import React from 'react';
import '../styles/styles.css';



class Header extends React.Component 
    {
        state={
            active:"non-active",
            keywords:""
        }

        inputHandlerChange=(event)=>{
            const value=event.target.value!=='' ? 'active' : 'non-active';

            this.setState({
                active:value,
                keywords:event.target.value

        })
        };

        obj1=[{
            "firstName": "John",
            "lastName": "Farlign"
        }];


    render() {
        return (
        <header className={this.state.active}>

            <div 
            className="logo"
            >
            {this.obj1[0].firstName} {this.obj1[0].lastName} 
            </div>

            <input 
            type="text"
            onChange={this.inputHandlerChange} 

            />
            <div>{this.state.keywords}</div>

        </header>
    )
    }
}




export default Header;