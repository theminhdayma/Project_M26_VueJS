<template>
  <div>
    <!-- <Header /> -->
    <br /><br /> <br /><br />
    <main class="main">
      <section class="course-header">
        <img src="" alt="Course Title" class="course-img" />
        <div class="course-details">
          <h1>Course Title</h1>
          <p>Course Description</p>
          <section class="content-first">
            <div class="subjects-list">
              <div class="subject-item active">
                <img src="" alt="Subject Name" />
                <p>Subject Name</p>
              </div>
              <div class="subject-item">
                <img src="" alt="Subject Name" />
                <p>Subject Name</p>
              </div>
            </div>
          </section>
          <div id="horizontal"></div>
          <nav class="nav-choice">
            <h1>Độ khó</h1>
            <ul class="ul-choice">
              <li class="li-choice active">Level 1</li>
              <li class="li-choice">Level 2</li>
              <li class="li-choice">Level 3</li>
              <li class="li-choice">Level 4</li>
              <li class="li-choice">Level 5</li>
            </ul>
          </nav>
        </div>
      </section>
      <hr />
      <h1 class="a1">Danh sách các đề thi</h1>
      <div id="examList" class="list-exam">
        <div class="exam-item">
          <img src="" alt="Exam Name" />
          <div>
            <h2>Exam Name</h2>
            <p>Exam Description</p>
          </div>
        </div>
        <div class="exam-item">
          <img src="" alt="Exam Name" />
          <div>
            <h2>Exam Name</h2>
            <p>Exam Description</p>
          </div>
        </div>
        <p>No exams available for the selected subject and level.</p>
      </div>

      <section class="choose-list" style="margin-top: 100px;">
        <div class="pagination">
          <button type="button" class="btn" disabled>
            <!-- <IonIcon :icon="chevronBackOutline" /> -->
            <span>Trang trước</span>
          </button>
          <button type="button" class="page-number active">1</button>
          <button type="button" class="page-number">2</button>
          <button type="button" class="btn">
            <span>Trang sau</span>
            <!-- <IonIcon :icon="chevronForwardOutline" /> -->
          </button>
        </div>
      </section>
    </main>
    <!-- <Footer /> -->
  </div>
</template>

  
  <script setup lang="ts">

  </script>
  
  <style scoped>
/* Global Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

/* Header and Footer Styles */
header, footer {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
}

/* Main Section */
.main {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Course Header */
.course-header {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  margin-bottom: 40px;
}

.course-img {
  width: 600px;
  height: 500px;
  object-fit: cover;
  border-radius: 8px;
}

.course-details {

  flex: 1;
}

.course-details h1 {
  font-size: 40px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.course-details p {
  font-size: 20px;
  color: #666;
}

/* Subjects List */
.content-first {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.subjects-list {
  display: flex;
  align-items: center;
  gap: 30px;
}
.a1{
  font-size: 40px;
  font-weight: 600;
}
.subject-item {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.subject-item:hover,
.subject-item.active {
  background: #f1f1f1;
  border-color: #ccc;
}

.subject-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.subject-item p {
  margin: 0;
  font-size: 16px;
}

/* Navigation for Difficulty Levels */
.nav-choice {
  margin: 40px 0;
}

.nav-choice h1 {
  font-size: 20px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.ul-choice {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.ul-choice li {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ul-choice li:hover,
.ul-choice li.active {
  background-color: #0056b3;
}

/* Exam List */
.list-exam {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.exam-item {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 800px;
}

.exam-item img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.exam-item div {
  flex: 1;
}

.exam-item h2 {
  font-size: 18px;
  color: #333;
  margin: 0;
}

.exam-item p {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}

/* Pagination Buttons */
.next-Pages {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 20px;
}

.btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.btn IonIcon {
  margin: 0 5px;
}
/* Pagination Container */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

/* Page Number Button */
.page-number {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

/* Active Page Number */
.page-number.active {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}

/* Page Number Button Hover */
.page-number:hover {
  background-color: #e0e0e0;
}

/* Previous and Next Buttons */
.btn {
  background-color: #007bff;
  border: 1px solid #007bff;
  color: #fff;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, border-color 0.3s;
}

/* Disabled Button */
.btn:disabled {
  background-color: #d6d6d6;
  border-color: #d6d6d6;
  cursor: not-allowed;
}

/* Button Hover */
.btn:hover {
  background-color: #0056b3;
  border-color: #004080;
}

/* Button Icon */
.btn .ion-icon {
  margin-right: 5px;
}

/* Ensure Button and Page Number Align */
.btn,
.page-number {
  display: inline-flex;
  align-items: center;
}

  </style>
  