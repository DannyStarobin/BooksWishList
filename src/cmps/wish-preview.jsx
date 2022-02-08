export function WishList({ wish, onRemoveWish }) {
    return (
        <li>
            <h2>{wish.title}</h2>
            <button onClick={() => onRemoveWish(wish.title)}>X</button>
        </li>
    )
}