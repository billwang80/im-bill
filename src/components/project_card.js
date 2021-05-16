import React from 'react';
import '../style.css';
import ProjectImage from './styled/project_image_style.js';
import ProjectCardBox from './styled/project_card_box_style.js';

const titleList = [
    "Shop With Me",
    "Rate Alerts",
    "E-Wall",
    "Azure"
]
const toolsList = [
    "Python Flask Firebase",
    "Java Restful Android",
    "RobotC EV3",
    "Java Greenfoot Photoshop"
]
const descriptionList = [
    "Hack the North web app created using TD Da Vinci API to help you "
    + "find shopping buddies based on your transaction history. Finally, "
    + "you won't have to be sad and alone when buying Pokémon cards! "
    + "Now you'll just be sad!",

    "XE Rate Alerts will monitor your custom currency pairs. The midmarket rate is changing "
    + "all the time so once your target rate is hit, "
    + "you'll receive a notification so you won't miss out!",

    "E-Wall is an eco-friendly proof of concept robot that collects and relocates "
    + "waste. The robot locates and sorts litter using ultrasonic sensors, placing it "
    + "in neat rows.",

    "Cute animated sprites designed for a puzzle game that teaches students "
    + "how to code. The player guides the hero using basic concepts such as "
    + "functions and iteration. Used by over 1000 students during the Hour of Code."
]

class ProjectCard extends React.Component {
    constructor() {
        super();
        this.state = {
            isHovered: false
        };
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    render() {
        return (
            <ProjectCardBox image = { this.props.image } onMouseDown={this.toggleHover}>
                {this.state.isHovered ? 
                    <div>
                        <div class="project_title">{ titleList[ this.props.title] }</div>
                        <p class="project_tools">{ toolsList[ this.props.tools] }</p>
                        <p class="description_p">{ descriptionList[ this.props.description] }</p> 
                    </div>
                    :
                    <ProjectImage image = { this.props.image }> </ProjectImage> 
                }
            </ProjectCardBox>
        );
    }
}

const keys = [0,1,2,3];
const listItems = keys.map((key) => {
    return (
        <ProjectCard 
            image = { key } 
            title = { key }
            tools = { key }
            description = { key }
        />
    )

});

class ProjectContainer extends React.Component {
    render() {
        return ( 
            <ul class = "projects_section"> { listItems } </ul>
        );
    }
}

export default ProjectContainer;