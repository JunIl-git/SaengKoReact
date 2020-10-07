import React from 'react';

class Article extends React.Component{
    render(){
        console.log('article render')
        return(
            <article>
                <h2>{this.props.title}</h2>
                {this.props.sub}
            </article>
        )
    }
}

export default Article;