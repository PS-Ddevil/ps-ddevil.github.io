import React, { Component } from 'react';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux';
import { getProjects } from '../action/projectActions'
import PropTypes from 'prop-types';

import '../css/project.css';

class Project extends Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render(){
        const {projects} = this.props.project;

        return(
            <Container id="main-proj-bdy">
            <ListGroup>
                {projects.map(({_id, project_name, weblink, start_date, end_date}) => (
                    <ListGroup.Item key={_id}>
                        <h3>{project_name}</h3>
                        <a href={weblink}>Visit</a> <br></br>
                        {moment(start_date).format("DD MMM YYYY")} {'-'}
                        {moment(end_date).format("DD MMM YYYY")}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            </Container>
        )
    }
}

Project.propTypes = {
    getProjects: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
   project: state.project
});

export default connect(mapStateToProps, { getProjects })(Project);