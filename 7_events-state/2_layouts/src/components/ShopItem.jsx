export default function ShopItem({ item }) {
    return (
        <li className="list-view-item">
            <div className="item-img">
                <img src={item.img} alt="Кроссовки NIKE" />
            </div>
            <h2>{item.name}</h2>
            <div className="item-color">{item.color}</div>
            <div className="item-price">${item.price}</div>
            <button>add to cart</button>
        </li>
    );
}