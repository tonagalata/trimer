import React, { Component } from 'react';
import trimerService from '../../Services/trimerService';

class StylistPage extends Component {
  state = { 
    stylist: []
   }

   componentDidMount = async () => {
    try {
      const data = await trimerService.getStylist()
      console.log(data)
        this.setState({
         stylist: data
       })
    } catch (error) {
      console.log(error)
    }
   }
  render() { 
    console.log(this.state.stylist)
    return ( 
      <section>
        <div>
          <h1>Hello</h1>
        </div>
      </section>
     );
  }
}
 
export default StylistPage;