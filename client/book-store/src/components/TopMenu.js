import React, { useState, useContext } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from "reactstrap";
import classnames from 'classnames'

import { Link } from "react-router-dom";
import { BookContext } from "../contexts/ProviderContext";
import './TopMenu.css';

const TopMenu = props => {
    const { cart } = useContext(BookContext);

    let amountCart = 0;
    cart.forEach(element => {
        amountCart = amountCart + element.amount
    });

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (<div>
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand>
                    <Link className="logo" to="/">JEZZS</Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="navbar-item">
                            <Link className="nav-item-link" to="/">Home</Link>
                        </NavItem>
                        <NavItem className="navbar-item">
                            <Link className="nav-item-link" to="/books">Books</Link>
                        </NavItem>
                        <NavItem className="navbar-item">
                            <Link className="nav-item-link" to="/cart">Cart ({amountCart})</Link>
                        </NavItem>
                        <NavItem className="navbar-item">
                            <Link className="nav-item-link" to="/login">Login</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>

    );
};

export default TopMenu;
