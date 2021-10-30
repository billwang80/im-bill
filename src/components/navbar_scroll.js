import React from 'react';
import '../style.css';
import { motion } from 'framer-motion';

const navbar_variants = {
    hidden: {
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        //opacity: 0,
        duration: 400
    },
    visible: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        //opacity: 1,
        duration: 400
    }
}

class HoverNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animationClass: 'react_unhovered'
        }
    }

    // changeState(){
    //     var animationClass = cloneDeep(this.state.animationClass);

    //     if(this.state.animationClass === 'react_unhovered'){
    //         animationClass = 'react_chroma'
    //         this.setState({
    //             animationClass
    //         });
    //     } else {
    //         animationClass = 'react_unhovered'
    //         this.setState({
    //             animationClass
    //         });
    //     }
    // }

    // handleMouseEnter = (e) => {
    //     this.changeState();
    // }

    // handleMouseOut = (e) => {
    //     this.changeState();
    // }

    render() {
        return (
            <ul>
                <li><a href="#home" className={this.state.animationClass}>Home</a></li>
                <li><a href="#about" className={this.state.animationClass} >About</a></li>
                <li><a href="#projects_section" className={this.state.animationClass} >Projects</a></li>
                <li><a href="#contact" className={this.state.animationClass} >Contact</a></li>
            </ul>
        );
    }
}

class NavbarElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }

    listenScrollEvent = e => {        
        if(window.scrollY > 560 && (window.innerHeight + window.scrollY) < document.body.offsetHeight - 24){
            this.setState({isVisible: true});
        } else {
            this.setState({isVisible: false});
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        const { isVisible } = this.state;
        return (
            <motion.div
                className="navbar"
                animate={isVisible ? 'visible' : 'hidden'}
                variants={navbar_variants}
            >
                <HoverNav></HoverNav>
            </motion.div>
        );
    }
}

export default NavbarElement;
