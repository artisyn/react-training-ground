import React from 'react';
import '../Components/Counter.scss';

class ClassCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timer: 0,
		};
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}
	increment() {
		this.setState({ timer: this.state.timer + 1 });
	}
	decrement() {
		this.setState({ timer: this.state.timer - 1 });
	}
	render() {
		return (
			<div className="counter__container">
				<h1 className="main__title">Class counter</h1>
				<h1>{this.state.timer}</h1>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement}>Decrement</button>
			</div>
		);
	}
}

export default ClassCounter;
