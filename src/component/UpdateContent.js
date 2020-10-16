import React from 'react';

class UpdateContent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            id : this.props.data.id,
            title : this.props.data.title,
            desc : this.props.data.desc
        }
    }

    
    render(){
        console.log('updateContent')
        return(
            <article>
                <h2>Update</h2>
                <form action="/update_process" method="post"
                    onSubmit={e =>{
                        e.preventDefault();
                       this.props.onSubmit(
                           this.state.id,
                           this.state.title,
                           this.state.desc
                       )
                    }
                    }>
                    <p><input 
                        type="text" 
                        name="title" 
                        placeholder="title"
                        value={this.state.title}
                        onChange={e=>{
                            this.setState({
                                title : e.target.value
                            })
                        }}
                    /></p>
                    <p><textarea 
                        name="desc" 
                        placeholder="description"
                        value={this.state.desc}
                        onChange={e=>{
                            this.setState({
                                desc : e.target.value
                            })
                        }}
                    ></textarea></p>
                    <p><input type="submit" value="Submit"/></p>
                </form>
            </article>
        )
    }
}

export default UpdateContent;