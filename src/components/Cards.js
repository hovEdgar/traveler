import CardItem from "./CardItem";
import img1 from "../images/img-9.jpg"
import img2 from "../images/img-2.jpg"
import img3 from "../images/img-3.jpg"
import img4 from "../images/img-4.jpg"
import img5 from "../images/img-5.jpg"

import "./Cards.css";

const DUMMY_DATA_1 = [
    {
        src: img1, //todo change the path of image
        label: "Adventure",
        text: "Find out what a nature we have in Amazon",
        path: "/services"
    },
    {
        src: img2,
        label: "Relaxing",
        text: "Time to be a part of some peaceful place",
        path: "/services"
    }
];

const DUMMY_DATA_2 = [
    {
        src: img3,
        label: "Freedom",
        text: "Did you been in the center of the ocean? Astonishing",
        path: "/services"
    },
    {
        src: img4,
        label: "Hobbies",
        text: "It's a time to mixture your hobbies with your journey",
        path: "/services"
    },
    {
        src: img5,
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