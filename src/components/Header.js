import React,{Component} from 'react'

class Header extends Component{
    render(){
        return(
            <div style={{margin:"10px"}}>
                <div>
                    <span className="badge badge-pill badge-success" >ToDo</span>
                </div>
            </div>
        )
    }
}
export default Header;