import React from 'react';

class Subject extends React.Component{

    render(){
      console.log('Subject render')
      return(
        <header>
          <h1><a href="/">{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      )
    }
  }

  export default Subject;