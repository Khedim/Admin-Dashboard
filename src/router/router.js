import Vue from "vue";
import VueRouter from "vue-router";
import SettingsView from "../views/SettingsView.vue";
import DashboardView from "../views/DashboardView.vue";
import ProfileView from "../views/ProfileView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import CoursesView from "../views/CoursesView.vue";
import FreindsView from "../views/FreindsView.vue";
import FilesView from "../views/FilesView.vue";
import PlansView from "../views/PlansView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardView,
  },
  {
    path: "/Settings",
    name: "Settings",
    component: SettingsView,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: ProfileView,
  },
  {
    path: "/Projects",
    name: "Projects",
    component: ProjectsView,
  },
  {
    path: "/Courses",
    name: "Courses",
    component: CoursesView,
  },
  {
    path: "/Freinds",
    name: "Freinds",
    component: FreindsView,
  },
  {
    path: "/Files",
    name: "Files",
    component: FilesView,
  },
  {
    path: "/Plans",
    name: "Plans",
    component: PlansView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
