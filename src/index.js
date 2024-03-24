import React from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';
import Header from './components/header.js';
import NewsList from './components/news_list.js';



class App extends React.Component{
    state = {
        news:JSON
    }
    render() {
    return (
        <div>
            <Header/>
            <NewsList news={this.state.news}>
                List News:
            </NewsList>
        </div>
    )
    }
};



ReactDOM.render(<App/>,document.querySelector("#root"));