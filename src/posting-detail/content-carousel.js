import React from 'react'
import Radium from 'radium'
import {
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton,
    Carousel
} from 'react-bootstrap'
import './content-carousel-style.css'

const carouselItemContainerStyle = {
    minHeight: "150px",
    padding: "15px"
}

const toggleButtonStyle = {
    border: "0",
    borderBottom: "0",
    backgroundColor: "#FFF",
    borderRadius: "0",
    backgroundImage: "unset",
    boxShadow: "unset"
}

const selectedToggleButtonStyle = {
    border: "0",
    borderBottom: "2px solid tomato",
    border: "0",
    backgroundColor: "#FFF",
    borderRadius: "0",
    backgroundImage: "unset",
    boxShadow: "unset",
    color: "tomato",
}

class ControlledCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            selectedIndex: 0,
            direction: null,
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            selectedIndex: selectedIndex,
            direction: e.direction
        });
    }

    handleChange(e) {
        this.setState({ selectedIndex: e });
    }

    render() {
        const { selectedIndex, direction } = this.state;

        return (
            <div className="unify-content-carousel">
                <div>
                    <ButtonToolbar>
                        <ToggleButtonGroup
                            type="radio"
                            name="options"
                            value={this.state.selectedIndex}
                            onChange={this.handleChange}>
                            <ToggleButton
                                style={this.state.selectedIndex === 0 ? selectedToggleButtonStyle : toggleButtonStyle} value={0}>Personas
                            </ToggleButton>
                            <ToggleButton
                                style={this.state.selectedIndex === 1 ? selectedToggleButtonStyle : toggleButtonStyle} value={1}>Data
                            </ToggleButton>
                            <ToggleButton
                                style={this.state.selectedIndex === 2 ? selectedToggleButtonStyle : toggleButtonStyle} value={2}>Affordance
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </div>
                <Carousel
                    activeIndex={selectedIndex}
                    direction={direction}
                    onSelect={this.handleSelect}
                >
                    <Carousel.Item>
                        <div style={carouselItemContainerStyle}>
                            The archetype of this persona is an educator and she represents a group of people who care to educate people.
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={carouselItemContainerStyle}>
                            To make a successful and innovative product, the designers need to determine the range of data to support the heuristic approach for design decisions. In addition, the designers should consider the affordance of the product to create a better and more natural user experience.
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={carouselItemContainerStyle}>
                            Our team decided to use the card layout, which is the type of presenting information with intuitive images. With some self-explanatory images and short descriptions with the buttons, the users will get what they want more easily without having to think.
                    </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Radium(ControlledCarousel)
