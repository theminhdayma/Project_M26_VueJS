<template>
  <div>
    <!-- <Header /> -->
    <br /><br /><br /><br /><br />
    <main class="main-background">
      <div class="main-subject">
        <h1 id="title-exam">Thông tin đề thi</h1>
        <div class="perform">
          <div class="number-exam">
            <div id="number-exam">12345</div>
          </div>
          <div class="question-content">
            <div class="Info-detail">
              <img id="img-detail" src="#" alt="Exam Name" />
              <div class="Information-test">
                <h2 id="nameElement">Tên Đề Thi</h2>
                <div class="information">
                  <div class="access">
                    <i class="fas fa-calendar-days" />
                    <span id="sequenceElement">Số lượt thi: 100</span>
                  </div>
                  <div class="access">
                    <i class="fa-solid fa-circle-question" />
                    <span id="numQues">Số câu hỏi: 50</span>
                  </div>
                  <div class="access">
                    <i class="fas fa-clock" />
                    <span>Thời gian làm bài: 30 phút</span>
                  </div>
                </div>
                <div class="star">
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                  <i class="fas fa-star" />
                </div>
                <RouterLink to="/pages/user/test/12345" class="start-exam">
                  <i class="fas fa-user-clock" />
                  <b>Bắt Đầu Làm Bài</b>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <section class="list-subject">
          <h2 id="reference">Đề Thi Tham Khảo</h2>
          <div id="referenceSubject">
            <div class="exam-item">
              <img src="#" alt="Reference Exam" style="width: 250px; height: 150px;" />
              <div>
                <h3>Đề Thi Tham Khảo 1</h3>
                <p>Số câu hỏi: 50</p>
                <p>Số lượt thi: 100</p>
                <RouterLink to="/pages/user/exam/1" class="start-exam">Xem Chi Tiết</RouterLink>
              </div>
            </div>

            <div class="exam-item">
              <img src="#" alt="Reference Exam" style="width: 250px; height: 150px;" />
              <div>
                <h3>Đề Thi Tham Khảo 2</h3>
                <p>Số câu hỏi: 40</p>
                <p>Số lượt thi: 50</p>
                <RouterLink to="/pages/user/exam/2" class="start-exam">Xem Chi Tiết</RouterLink>
              </div>
            </div>
          </div>
        </section>

        <section class="list-comment">
          <h2>Đánh Giá</h2>
          <div class="comment-form">
            <textarea placeholder="Nhập bình luận của bạn"></textarea>
            <button>Thêm Bình Luận</button>
          </div>
          <button>Hiển thị tất cả bình luận</button>

          <div class="comment-item">
            <img src="" alt="User" />
            <div class="comment-content">
              <h3>Người dùng 1</h3>
              <p>Bình luận của người dùng 1</p>
              <span>12/10/2024</span>
              <div class="comment-actions">
                <button>Sửa</button>
                <button>Xóa</button>
              </div>
            </div>
          </div>

          <div class="comment-item">
            <img src="" alt="User" />
            <div class="comment-content">
              <h3>Người dùng 2</h3>
              <p>Bình luận của người dùng 2</p>
              <span>13/10/2024</span>
              <div class="comment-actions">
                <button>Sửa</button>
                <button>Xóa</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <!-- <Footer /> -->
  </div>
</template>

  
  <script setup lang="ts">
 
  </script>
  
  <style scoped>
  /* General Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #333;
}

.main-background {
  background-color: #f5f5f5;
  padding: 20px;
}

.main-subject {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
}

h1, h2, h3 {
  margin: 0;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 15px;
}

h3 {
  font-size: 18px;
}

/* Exam Details */
.perform {
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 20px;
  background-color: #d6d5d5;
  border-radius: 10px;
}

.number-exam {
  font-size: 24px;
  font-weight: bold;
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 5px;
  margin-right: 20px;
}

.question-content {
  flex-grow: 1;
}

.Info-detail {
  display: flex;
}

#img-detail {
  width: 300px;
  height: 200px;
  border-radius: 8px;
  margin-right: 20px;
}

.Information-test {
  max-width: 600px;
}

.star i {
  color: gold;
  margin-right: 2px;
}

.start-exam {
  display: inline-flex;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}

.start-exam:hover {
  background-color: #0056b3;
}

/* Reference Exams */
.list-subject {
  margin-top: 20px;
}

#referenceSubject {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.exam-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 10px;
  max-width: 300px;
  text-align: center;
}

.exam-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.exam-item button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.exam-item button:hover {
  background-color: #0056b3;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  list-style-type: none;
  padding: 0;
}

.pagination a {
  margin: 0 5px;
  text-decoration: none;
  color: #007bff;
}

.pagination .active {
  font-weight: bold;
  color: #0056b3;
}

/* Comments Section */
.comment-form {
  margin-bottom: 20px;
}

.comment-form textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 16px;
}

.comment-form button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.comment-form button:hover {
  background-color: #0056b3;
}

.comments-list {
  margin-top: 20px;
}

.comment-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.comment-item img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.comment-content {
  background: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
  flex: 1;
}

.comment-content p {
  margin: 5px 0;
}

.comment-content button {
  margin-right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #333;
}

.comment-content button:hover {
  color: #007bff;
}

.submit-menu {
  background-color: #FCBA2C;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
}

.c {
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}

.c.answered {
  background-color: #28a745; /* Green when answered */
  color: white;
}

.c.current {
  background-color: #007bff; /* Blue for current question */
  color: white;
}

.c:hover {
  background-color: #ddd;
}
/* exam.css */
.comment {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.comment-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}

.comment-content {
  flex: 1;
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 5px;
}

.comment-actions {
  display: flex;
  gap: 0.5rem;
}

.comment-form {
  margin-bottom: 1rem;
}

.comment-form textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 0.5rem;
}

.pagination {
  display: flex;
  list-style-type: none;
  gap: 0.5rem;
}

.pagination .active {
  font-weight: bold;
}

.start-exam {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #0070f3;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.start-exam:hover {
  background-color: #005bb5;
}

  </style>
  