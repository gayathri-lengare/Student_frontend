 
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 import { StudentService } from '../Services/student.service';


@Component({
  selector: 'app-student',
  imports: [CommonModule, FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent  implements OnInit{


   title = 'StudentManagementUI';

  students: any[] = [];

  student = {
    id: 0,
    name: '',
    email: '',
    age: 0,
    course: '',
  };

  isEditMode = false;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  // GET STUDENTS
  getStudents() {
    this.studentService.getStudents().subscribe({
      next: (response) => {
        this.students = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // ADD STUDENT
  addStudent() {
    this.studentService.addStudent(this.student).subscribe({
      next: () => {
        alert('Student Added Successfully');

        this.resetForm();

        this.getStudents();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // EDIT STUDENT
  editStudent(studentData: any) {
    this.isEditMode = true;

    this.student = {
      id: studentData.id,
      name: studentData.name,
      email: studentData.email,
      age: studentData.age,
      course: studentData.course,
    };
  }

  // UPDATE STUDENT
  updateStudent() {
    this.studentService.updateStudent(this.student.id, this.student).subscribe({
      next: () => {
        alert('Student Updated Successfully');

        this.resetForm();

        this.getStudents();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // DELETE STUDENT
  deleteStudent(id: number) {
    if (confirm('Are you sure to delete?')) {
      this.studentService.deleteStudent(id).subscribe({
        next: () => {
          alert('Student Deleted Successfully');

          this.getStudents();
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  // SAVE BUTTON
  saveStudent() {
    if (this.isEditMode) {
      this.updateStudent();
    } else {
      this.addStudent();
    }
  }

  // RESET FORM
  resetForm() {
    this.student = {
      id: 0,
      name: '',
      email: '',
      age: 0,
      course: '',
    };

    this.isEditMode = false;
  }
}