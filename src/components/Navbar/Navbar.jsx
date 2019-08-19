import React from 'react'
import {
    Navbar,
    NavItem,
    NavLink,
    NavbarBrand,
    Nav,
    Collapse,
    NavbarToggler
} from 'reactstrap'
import {Link} from 'react-router-dom'
import './Navbar.css'

class NavbarComp extends React.Component{
    state = {
        isOpen : false
    }

    toggle = () => {
        this.setState({isOpen : !this.state.isOpen})
    }

    render(){
        return(
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt=""/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink><Link className="text-dec-none" to="/">Components</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link className="text-dec-none" to="/">Components</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link className="text-dec-none" to="/">Components</Link></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavbarComp