// Base Class: User
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Method to display user details
    getDetails() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

// Derived Class: Student (inherits from User)
class Student extends User {
    constructor(name, email, studentId) {
        super(name, email);  // Call User constructor
        this.studentId = studentId;
    }

    // Method for enrolling a student
    enroll() {
        console.log(`Student ${this.name} has enrolled.`);
    }

    // Override getDetails to include student ID
    getDetails() {
        console.log(`Name: ${this.name}, Email: ${this.email}, Student ID: ${this.studentId}`);
    }
}

// Derived Class: Instructor (inherits from User)
class Instructor extends User {
    constructor(name, email, instructorId) {
        super(name, email);  // Call User constructor
        this.instructorId = instructorId;
    }

    // Method for assigning grades
    assignGrade() {
        console.log(`Instructor ${this.name} assigned a grade.`);
    }

    // Override getDetails to include instructor ID
    getDetails() {
        console.log(`Name: ${this.name}, Email: ${this.email}, Instructor ID: ${this.instructorId}`);
    }
}

// Demonstration
// Create Student and Instructor Instances
const student1 = new Student('Alice Johnson', 'alice@example.com', 'S12345');
const instructor1 = new Instructor('Dr. Smith', 'smith@example.com', 'I67890');

// Call Methods to Demonstrate Functionality
student1.getDetails();      // Output: Name: Alice Johnson, Email: alice@example.com, Student ID: S12345
student1.enroll();          // Output: Student Alice Johnson has enrolled.

instructor1.getDetails();   // Output: Name: Dr. Smith, Email: smith@example.com, Instructor ID: I67890
instructor1.assignGrade();  // Output: Instructor Dr. Smith assigned a grade.
