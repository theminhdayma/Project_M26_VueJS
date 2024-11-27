import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/user/Home.vue')
    },
    {
      path: '/signInUser',
      name: 'signInUser',
      component: () => import('../views/user/SignIn.vue')
    },
    {
      path: '/signUpUser',
      name: 'signUpUser',
      component: () => import('../views/user/SignUp.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/user/Contact.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/user/Courses.vue')
    },
    {
      path: '/exam',
      name: 'exam',
      component: () => import('../views/user/Exam.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/user/History.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/user/Profile.vue')
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('../views/user/Result.vue')
    },
    {
      path: '/subject',
      name: 'subject',
      component: () => import('../views/user/Subject.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/user/Test.vue')
    },
    {
      path: '/admin',
      redirect: "/admin/top",
      name: 'admin',
      component: () => import('../views/admin/Admin.vue'),
      children: [
        {
          path: "coursesManager",
          name: "coursesManager",
          component: () => import('../views/admin/CoursesMananger.vue')
        },
        {
          path: 'examManager',
          name: 'examManager',
          component: () => import('../views/admin/ExamMananger.vue')
        },
        {
          path: 'questionManager',
          name: 'questionManager',
          component: () => import('../views/admin/QuestionMananger.vue')
        },
        {
          path: 'subjectManager',
          name: 'subjectManager',
          component: () => import('../views/admin/SubjectMananger.vue')
        },
        {
          path: 'userManager',
          name: 'userManager',
          component: () => import('../views/admin/UserMananger.vue')
        },
        {
          path: 'top',
          name: 'top',
          component: () => import('../views/admin/Top.vue')
        },
      ]
    },
    {
      path: '/signInAdmin',
      name: 'signInAdmin',
      component: () => import('../views/admin/SignIn.vue')
    },
    {
      path: '/signUpAdmin',
      name: 'signUpAdmin',
      component: () => import('../views/admin/SignUp.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("../components/NotFound.vue"),
    },
  ]
});

export default router;
