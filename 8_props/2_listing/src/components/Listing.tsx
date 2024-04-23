export const Listing = ({ items = [] }) => {
    return (
        <div className="item-list">
            {items.map((item: {
                state: string; listing_id: number; url: string; MainImage: { url_570xN: string; }; title: string; currency_code: string; price: string; quantity: number;
            }) =>
                item.state === 'removed' ? <></> :
                    (<div className="item" key={item.listing_id}>
                        <div className="item-image">
                            <a href={item.url}>
                                <img src={item.MainImage.url_570xN} />
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}</p>
                            <p className="item-price">{item.currency_code === 'USD' ? '$' + item.price : item.currency_code === 'EUR' ? '€' + item.price : item.price + ' GBP'}</p>
                            <p className={item.quantity <= 10 ? "item-quantity level-low" :
                                item.quantity <= 20 ? "item-quantity level-medium" : "item-quantity level-high"}>{item.quantity} left</p>
                        </div>
                    </div>)
            )}
        </div>
    )
}

