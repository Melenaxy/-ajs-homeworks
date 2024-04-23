export default function ShopCard({ card }) {
    return (
        <li className="card">
            <h2 className="item-name">{card.name}</h2>
            <div className="item-color">{card.color}</div>
            <div className="card-img">
                <img src={card.img} alt="Кроссовки NIKE" />
            </div>
            <div className="footer">
                <div className="price">${card.price}</div>
                <button>add to cart</button>
            </div>
        </li>
    );
}