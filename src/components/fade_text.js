import React from 'react';
import '../style.css';
import { motion } from 'framer-motion';

const text_variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

class FadeText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
        };
        this.selector = React.createRef();
    }

    listenScrollEvent = e => {     
        var rect = this.selector.current.getBoundingClientRect();
        if(rect.top > 32 && rect.bottom < window.innerHeight){
            this.setState({isVisible: true});
        } else {
            this.setState({isVisible: false});
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        const text = this.props.text;
        const class_name = this.props.class_name;
        const { isVisible } = this.state;
        return (
            <motion.div
                ref={this.selector}
                className={class_name}
                animate={isVisible ? 'visible' : 'hidden'}
                variants={text_variants}
                transition={{ duration: 0.5 }}
            >
                <h2>{text}</h2>
            </motion.div>
        );
    }
}

export default FadeText
