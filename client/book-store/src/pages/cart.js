import React, { useContext } from 'react';
import { Table } from 'reactstrap';
import { Container, Row, Col } from "reactstrap";

import { BookContext } from '../contexts/ProviderContext';

export default function () {
    const { cart , AddToCart, RemoveOneBook, DeleteBook} = useContext(BookContext);

    return (
        <Container>
            <Row>
                <Col lg="8">
                    {cart.map((book, index) => {
                        return (
                            CartItem(book, index, AddToCart, RemoveOneBook, DeleteBook)
                        )
                    })}
                </Col>
                <Col lg="4"></Col>
            </Row>
        </Container>
    );
}

const CartItem = (book, index, AddToCart, RemoveOneBook, DeleteBook) => {

    return (
        <Table key={index}>
            <tbody>
                <tr>
                    <th><img src={book.image} /></th>
                    <td>
                        <div className="about-book">
                            <p className="name">{book.name}</p>
                            <p className="des">{book.des}</p>
                            <p className="amount">{book.amount}</p>
                        </div>
                    </td>
                    <td>
                        <div className="func-of-cart">
                            <div className="amount">
                                <button className="add" onClick={() => {
                                    AddToCart(book);
                                }}>+</button>
                                <span> {book.amount}</span>
                                <button className="reduce" onClick={() => {
                                    RemoveOneBook(book._id);
                                }}>-</button>
                            </div>
                            <div className="delete">
                                <button onClick={() => {
                                    DeleteBook(book._id);
                                }}>Delete</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}
