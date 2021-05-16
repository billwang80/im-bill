import '../../style.css';
import styled from 'styled-components';

// styling for the cards
const ProjectCardBox = styled.div`
    display: flex;
    height: 378px;
    width: 27%;
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 6%;
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
`

export default ProjectCardBox;
