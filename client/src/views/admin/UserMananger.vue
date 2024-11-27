<template>
  <div>
    <section class="attendance">
      <div class="attendance-list">
        <h1 class="manage-title">Quản lí tài khoản</h1>

        <!-- Tùy chọn sắp xếp -->
        <div class="sort-items">
          <h4>Sắp xếp theo:</h4>
          <select v-model="sortOrder" style="padding: 6px 16px; background-color: lightgrey; border-radius: 6px;">
            <option value="default">Mặc định - ID</option>
            <option value="smallBig">Từ nhỏ - lớn</option>
            <option value="bigSmall">Từ lớn - nhỏ</option>
          </select>
          <select v-model="sortName" style="padding: 6px 16px; background-color: lightgrey; border-radius: 6px;">
            <option value="default">Mặc định - Tên</option>
            <option value="az">Từ A - Z</option>
            <option value="za">Từ Z - A</option>
          </select>
        </div>

        <!-- Tìm kiếm người dùng -->
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Tìm kiếm tài khoản..."
          style="padding: 6px 16px; margin-bottom: 10px; border-radius: 6px;"
        />

        <!-- Bảng danh sách tài khoản -->
        <table class="account-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Tài Khoản</th>
              <th>Email</th>
              <th>Trạng Thái Khóa</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <!-- Duyệt qua mảng người dùng đã lọc và sắp xếp -->
            <tr v-for="(user, index) in filteredUsers" :key="user.id">
              <td>{{ index + 1 }}</td> <!-- Hiển thị số thứ tự -->
              <td>{{ user.nameAccount }}</td>
              <td>{{ user.email }}</td>
              <td>
                <span :style="{ color: user.lock === 'open' ? 'green' : 'red' }">
                  {{ user.lock === 'open' ? 'Mở khóa' : 'Đã khóa' }}
                </span>
              </td>
              <td>
                <button style="margin-right: 10px;" @click="viewUser(user)">Xem</button>
                <button :style="{ backgroundColor: user.lock === 'open' ? 'green' : 'red' }" @click="toggleLock(user)">
                  {{ user.lock === 'open' ? 'Khóa' : 'Mở khóa' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { onMounted, ref, computed } from 'vue';
import Swal from 'sweetalert2';

const store = useStore();
const searchTerm = ref('');
const sortOrder = ref('default');
const sortName = ref('default');

onMounted(() => {
  store.dispatch('users/fetchUsers');
});

const users = computed(() => store.state.users.data);

const filteredUsers = computed(() => {
  let sortedUsers = [...users.value];

  // Sắp xếp theo ID
  if (sortOrder.value === 'smallBig') {
    sortedUsers.sort((a, b) => a.id - b.id);
  } else if (sortOrder.value === 'bigSmall') {
    sortedUsers.sort((a, b) => b.id - a.id);
  }

  // Sắp xếp theo tên
  if (sortName.value === 'az') {
    sortedUsers.sort((a, b) => a.nameAccount.localeCompare(b.nameAccount));
  } else if (sortName.value === 'za') {
    sortedUsers.sort((a, b) => b.nameAccount.localeCompare(a.nameAccount));
  }

  return sortedUsers.filter(user =>
    user.nameAccount.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

// Hàm khóa và mở khóa tài khoản
const toggleLock = async (user:any) => {
  const action = user.lock === 'open' ? 'khóa' : 'mở khóa';
  
  const result = await Swal.fire({
    title: `Bạn có chắc chắn muốn ${action} tài khoản này?`,
    showCancelButton: true,
    confirmButtonText: 'Có',
    cancelButtonText: 'Không',
    icon: 'warning'
  });

  if (result.isConfirmed) {
    // Cập nhật trạng thái khóa cho người dùng
    user.lock = user.lock === 'open' ? 'locked' : 'open'; // Thay đổi trạng thái
    // Gọi API hoặc commit mutation để cập nhật trạng thái trong Vuex
    store.commit('users/setUsers', filteredUsers.value); // Cập nhật lại state trong Vuex
    Swal.fire('Thành công!', `Tài khoản đã được ${action} thành công.`, 'success');
  }
};

// Hàm xem thông tin người dùng
const viewUser = (user: any) => {
  // Thực hiện hành động xem thông tin người dùng
  console.log(user);
};

</script>



<style scoped>
.attendance {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.manage-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.sort-items {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.sort-items h4 {
  margin-right: 10px;
  color: #555;
}

input[type="text"] {
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px;
  transition: border-color 0.3s;
}

input[type="text"]:focus {
  border-color: #007BFF;
  outline: none;
}

.account-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.account-table th, .account-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.account-table th {
  background-color: #007BFF;
  color: white;
}

.account-table tbody tr:hover {
  background-color: #f1f1f1;
}

button {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #218838;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}


</style>
