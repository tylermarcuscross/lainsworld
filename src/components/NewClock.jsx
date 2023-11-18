import React from 'react';
import './NewClock.css';

class NewClock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.ticker = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  render() {
    const { time } = this.state;
    const formattedDate = `${time.getMonth() + 1}`.padStart(2, '0') + 
                          `-${time.getDate()}`.padStart(2, '0') + 
                          `-${time.getFullYear()}`;
    const formattedTime = time.toLocaleTimeString(); // This will give you the time with seconds

    return (
      <div className='newclock'>
        {formattedDate} {formattedTime}
      </div>
    );
  }
}

export default NewClock;
