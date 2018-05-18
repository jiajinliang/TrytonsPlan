import React, {Component} from 'react';
import Courses from './Courses.js';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class courselist extends Component {

    render() {
        let courses = null;
        courses = <ListGroup style={{flex: '1 1 0', display: 'flex', flexDirection: 'column', maxHeight: '100%', overflowY: 'auto', width: '311px', marginLeft: '-1px'}}>
        <Courses courses={this.props.courses} courseHandler={this.props.courseHandler} text={"🗙"}/> </ListGroup>
        
        
        //const style = {height: '520px', padding: '0px', marginBottom: '0px', marginTop: '-1px'}
        return (
            <div style={{height: '100%', marginTop: '-1px'}}>
                {courses}
                
            </div>
            /*<ListGroup>
                <ListGroupItem>Test</ListGroupItem>
            </ListGroup>*/
        );
    }
}

export default courselist;