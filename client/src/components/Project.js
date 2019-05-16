import React, { Component } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { connect } from 'react-redux';
import { getProjects } from '../action/projectActions'
import PropTypes from 'prop-types';

class Project extends Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render(){
        const {projects} = this.props.project;

        return(
            <Container>
            <ListGroup>
                {projects.map(({_id, project_name}) => (
                    <ListGroupItem key={_id}>
                        {project_name}
                    </ListGroupItem>
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