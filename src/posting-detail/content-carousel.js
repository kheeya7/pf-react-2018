import React from 'react'
import {
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton,
    Carousel
} from 'react-bootstrap'

export default class ControlledCarousel extends React.Component {
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
            <div>
                <div>
                    <ButtonToolbar>
                        <ToggleButtonGroup
                            type="radio"
                            name="options"
                            value={this.state.selectedIndex}
                            onChange={this.handleChange}>
                            <ToggleButton value={0}>Personas</ToggleButton>
                            <ToggleButton value={1}>Data</ToggleButton>
                            <ToggleButton value={2}>Affordance</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </div>
                <Carousel
                    activeIndex={selectedIndex}
                    direction={direction}
                    onSelect={this.handleSelect}
                >
                    <Carousel.Item>
                        <div>
                            The archetype of this persona is an educator and she represents a group of people who care to educate people.
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            To make a successful and innovative product, the designers need to determine the range of data to support the heuristic approach for design decisions. In addition, the designers should consider the affordance of the product to create a better and more natural user experience.
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            Our team decided to use the card layout, which is the type of presenting information with intuitive images. With some self-explanatory images and short descriptions with the buttons, the users will get what they want more easily without having to think.
                    </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

