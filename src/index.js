import React from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';
import Header from './components/header.js';
import NewsList from './components/news_list.js';



class App extends React.Component{

    state = {
        news:JSON,
        filter:[]
    }

    getKeyword=(event)   => {   

        // console.log(event.target.value);
        let keyword=event.target.value

        var filter = this.state.news.filter((item)=>
        {
            var titleLower = item.title.toLowerCase();
            var keywordLower = keyword.toLowerCase();
            return titleLower.indexOf(keywordLower) !== -1;
        })

        console.log(filter);
        this.setState({
            filter:filter
        });

    }


    render() {
        let filterNews=this.state.filter;
        let wholeNews=this.state.news;
    return (
        <div>
            <Header keywords={this.getKeyword} />
            <NewsList news={filterNews.length===0 ? wholeNews : filterNews}>
                List News:
            </NewsList>
        </div>
    )
    }
};



ReactDOM.render(<App/>,document.querySelector("#root"));