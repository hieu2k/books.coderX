import React, { useState, useEffect } from "react";
import axios from "axios";

export const BookContext = React.createContext();

export function BookProvider(props) {
    const [state, setState] = useState({
        books: [],
        cart: [],
        stateLogin: {
            email: null,
            password: null,
            token: null,
            login: false
        }
    });
    const URL = "http://localhost:8080/api/books";

    useEffect(() => {

        if (localStorage.getItem('store')) {
            const token = JSON.parse(localStorage.getItem('store')).token;
            setState((state) => {
                return {
                    ...state,
                    stateLogin: {
                        ...state.stateLogin,
                        login: true,
                        token: token
                    }
                }
            })
        }

    }, []);

    useEffect(() => {
        axios({
            method: "GET",
            baseURL: 'http://localhost:8080/api/books'
        }).then(res => {
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
    //login
    const getUsername = (username) => {
        setState((state) => {
            return {
                ...state,
                stateLogin: {
                    ...state.stateLogin,
                    email: username
                }
            }
        })
    }

    const getPassword = (password) => {
        setState((state) => {
            return {
                ...state,
                stateLogin: {
                    ...state.stateLogin,
                    password: password
                }
            }
        })
    }

    const login = async () => {
        await axios({
            method: 'post',
            baseURL: 'http://localhost:8080/api/login',
            data: {
                username: state.stateLogin.email,
                password: state.stateLogin.password
            }
        }).then(res => {
            localStorage.setItem('store', JSON.stringify({ token: res.data }));
            setState((state) => {
                return {
                    ...state,
                    stateLogin: {
                        ...state.stateLogin,
                        login: true,
                        token: res.data
                    }
                }
            })
        })
    };

    //checkLogin
    const checkLogin = () => {
        if (!state.stateLogin.token) {
            window.location = "http://localhost:3000/login"
            return;
        }
        window.location = "http://localhost:3000/payment"
    }

    return (
        <BookContext.Provider
            value={{
                books: state.books,
                cart: state.cart,
                AddToCart: AddToCart,
                RemoveOneBook: RemoveOneBook,
                DeleteBook: DeleteBook,
                stateLogin: state.stateLogin,
                getUsername: getUsername,
                getPassword: getPassword,
                login: login,
                checkLogin: checkLogin
            }}
        >
            {props.children}
        </BookContext.Provider>
    );
}