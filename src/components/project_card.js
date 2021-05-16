import React from 'react';
import '../style.css';
import ProjectImage from './styled/project_image_style.js';
import ProjectCardBox from './styled/project_card_box_style.js';

const titleList = [
    "Valineups",
    "Feed Me",
    "Peakview",
    "Shop With Me",
    "E-Wall",
    "University"
]
const toolsList = [
    "Django React SQLite",
    "VueJS ExpressJS",
    "Django PostgreSQL",
    "Python Flask Firebase",
    "C RobotC EV3",
    "Java Greenfoot Adobe"
]
const descriptionList = [
    `App to help Valorant players perform difficult lineups. Filters lineups
    by agents, map and location. Mobile app coming soon.`,

    `Never be hungry again with Feed Me, an app which finds restaurants 
    or recipes based on your desired cuisine style or available ingredients.`,

    `Want to share your experiences with the world? Or read about the philosophies
    and cultures of others? Peakview is a blogging app that lets you share 
    about anything and everything.`,

    `Web App created during Hack the North to help you 
    find shopping buddies based on your TD transaction history. Finally, 
    you won't have buy skateboards by yourself anymore.`,

    `E-Wall is an eco-friendly proof of concept robot that collects and relocates 
    waste. The robot locates and sorts litter using ultrasonic sensors, placing it 
    in neat rows. We hope he'll fall in love one day.`,

    `Animated puzzle game designed to teach students 
    how to code. The player guides the hero using basic concepts like 
    functions and iteration. Used by over 1000 students during the Hour of Code.`
]
const urlList = [
    'https://github.com/jesseren/valineups',
    'https://devpost.com/software/feed-me-nji26q',
    'https://github.com/billwang80/peakview',
    '',
    'https://github.com/billwang80/Wall-E',
    ''
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

    handleUrl = (e) => {
        e.stopPropagation();
    };

    render() {
        return (
            <ProjectCardBox image = { this.props.index } onClick={this.toggleHover}>
                {this.state.isHovered ? 
                    <div>
                        <div class="project_title">{ titleList[ this.props.index ] }</div>
                        <p class="project_tools">{ toolsList[ this.props.index ] }</p>
                        <p class="description_p">{ descriptionList[ this.props.index ] }</p> 
                        <a class="project_url" onClick={this.handleUrl} href={ urlList[ this.props.index ] } target="_blank">{ urlList[ this.props.index ] }</a>
                    </div>
                    :
                    <ProjectImage image = { this.props.index }> </ProjectImage> 
                }
            </ProjectCardBox>
        );
    }
}

const keys = [0,1,2,3,4,5];
const listItems = keys.map((key) => {
    return (
        <ProjectCard 
            index = { key }
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