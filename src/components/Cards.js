import CardItem from "./CardItem";

import "./Cards.css";

const DUMMY_DATA_1 = [
    {
        src: "/public/images/img-9.jpg",
        label: "Adventure",
        text: "Find out what a nature we have in Amazon",
        path: "/services"
    },
    {
        src: "images/img-2.jpg",
        label: "Relaxing",
        text: "Time to be a part of some peaceful place",
        path: "/services"
    }
];

const DUMMY_DATA_2 = [
    {
        src: "images/img-3.jpg",
        label: "Freedom",
        text: "Did you been in the center of the ocean? Astonishing",
        path: "/services"
    },
    {
        src: "images/img-4.jpg",
        label: "Hobbies",
        text: "It's a time to mixture your hobbies with your journey",
        path: "/services"
    },
    {
        src: "images/img-5.jpg",
        label: "Luxury",
        text: "Loving to live like kings it's not a crime",
        path: "/services"
    }
];

const Cards = () => {
    return (
        <div className="cards">
            <h1>The MAGIC on your way...</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {DUMMY_DATA_1.map(item => <CardItem
                            key={Math.random()}
                            src={item.src}
                            label={item.label}
                            text={item.text}
                            path={item.text}
                        />)}
                    </ul>
                    <ul className="cards__items">
                        {DUMMY_DATA_2.map(item => <CardItem
                            key={Math.random()}
                            src={item.src}
                            label={item.label}
                            text={item.text}
                            path={item.text}
                        />)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;