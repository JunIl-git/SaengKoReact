import React from 'react';

class Nav extends React.Component{
    render(){
        console.log('nav render')
        const data = this.props.data;
        let lists = [];

        let i = 0;

        while(i < data.length){
        lists.push(<li key={data[i].id}><a href={'/content/'+data[i].id}>{data[i].title}</a></li>);
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