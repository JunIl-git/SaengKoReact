import React from 'react';
import Subject from './component/Subject';
import Nav from './component/Nav';
import Control from './component/Control';
import ReadContent from './component/ReadContent';
import CreateContent from './component/CreateContent';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mode : 'create',
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
    let _title,_desc,_article = null;
    
      if(this.state.mode === 'welcome'){
        _title = this.state.subject.title;
        _desc = this.state.subject.sub;
        _article = <ReadContent title={_title} sub={_desc}></ReadContent>
      } else if(this.state.mode === 'read'){
        const data = this.state.contents;
        for(let i=0; i<data.length; i++){
          if(this.state.selected_content_id === data[i].id){
            _title = data[i].title;
            _desc = data[i].desc;
            _article = <ReadContent title={_title} sub={_desc}></ReadContent>
          }
        }
      } else if(this.state.mode === 'create'){
        _article = <CreateContent onSubmit ={(title,desc)=>{
          const addContent = {id: this.state.contents.length+1, title:title, desc:desc}
          let _contents =this.state.contents.concat(addContent)
          this.setState({ contents: _contents});
        }}></CreateContent>
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
        <Control onChangeMode = {function(mode){
          this.setState({
            mode : mode
          })
        }.bind(this)}></Control>
        {_article}
      </div>
    )
  }
}
export default App;
