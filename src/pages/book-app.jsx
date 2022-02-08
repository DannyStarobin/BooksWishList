import React from "react"


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

    render() {
        if (!books || !wishList) return <React.Fragment>loading...</React.Fragment>
            return (
           <section>

           </section>
        )
    }
}