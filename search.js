import React from 'react';

class Search extends React.Component{
   handleSubmit = () =>{
const city=this.refs.city.value;
this.props.handleClick(city);
   }
   
    render(){
        return(
        <div className="row">
        <input type="text"className="form-control"ref="city" defaultValue={this.props.city}
         placeholder="enter City name"/>
       <input type="button" className="btn btn-primary" value="get data" onClick={this.handleSubmit}
        />
        
        </div>
        )
    }

}
export default Search;