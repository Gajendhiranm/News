import React from 'react';
import Card from "../Templates/Card";

class Api extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      data: [],
    };
  }
 
  componentDidMount() {
      console.log(this.props.name);
    const Api ="f6ed7606dd52462a81bb0274866f9eab";
    const apiUrl = `http://newsapi.org/v2/top-headlines?country=in&category=${this.props.name}&apiKey=${Api}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then(data => this.setState({
        data:data.articles, 
      }));
  }
  render() {
    console.log(this.state.data);
       return(
   <div>
     {
   this.state.data.map((e,index) => <Card e={e} index={index}/>)
     }
   </div>
     
    
    );
  }
}
export default Api;