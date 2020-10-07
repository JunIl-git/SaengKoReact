import React from 'react';
// import Subject from './component/Subject';
import Nav from './component/Nav';
import Article from './component/Article';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mode : 'read',
      subject : {title : 'WEB', sub : 'Would Wide Web!'},
      welcome : {title : 'welcome', desc : 'Hello, React!!'},
      article : {title : 'HTML', sub : 'HTML is HyperText Markup Language'},
      contents : [
        {id:1, title: 'HTML', desc: 'HTML is HyperText Markup Language'},
        {id:2, title: 'CSS', desc: 'CSS is for design'},
        {id:3, title: 'Javascript', desc: 'Javascript is for interactive'}
      ]
    }
  }

  render(){
    console.log('App render')
    let _title,_desc = null;

      if(this.state.mode === 'read'){
        _title = this.state.subject.title;
        _desc = this.state.subject.sub;
      } else if(this.state.mode === 'welcome'){
        _title = this.state.contents[0].title;
        _desc = this.state.contents[0].desc;
      }

       const onClickButton = event =>{
        event.preventDefault();

        if(this.state.mode === 'read'){
          this.setState({mode : 'welcome'});
        } else if(this.state.mode === 'welcome')
          this.setState({mode : 'read'});
      }
    
    return(
      <div className="App">
        {/* <Subject  title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}
        <header>
          <h1><a href="/" onClick={onClickButton}>{this.state.subject.title}</a></h1>
          {this.state.sub}
        </header>
        <Nav data ={this.state.contents} ></Nav>
        <Article title={_title} sub={_desc}></Article>
      </div>
    )
  }
}
export default App;
