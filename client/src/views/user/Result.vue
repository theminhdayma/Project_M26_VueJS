<template>
  <div>
    <!-- <Header /> -->
    <br /><br /><br />
    <section class="section">
      <div class="left-container">
        <div class="result">
          <div class="mark" id="mark">N/A</div>
          <div class="info" id="infoExem">
            <h1>Exam Title</h1>
            <div class="quantity">
              <div class="exam-turn">
                <i class="fa-regular fa-calendar-check"></i>
                <span>1 lượt thi</span>
              </div>
              <div class="questions">
                <i class="fa-regular fa-circle-question"></i>
                <span>10 câu hỏi</span>
              </div>
              <div class="time">
                <i class="fa-regular fa-clock"></i>
                <span>60 phút</span>
              </div>
            </div>
            <div class="button">
              <a href="/pages/user/test/1">
                <button>Thi lại <i class="fa-solid fa-rotate-left"></i></button>
              </a>
            </div>
            <div class="next-test">
              <p>
                Bài tương tự:
                <a href="/pages/user/test/another-example">Đề thi thử TNTHPTQG môn Vật Lý năm 2023 (đề 1)</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="number correct">1</div>
        <div class="number incorrect">2</div>
      </div>
    </section>
    <br />
    <hr />
    <br />
    <div class="num-questions">
      <div class="question" id="question0">
        <b>1</b>
        <p>What is the capital of Vietnam?</p>
        <form class="radio" id="answerForm0">
          <div>
            <input type="radio" id="answer0" name="question0" value="0" readonly />
            <label for="answer0">Hanoi</label>
          </div>
        </form>
        <div class="reason">
          <p>GIẢI THÍCH</p>
          <p>Đáp án đúng: Hanoi</p>
        </div>
      </div>
    </div>

    <!-- Pagination Buttons -->
    <div class="pagination">
      <button class="prev-next" disabled>Previous</button>
      <button class="active">1</button>
      <button class="prev-next">Next</button>
    </div>

    <!-- <Footer /> -->
  </div>
</template>

  
  <script setup lang="ts">
 
  </script>
  
  <style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Noto Sans", sans-serif;
}

body {
  background-color: #ffc85b28;
}
/* header */
a {
  text-decoration: none;
}

.header {
  background-color: #fdb44b;
  width: 100%;
  height: 110px;
  display: flex;
  text-align: center;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.header-left {
  padding-top: 16px;
  width: 300px;
  height: 78px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.header-left p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: 600;
}

.header-mid {
  width: max-content;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#header-seach {
  width: 500px;
  height: 40px;
  position: relative;
  padding: 10px;
  border-radius: 8px;
  border: white;
}

.icon-seach {
  width: 50px;
  height: 34px;
  position: absolute;
  margin-left: -56px;
  margin-top: 2px;
  border-radius: 5px;
  border: white;
  background-color: #fdb44b;
}

.header-right {
  width: 700px;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.header-nav {
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}

.nav-item {
  font-size: 20px;
  color: black;
}

.nav-item:hover {
  color: #f5f5f5;
}

.header .dangnhap {
  width: 150px;
  height: 50px;
  border-radius: 30px;
  background-color: black;
  border: transparent;
  box-shadow: rgba(40, 40, 71, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: #f5f5f5;
}

.header .dangnhap:hover {
  background-color: #f8e796;
}

/* Section */
.section {
  display: flex;
  padding: 40px;
  justify-content: space-between;
  text-decoration: none;
  justify-content: center;
}

.section .right-container .number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: transparent !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ---------------------------------------------- */
.section .left-container {
  max-width: 100%;
}

.section .left-container .result {
  margin-top: 100px;
  width: 100%;
  display: flex;
  gap: 50px;
}

.section .left-container .result .mark {
  width: 300px;
  height: 300px;
  background: #f4511e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 10px;
}

.section .left-container .result .num-questions {
  width: 100%;
}
.question {
  padding: 0px 154px;
}

.question .reason p:nth-child(1) {
  color: #ff9700;
}

.section .left-container .result .info {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.info .quantity {
  display: flex;
  gap: 30px;
}

.info .button button {
  background: white;
  border-radius: 10px;
  color: gold;
  border: 1px solid gold;
  padding: 10px 20px;
  font-size: 18px;
}

.info .button button:hover {
  border: 1px solid white;
  color: #f5f5f5;
  background: gold;
  transition: 0.5s;
}

.section .right-container {
  display: grid;
  width: 300px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: max-content;
  gap: 10px;
}

.section .right-container .number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.next-test a:hover {
  color: #f4511e;
}

.answer1 {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}
/* footer----------------------- */
.footer {
  padding: 60px 154px 60px 154px;
  background-color: #fdb44b;
  font-family: Arial, Helvetica, sans-serif;
}

.footer .footer-content {
  display: flex;
  gap: 100px;
  margin-bottom: 60px;
}

.footer .footer-content .footer-left {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.footer-content .footer-left p {
  color: black;
}

.footer-content .footer-left .footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
}

.footer-content .footer-left .flogo-list {
  margin-top: -20px;
  font-size: 40px;
  display: flex;
  gap: 10px;
  color: black;
}

.footer-content .footer-right {
  width: 50%;
}

.footer-right .ftable {
  width: 100%;
}

.ftable .ftable-items .ftable-item {
  padding: 20px;
  text-align: center;
  color: black;
}

.ftable .ftable-items {
  color: black;
}

.footer .end {
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
}
/* test-result.css */

.section {
  display: flex;
  
  align-items: center;
  margin: 20px;
}

.left-container, .right-container {
  display: inline-block;
  width: 50%;
}

.result {
  text-align: left;
}

.mark {
  font-size: 36px;
  font-weight: bold;
  color: green;
}

.info {
  margin-top: 20px;
}

button {
  background-color: #fcbf2e;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 5px;
}

.pagination button {
  padding: 10px 15px;
  border: none;
  background-color: #f0f0f0;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 5px;
}

.pagination button.active {
  background-color: #4CAF50; /* Màu xanh cho nút active */
  color: white;
}

.pagination button:hover {
  background-color: #ddd; /* Màu khi hover */
}

.pagination button.prev-next {
  font-weight: bold;
}

.pagination button:disabled {
  background-color: #ccc; /* Màu cho nút disabled */
  cursor: not-allowed;
}


.num-questions {
  display: flex;
  flex-direction: column;
}

.question {
  margin-bottom: 20px;
}

.answer {
  margin-bottom: 10px;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: lightcoral;
}

.pagination button {
  margin: 5px;
}

.active {
  background-color: blue;
  color: white;
}

  </style>
  