<template>
  <div class="nav">
    <nav>
      <div class="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search Keyword" />
      </div>
      <div class="user-info">
        <i class="fa-regular fa-bell"></i>
        <img src="@/assets/imgs/avatar-03.png" alt="avatar picture" />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavView",
  props: {},
};
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  width: calc(100% - 205px);
  background-color: var(--c-w);
  left: 205px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media (max-width: 767px) {
    width: calc(100% - 85px);
    left: 85px;
  }
  .search {
    font-size: 14px;
    font-weight: normal;
    i {
      position: relative;
      left: 30px;
    }
    input {
      padding: 5px 30px;
      border-radius: 5px;
      border: 1px solid rgb(162, 162, 162);
      width: 160px;
      &:focus {
        outline: none;
      }
    }
  }
  .user-info {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    i {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: red;
        border-radius: 50%;
        top: 0;
        right: 0;
      }
    }
    img {
      width: 25px;
      border-radius: 50%;
    }
  }
}
</style>
