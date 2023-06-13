let student1Courses = ['Math', 'English', 'Science'];
let student2Courses = ['Geography', 'Spanish', 'Science'];

function compareCourses (firstCourse, secondCourse){
   let course1, course2;
    for (i = 0; i < firstCourse.length; i++ ){
        course1 = firstCourse[i]
        
        for (let j = 0; j < secondCourse.length; j++) {
            course2 = secondCourse[j]  
            if ( course1 === course2)
                console.log (course1)
        }
    }
    }
compareCourses (student1Courses, student2Courses)