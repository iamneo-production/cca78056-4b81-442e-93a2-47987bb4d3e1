import React from 'react'
 import { Component } from 'react'
import Header from '../../Component/Home/Nav';
import './ViewCart.css'
class ViewCart extends Component  {
    state = {cartData : []};

    componentDidMount(){
        this.getCartItems(this.props.match.params.id);
    }

    getCartItems = async (id) => {
        const role = localStorage.getItem("userRole");
        const response = await fetch(`http://localhost:8081/admin/student/cources/${id}`)
        const data = await response.json();
        this.setState({cartData : data});
    }

    removeEnroll = async (id, inx)=>{
        const role = localStorage.getItem("userRole");
        const response = await fetch(`http://localhost:8081/${role}/remove/cart/${id}`,{
            'method' : 'DELETE'
        })
        const data = await response.json();
        if(data.status === 200){
            this.state.cartData.splice(inx, 1);
            this.setState({cartData : this.state.cartData})
        }
    }
    render(){

     return(
        <>
            <Header nav={"cart"}/>
            <div className='course-cart'>
            {
                this.state.cartData.length > 0 ? 
                
                this.state.cartData.map((item, i)=>
                    <div className='course'>
                      <div className='close'>
                        <button onClick={()=>{this.removeEnroll(item.idCart, i)}}>X</button>
                        </div>
                      <div className='info'>
                        <h1> {item.name}</h1>
                        {/* <p>{item.description}</p> */}
                        <p>Duration : {item.duration}</p>
                      </div>
                    </div>
                )
                
                :
                <h1>No data found</h1>
            }
            </div>
        </>
     )


    }
    
    
    

}

export default ViewCart