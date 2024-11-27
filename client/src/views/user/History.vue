<template>
  <div>
    <!-- <Header /> -->
    <br /><br /><br /><br /> <br />
    <div class="content-container">
      <div class="private-list">
        <div class="person choose-private">Thông tin cá nhân</div>
        <div class="history-info choose-private">Lịch sử làm bài</div>
      </div>
      <div class="history-container">
        <h1 class="manage-title">Lịch sử làm bài</h1>
        <p>Không có lịch sử làm bài.</p>
        <div>
          <div class="sort-items">
            <h4>Sắp xếp theo:</h4>
            <select style="padding: 6px 16px; background-color: lightgrey; border-radius: 6px">
              <option value="asc">Mới nhất</option>
              <option value="desc">Cũ nhất</option>
            </select>
            <select style="padding: 6px 16px; background-color: lightgrey; border-radius: 6px">
              <option value="asc">Cao - Thấp</option>
              <option value="desc">Thấp - Cao</option>
            </select>
          </div>
          <table class="tablex">
            <thead>
              <tr>
                <th>Mã đề</th>
                <th>Tên đề</th>
                <th>Điểm</th>
                <th>Thời gian</th>
                <th>Ngày làm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><a href="#">Đề thi 1</a></td>
                <td>8.5</td>
                <td>30 phút</td>
                <td>01/01/2023</td>
              </tr>
              <tr>
                <td>2</td>
                <td><a href="#">Đề thi 2</a></td>
                <td>7.0</td>
                <td>40 phút</td>
                <td>02/01/2023</td>
              </tr>
            </tbody>
          </table>
          <div class="pagination">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script setup lang="ts">
// No dynamic content or logic
</script>

<style scoped>
.content-container {
  padding: 20px;
  background-color: #f5f5f5;
}

.private-list {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.person, .history-info {
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.choose-private {
  background-color: #ddd;
  font-weight: bold;
}

.history-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}

.manage-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.sort-items {
  margin-bottom: 20px;
}

.tablex {
  width: 100%;
  border-collapse: collapse;
}

.tablex th, .tablex td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.tablex th {
  background-color: #f2f2f2;
}
.pagination {
  margin-top: 20px;
  text-align: center;
}

.pagination button {
  padding: 6px 12px;
  margin: 0 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
  cursor: pointer;
}

.pagination button.active {
  background-color: #007bff;
  color: white;
  border: 1px solid #007bff;
}

.pagination button.prev-next {
  font-weight: bold;
}

</style>
