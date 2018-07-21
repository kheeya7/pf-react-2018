import React from 'react'
import Carousel01 from '../../assets/carousel-01.jpg'
import Carousel02 from '../../assets/carousel-02.jpg'
import Carousel03 from '../../assets/carousel-03.jpg'
import { Carousel } from 'react-bootstrap'

export default class ControlledCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={Carousel01} />
                    <Carousel.Caption>
                        <h3>Project Yuri</h3>
                        <p>Talking robot who throw the interesting question for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={Carousel02} />
                    <Carousel.Caption>
                        <h3>Electronic Catalog System</h3>
                        <p>Created a high fidelity prototype catalog system for the UW Bothell IT depertment</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={Carousel03} />
                    <Carousel.Caption>
                        <h3>University of Washington</h3>
                        <p>
                            Graduated from Interactive Media Design
                  </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

