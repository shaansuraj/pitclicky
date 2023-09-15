import React from 'react';
import { Carousel } from 'react-bootstrap';
import { CarouselCompData } from './carousel-comp-data';
import './style.css';

export default function EditPDComp(props) {
    return (
        <div className="editpd-comp-main-container">
            <Carousel className="slider">
                {CarouselCompData.map((item, i) => (
                    <Carousel.Item
                        key={i}
                        style={{
                            transform: i === props.count ? `scale(4.5)` :
                                i === props.count - 1 || i === props.count + 1 ? `scale(2.5) rotate(${i === props.count - 1 ? '-' : ''}5.74deg)` :
                                    i === props.count - 2 || i === props.count + 2 ? `scale(1) rotate(${i === props.count - 2 ? '-' : ''}5.74deg)` : `scale(1)`,
                            margin: i === props.count ? '0 18%' : '0 3%',
                            animation: i === props.count - 2 || i === props.count + 2 ? 'identifier 2s infinite alternate' :
                                i === props.count - 1 || i === props.count + 1 ? 'identifier2 2s infinite alternate' : 'none',
                            animationTimingFunction: 'ease-in-out',
                        }}
                    >
                        <img src={item.imgURL} alt="" className="d-block w-100" />
                        <div className={i === props.count - 2 || i === props.count + 2 ? 'blurred-div' : 'not-blured-div'}></div>
                        <div
                            className="shadow-div"
                            style={{
                                opacity: i === props.count ? '0' : '0.15',
                                transform: i === props.count - 1 || i === props.count + 1 ? `rotate(${i === props.count - 1 ? '-' : '+'}5deg)` : i === props.count && `rotate(0deg)`,
                                transition: i === props.count ? '0.2s' : '2s',
                            }}
                        ></div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
