import React from 'react';
import courseData from '../../CourseData/CourseData';
import { useState } from 'react';
import './CourseArea.css';
import CourseList from '../CourseList/CourseList';

const CourseArea = () => {
    console.log(courseData);
    const [courses, setCourses] = useState(courseData);

    const [cart, setCart] = useState([]);

    const addStudents = (courses) =>{
        console.log('add hosse', courses);
        const newCart = [...cart, courses];
        setCart(newCart);
    }
    return (
        <div className="course-area">
            <div className="course-list">
                
                {
                courses.map(data => <CourseList 
                    addStudents = {addStudents}
                    courses={data}>

                    </CourseList>)
                }
                
            </div>
            <div className="cart">
                <h1>Course Enrollment</h1>
                <h2>List of Courses: {cart.length}</h2>
            </div>
            
            
        </div>
    );
};

export default CourseArea;