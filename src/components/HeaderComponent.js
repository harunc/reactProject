import React, {Component} from 'react'
import { Navbar, NavbarBrand,Nav, NavbarToggler,Collapse,NavItem} from 'reactstrap';
import NavLink from 'react-router-dom/NavLink';
class Header extends Component {
    constructor(props){
        super(props);
            this.state = {
                isNavOpen: false
            };
            this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <div className='row'>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/home"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                        </Nav>                           
                        </Collapse>
                        </div>
                    </div>
                </Navbar>
                <div className="container-fluid jumbotron">
                    <div className="container ">
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Harunce</h1>
                                <p>Sheperds we shall be, for thee my lord for thee. Power hath descended from thy hand. May our Feet may swiftly carryout thy command</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header