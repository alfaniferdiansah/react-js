import React from "react";
import PropTypes from 'prop-types';

class ClassComponent extends React.Component {
    state = {
        value: 0
    }

    handleplus = () => {
        this.setState({value: this.state.value + 1})
    }

    handleminus = () => {
        if(this.state.value >0) {
            this.setState({value: this.state.value - 1})
        }
    }

    render () {
        return (
            <div>
                <h1>Welcome to my page</h1>
                <h2>Please Call me {this.props.nama} </h2>
                <button onClick={this.handleminus}>-</button>
                <span> {' '} {this.state.value} {' '} </span>
                <button onClick={this.handleplus}>+</button>
            </div>
        )
    }
}

ClassComponent.propTypes = {
    nama: PropTypes.string.isRequired
}

export default ClassComponent;