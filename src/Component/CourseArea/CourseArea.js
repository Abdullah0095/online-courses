import React from 'react';
import courseData from '../../CourseData/CourseData';
import { useState } from 'react';
import './CourseArea.css';
import CourseList from '../CourseList/CourseList';
import Cart from '../Cart/Cart';

const CourseArea = () => {
    console.log(courseData);
    const [courses, setCourses] = useState(courseData);

    const [cart, setCart] = useState([]);

    const addStudents = (courses) =>{
        
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
                <Cart cart={cart}></Cart>
            </div>
            
            
        </div>
    );
};

export default CourseArea;