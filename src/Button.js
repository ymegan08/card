import React from 'react';
import './Button.css';
import audios from './audio/index';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {xoffSet: '0', yoffSet: '0', showCard: false, position: 'relative'};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let props = this?.props;
        let type = props?.type;
        if (type === 'NO') {
            let audio = Math.abs(Math.floor(Math.random() * 4))+1;
            new Audio(audios[audio]).play();
            let i = Math.abs(Math.floor(Math.random()*500))+1;
            let j = Math.abs(Math.floor(Math.random()*500))+1;
            this.setState({
                xoffSet: i,
                yoffSet: j,
                position: 'absolute',
            });
        } else {
            this.setState({
                showCard: (type === 'YES') ? true : false
            });
            props.sendDataToApp((type === 'YES') ? true : false);
        }
    }
    render() {
        let props = this?.props;
        let type = props?.type;
        let retBtn = props?.retBtn;
        let className = retBtn ? 'return movingButton' : 'movingButton';
        return (
            <button onClick={this.handleClick} className={className} style={{
                left: `${this.state.xoffSet}px`,
                top: `${this.state.yoffSet}px`,
                position: `${this.state.position}`
            }}>
                {type}
            </button>
        )
    }
}

export default Button;