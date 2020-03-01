import React, { useContext } from "react";
import { Container } from "reactstrap";


import { BookContext } from "../contexts/ProviderContext";
import BookItem from "./componentItems/bookItem";
import "./Home.css";

export default function () {
    const { books, AddToCart } = useContext(BookContext);

    const trendBook = books.filter(item => {
        return item.rate > 3;
    });

    return <div className="Main">
        <Container>
            <div className="Top">
                <h2 className="title">Sach Thinh Hanh</h2>
            </div>
            {BookItem(trendBook, AddToCart)}
        </Container>
    </div>;
}
