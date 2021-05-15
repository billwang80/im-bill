import '../style.css';
import styled from 'styled-components';

// styling for the cards
const ProjectCardBox = styled.div`
    display: flex;
    height: 378px;
    width: 540px;
    margin-left: 128px;
    margin-right: 128px;
    border-radius: 10px;
    box-shadow: 0px 16px 32px 3px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 16px 32px 3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 16px 32px 3px rgba(0, 0, 0, 0.2);
    position: relative;
    top: 0;
    transition: top ease 0.5s;

    &:hover {
        top: -10px;
        box-shadow: 0px 16px 48px 3px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 0px 16px 48px 3px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0px 16px 48px 3px rgba(0, 0, 0, 0.3);
    }

    margin-bottom: ${props => {
        // if it is the last one, decrease margin
        if(props.image === 4) return '196px';
        return '164px'
    }};
    align-self: ${props => {
        if (props.image % 2 == 1) return 'flex-start'
        return 'flex-end'
    }};
`

export default ProjectCardBox;
