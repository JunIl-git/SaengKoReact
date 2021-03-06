import React from 'react';
import '../css/Control.css';
class Control extends React.Component{
    render(){
        console.log('Control render');

        return(
            <div className="control">
                <ul>
                    <li>
                        <a href="/create" 
                        onClick ={function(e){
                            e.preventDefault();
                            this.props.onChangeMode("create");
                        }.bind(this)}>create</a>
                    </li>
                    <li>
                        <a href="/update" 
                        onClick ={function(e){
                            e.preventDefault();
                            this.props.onChangeMode("update");
                        }.bind(this)}>update</a>
                    </li>
                    <li>
                        <input type="button" value="delete" 
                        onClick ={function(e){
                            e.preventDefault();
                            this.props.onChangeMode("delete");
                        }.bind(this)}/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Control;