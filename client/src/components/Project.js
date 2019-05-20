import React, { Component } from 'react';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux';
import { getWebProjects } from '../action/webprojectActions'
import { getInterDisProjects } from '../action/interdisprojectActions'
import PropTypes from 'prop-types';

import '../css/project.css';

class Project extends Component {

    componentDidMount() {
        this.props.getWebProjects();
        this.props.getInterDisProjects();
    }

    render(){
        const {webprojects} = this.props.webprojects;
        const {interdisprojects} = this.props.interdisprojects;

        return(
            <Container id="main-proj-bdy">
            <h2 id = "head-project">Projects</h2>
            <div className="projsection">
            <h3 className="sectionhead">WedD Project</h3>
            <ListGroup>
                {webprojects.map(({_id, project_name, weblink, start_date, end_date, content, status}) => (
                    <ListGroup.Item key={_id}>
                        <Container>
                        <h3><a href={weblink} className="projectname">{project_name}</a></h3>
                        <i class='fas fa-suitcase'></i> <span className="status"> {status}</span><br></br>
                        <i class='fas fa-calendar'></i> <span className="duration"> {moment(start_date).format("DD MMM YYYY")} {'-'} {moment(end_date).format("DD MMM YYYY")} </span>
                        <hr></hr>
                        <p className="content">{content}</p>
                        </Container>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            </div>
            <div className="projsection">
            <h3 className="sectionhead">InterDisciplinary Projects</h3>
            <ListGroup>
                {interdisprojects.map(({_id, project_name, weblink, start_date, end_date, content, status}) => (
                    <ListGroup.Item key={_id}>
                        <Container>
                        <h3><a href={weblink} className="projectname">{project_name}</a></h3>
                        <i class='fas fa-suitcase'></i> <span className="status"> {status}</span><br></br>
                        <i class='fas fa-calendar'></i> <span className="duration"> {moment(start_date).format("DD MMM YYYY")} {'-'} {moment(end_date).format("DD MMM YYYY")} </span>
                        <hr></hr>
                        <p className="content">{content}</p>
                        </Container>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            </div>
            <div className="gap-gen"></div>
            </Container>
        )
    }
}

Project.propTypes = {
    getWebProjects: PropTypes.func.isRequired,
    webprojects: PropTypes.object.isRequired,
    getInterDisProjects: PropTypes.func.isRequired,
    interdisprojects: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
   webprojects: state.webprojects,
   interdisprojects: state.interdisprojects
});

export default connect(mapStateToProps, { getWebProjects, getInterDisProjects })(Project);