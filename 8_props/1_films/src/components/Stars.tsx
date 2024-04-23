import { Star } from './Star'

export const Stars = (props: { count: number}) => {
    let { count } = props;
    if (count < 1 || count > 5 || !Number.isInteger(count)) {
        return
    };

    let stars = [];
    for (let i = 1; i <= count; i++) {
        stars.push(<Star />)
    };

    return (
        <ul className="card-body-stars u-clearfix">
            {stars.map(star => (<li key={crypto.randomUUID()}>{star}</li>))}
        </ul>
    )
}
