import React from 'react';
import Subject from './component/Subject';
import Nav from './component/Nav';
import Article from './component/Article';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mode : 'read',
      selected_content_id:2,
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
    
      if(this.state.mode === 'welcome'){
        _title = this.state.subject.title;
        _desc = this.state.subject.sub;
      } else if(this.state.mode === 'read'){
        const data = this.state.contents;

        for(let i=0; i<data.length; i++){
          if(this.state.selected_content_id === data[i].id){
            _title = data[i].title;
            _desc = data[i].desc;
          }
        }
        

      }
    

       const onClickButton1 = event =>{
          this.setState({mode : 'welcome'});
      }

      const onClickButton2 = data =>{
        this.setState({
          mode : 'read',
          selected_content_id: Number(data)
        });

      }
    
    return(
      <div className="App">
        <Subject  mode={this.state.mode} onClick={onClickButton1} title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Nav data ={this.state.contents} onClick={onClickButton2} ></Nav>
        <div>
          <ul>
            <li><a href="/create">create</a></li>
            <li><a href="/update">update</a></li>
            <li><input type="button" value="delete"/></li>
          </ul>
        </div>
        <Article title={_title} sub={_desc}></Article>
      </div>
    )
  }
}
export default App;
