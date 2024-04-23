import ShopItem from "./ShopItem";

export default function ListView({ items }) {
    return (
        <ul className="list-view">
            {items.map(item => (
                <ShopItem item={item} key={crypto.randomUUID()} />
            ))}
        </ul>
    );
}