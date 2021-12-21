import "./Card.css";

export function Card(props) {
    return(
        <div className="Card">
            <CardHeader price={props.price} color={props.color}/>
            <CardPrice price={props.price} color={props.color}/>
            <CardSpeed speed={props.speed} />
            <CardTraffic /> 
        </div>
    )
}

function CardHeader(props) {
    // let innerText = {'Безлимитный ${props.price}'}
    return(
    //   <p>Безлимитный {${props.price}}</p>
    <p className={props.color}>Безлимитный {props.price}</p>
    )
}

function CardPrice(props) {
    return(
        <p className={props.color}>{props.price} руб/мес</p>
    )
}

function CardSpeed(props) {
    return(
        <p>До {props.speed} МБит/сек</p>
    )
}

function CardTraffic() {
    return(
        <p>Объем включенного трафика не ограничен</p>
    )
}
