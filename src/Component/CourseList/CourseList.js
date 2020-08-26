import React from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import './CourseList.css';

const CourseList = (props) => {
    console.log(props);
    return (
        <div className="course-detail">
            
            <div>
                <h2>{props.courses.category}</h2>
                <h3>{props.courses.name}</h3>
                <p>{props.courses.description}</p>
                <h4>Price: ${props.courses.price}</h4>
            </div>
            
                <button className="button" onClick={() => props.addStudents(props.courses)}>
                    <FontAwesomeIcon icon={faUserPlus} /> Enroll Now
                    </button>
            

        </div>
    );
};

export default CourseList;