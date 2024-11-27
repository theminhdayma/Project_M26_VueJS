<template>
  <div>
    <!-- <Header /> -->
    <br /><br /><br /><br /><br /><br />
    <div class="container">
      <h1 class="content">Danh sách Khóa học</h1>

      <!-- Introduction Section -->
      <div class="introduction">
        <p>Chào mừng bạn đến với danh sách các khóa học của chúng tôi. Chúng tôi cung cấp các khóa học luyện thi từ tiểu học đến trung học phổ thông để giúp bạn đạt được thành tích cao trong các kỳ thi.</p>
      </div>
      <br /><br />
      <div class="courses-grid">
        <div class="course-card">
          <img src="#" alt="Course Title" class="course-image" />
          <h2>Course Title</h2>
          <p>Course Description</p>
        </div>

        <div class="course-card">
          <img src="#" alt="Course Title" class="course-image" />
          <h2>Course Title</h2>
          <p>Course Description</p>
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination">
        <button class="pagination-button" disabled>Previous</button>

        <button class="pagination-button active">1</button>

        <button class="pagination-button">2</button>

        <button class="pagination-button" disabled>Next</button>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  .courses-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .course-card {
    width: 250px;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .course-card:hover {
    transform: scale(1.05);
  }
  
  .course-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  h2 {
    font-size: 18px;
    margin: 10px 0;
  }
  
  p {
    font-size: 14px;
    color: #666;
  }
  
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  
  .pagination button {
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    padding: 8px 12px;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .pagination button.active {
    background-color: #007bff;
    color: white;
  }
  
  .pagination button:hover {
    background-color: #007bff;
    color: white;
  }
  .content {
    font-size: 50px;
    font-weight: 600;
  }
  .introduction{
    font-size: 50px;
    font-weight: 600;
  }
</style>
