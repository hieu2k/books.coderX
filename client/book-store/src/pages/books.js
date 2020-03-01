import React, { useContext } from "react";
import { Container } from "reactstrap";

import { BookContext } from "../contexts/ProviderContext";
import BookItem from "../components/componentItems/bookItem";


export default function () {
    const { books, AddToCart } = useContext(BookContext);

    return <Container>{BookItem(books, AddToCart)}</Container>
}