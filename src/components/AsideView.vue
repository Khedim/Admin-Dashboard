<template>
  <div class="aside">
    <aside>
      <h1>Elzero</h1>
      <ul>
        <router-link to="/" tag="li" exact>
          <i class="fa-solid fa-chart-bar"></i>
          <h2>Dashboard</h2>
        </router-link>
        <router-link to="/Settings" tag="li">
          <i class="fa-solid fa-gear"></i>
          <h2>Settings</h2>
        </router-link>
        <router-link to="/Profile" tag="li">
          <i class="fa-regular fa-user"></i>
          <h2>Profile</h2>
        </router-link>
        <router-link to="/Projects" tag="li">
          <i class="fa-solid fa-diagram-project"></i>
          <h2>Projects</h2>
        </router-link>
        <router-link to="/Courses" tag="li">
          <i class="fa-solid fa-graduation-cap"></i>
          <h2>Courses</h2>
        </router-link>
        <router-link to="/Freinds" tag="li">
          <i class="fa-regular fa-circle-user"></i>
          <h2>Freinds</h2>
        </router-link>
        <router-link to="/Files" tag="li">
          <i class="fa-regular fa-file"></i>
          <h2>Files</h2>
        </router-link>
        <router-link to="/Plans" tag="li">
          <i class="fa-regular fa-calendar"></i>
          <h2>Plans</h2>
        </router-link>
      </ul>
      <!-- <button @click="handelCurent">ccc</button> -->
    </aside>
  </div>
</template>

<script>
export default {
  name: "AsideView",
  props: {},
};
//
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
aside {
  router-link {
    text-decoration: none;
    color: #000;
  }
  position: fixed;
  background-color: var(--c-w);
  height: 100%;
  top: 0;
  left: 0;
  padding: 20px;
  width: 200px;
  @media (max-width: 767px) {
    width: 80px;
    padding: 0;
  }
  h1 {
    padding: 10px;
    position: relative;
    font-size: 22px;
    margin-bottom: 20px;
    text-align: center;
    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #000;
      border-radius: 50%;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      border: 2px solid var(--c-w);
      @media (max-width: 767px) {
        display: none;
      }
    }
    &::before {
      content: "";
      position: absolute;
      width: 50%;
      height: 2px;
      background-color: #000;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      @media (max-width: 767px) {
        display: none;
      }
    }
  }
  ul {
    list-style: none;
    li {
      padding: 10px;
      border-radius: 5px;
      color: #000;
      font-size: 14px;
      position: relative;
      cursor: pointer;
      @media (max-width: 767px) {
        width: fit-content;
        margin: 15px auto;
        padding: 18px 30px 10px 0px;
      }
      &.router-link-active {
        background-color: var(--c-g);
      }
      i {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        @media (max-width: 767px) {
          left: 50%;
          transform: translateX(-50%);
          top: 9px;
        }
      }
      h2 {
        margin-left: 20px;
        font-size: 14px;
        font-weight: normal;
        @media (max-width: 767px) {
          display: none;
        }
      }
    }
  }
}
</style>
