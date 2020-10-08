import React from 'react';

class Subject extends React.Component{

    render(){
      console.log('Subject render')
      return(
        <header>
          <h1><a href="/a" onClick={function(e){
            e.preventDefault();
            this.props.onClick();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      )
    }
  }

  export default Subject;