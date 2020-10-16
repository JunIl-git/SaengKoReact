import React from 'react';

class Nav extends React.Component{
    shouldComponentUpdate(newProps, newState){

        if(newProps.data === this.props.data){
            return false;
        }
        return true;
    }

    render(){
        console.log('nav render')
        const data = this.props.data;
        let lists = [];

        let i = 0;

        while(i < data.length){
        lists.push(<li  key={data[i].id}>
                        <a 
                            id = {data[i].id}
                            onClick={function(e){
                                e.preventDefault();
                                this.props.onClick(e.target.id);
                            }.bind(this)}
                            href={'/content/'+data[i].id}>{data[i].title}
                        </a>
                    </li>);
            i = i + 1;
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        )
    }
}

export default Nav;