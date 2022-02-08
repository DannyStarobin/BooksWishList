import React from "react"
import { WishList } from "../cmps/wish-list"


export class BookApp extends React.Component {
    state = {
        books: null,
        wishList: null
    }


    componentDidMount() {
        this.getBooks()
        this.getWishList()
    }

    getBooks = () => {
        const books = bookService.queryBooks()
        this.setState({ books })
    }

    getWishList = () => {
        const books = bookService.queryWishList()
        this.setState({ wishList })
    }

    onRemoveWish = (wish) => {
        bookService.removeWishFromList(wish)
    }

    render() {
        const { books, wishList } = this.stste
        if (!books || !wishList) return <React.Fragment>loading...</React.Fragment>
        return (
            <section>
                <WishList wishList={wishList} onRemoveWish={this.onRemoveWish} />
            </section>
        )
    }
}