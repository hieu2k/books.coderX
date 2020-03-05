import React, { useState, useEffect } from "react";
import axios from "axios";

export const BookContext = React.createContext({
    books: [],
    cart: 0
});

export function BookProvider(props) {
    const [state, setState] = useState({
        books: [],
        cart: []
    });
    const URL = "http://localhost:8080/api/books";

    useEffect(() => {
        //save data
    }, []);

    useEffect(() => {
        axios
            .get(URL)
            .then(res => {
                const data = res.data;
                setState((state) => {
                    return { ...state, books: data }
                });
            })
            .catch(err => console.log("Error is: ", err));
    }, [state]);

    const AddToCart = (book) => {
        const UpdateCart = [...state.cart];
        const UpdateItemIndex = UpdateCart.findIndex(item => item._id === book._id);

        if (UpdateItemIndex < 0) {
            setState((state) => {
                return {
                    ...state,
                    cart: [
                        ...UpdateCart,
                        {
                            ...book,
                            amount: 1
                        }
                    ]
                }
            })
        } else {
            const UpdateItem = UpdateCart[UpdateItemIndex];

            UpdateItem.amount++;

            setState((state) => {
                return {
                    ...state,
                    cart: [
                        ...UpdateCart.slice(0, UpdateItemIndex),
                        { ...UpdateItem },
                        ...UpdateCart.slice(UpdateItemIndex + 1)
                    ]
                }
            })
        }
    }

    const RemoveOneBook = (bookID) => {
        const UpdateCart = [...state.cart];
        const UpdateItemIndex = UpdateCart.findIndex(item => item._id === bookID)
        const UpdateItem = { ...UpdateCart[UpdateItemIndex] }

        if (UpdateItem.amount === 1) {
            return;
        }

        UpdateItem.amount--;

        setState((state) => {
            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, UpdateItemIndex),
                    { ...UpdateItem },
                    ...state.cart.slice(UpdateItemIndex + 1)
                ]
            }
        })
    }

    const DeleteBook = (bookID) => {
        const UpdateCart = [...state.cart];
        const UpdateItemIndex = UpdateCart.findIndex(item => item._id === bookID)

        UpdateCart.splice(UpdateItemIndex, 1);

        setState((state) => {
            return {
                ...state,
                cart: [...UpdateCart]
            }
        })
    }

    return (
        <BookContext.Provider
            value={{
                books: state.books,
                cart: state.cart,
                AddToCart: AddToCart,
                RemoveOneBook: RemoveOneBook,
                DeleteBook: DeleteBook
            }}
        >
            {props.children}
        </BookContext.Provider>
    );
}