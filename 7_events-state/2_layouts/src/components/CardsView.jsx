import ShopCard from "./ShopCard";

export default function CardsView({ cards }) {
    return (
        <ul className="cards-view">
            {cards.map(card => (
                <ShopCard card={card} key={crypto.randomUUID()} />
            ))}
        </ul>
    );
}