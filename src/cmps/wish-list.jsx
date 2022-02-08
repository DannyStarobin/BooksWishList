import { WishPreview } from './wish-preview/jsx'

export function WishList(props) {
    if (!wishList.length) return <h1>Make a Wish!</h1>
    return (
        <ul className="wish-list">
            {wishList.map(wish, idx => <WishPreview key={idx} {...props} />)}

        </ul>
    )

}