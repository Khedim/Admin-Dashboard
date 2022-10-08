<template>
  <div class="Profile">
    <section class="Profile">
      <h2>Profile</h2>
      <div class="top">
        <div class="profile">
          <img src="@/assets/imgs/avatar-06.png" alt="profile picture" />
          <h3>Osama Elzero</h3>
          <p>level 20</p>
          <span class="prog"></span>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <p>550 Rating</p>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                Generale Information<br />Full Name: <span>Osama Elzero</span>
              </td>
              <td><br />Gender: <span>Male</span></td>
              <td><br />Country: <span>Egypt</span></td>
              <td>
                <br /><span class="toggle"
                  ><i class="fa-solid fa-check"></i
                ></span>
              </td>
            </tr>
            <tr>
              <td>Personal Information<br />Email: <span>o@nn.sa</span></td>
              <td><br />Phone: <span>0.19123456789</span></td>
              <td><br />Date Of Birth: <span>25/10/1982</span></td>
              <td>
                <br /><span class="toggle"
                  ><i class="fa-solid fa-check"></i
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                Job Information<br />Title: <span>Full Stack Developer</span>
              </td>
              <td><br />Programming Language: <span>python</span></td>
              <td><br />Years Of Experience: <span>+15</span></td>
              <td>
                <br /><span class="toggle"
                  ><i class="fa-solid fa-check"></i
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                Billing Information<br />Payment Method: <span>Paypal</span>
              </td>
              <td><br />Email: <span>email@website.com</span></td>
              <td><br />Subscription: <span>Monthly</span></td>
              <td>
                <br /><span class="toggle"
                  ><i class="fa-solid fa-check"></i
                ></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bottom">
        <div class="left">
          <h3>My Skills</h3>
          <p>Complete Skills List</p>
          <div class="box">
            <button>HTML</button>
            <button>Pugjs</button>
            <button>HAML</button>
          </div>
          <div class="box">
            <button>CSS</button>
            <button>SASS</button>
            <button>Stylus</button>
          </div>
          <div class="box">
            <button>JavaScript</button>
            <button>TypeScript</button>
          </div>
          <div class="box">
            <button>Vuejs</button>
            <button>Reactjs</button>
          </div>
          <div class="box">
            <button>Jest</button>
            <button>Jasmine</button>
          </div>
          <div class="box">
            <button>PHP</button>
            <button>Laravel</button>
          </div>
          <div class="box">
            <button>Python</button>
            <button>Django</button>
          </div>
        </div>
        <div class="right">
          <h3>Latest Activities</h3>
          <p>Latest Activities Done By The User</p>
          <div class="box">
            <i class="fa-solid fa-shop"></i>
            <div>
              <div>
                <h4>Store</h4>
                <p>Bought The Mastering Python Course</p>
              </div>
              <div>
                <h4>18:10</h4>
                <p>Yesterday</p>
              </div>
            </div>
          </div>
          <div class="box">
            <i class="fa-solid fa-graduation-cap"></i>
            <div>
              <div>
                <h4>Academy</h4>
                <p>Got The PHP Certificate</p>
              </div>
              <div>
                <h4>16:05</h4>
                <p>Yesterday</p>
              </div>
            </div>
          </div>
          <div class="box">
            <i class="fa-solid fa-check"></i>
            <div>
              <div>
                <h4>Badges</h4>
                <p>Unlock The 10 Skills Badge</p>
              </div>
              <div>
                <h4>18:05</h4>
                <p>Yesterday</p>
              </div>
            </div>
          </div>
          <div class="box">
            <i class="fa-solid fa-shop"></i>
            <div>
              <div>
                <h4>Store</h4>
                <p>Bought The TypeScript Course</p>
              </div>
              <div>
                <h4>12:05</h4>
                <p>Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section.Profile {
  .top {
    background-color: var(--c-w);
    border-radius: 10px;
    padding: 10px;
    @media (min-width: 768px) {
      display: flex;
    }
    .profile {
      text-align: center;
      padding: 20px;
      min-width: 200px;
      img {
        width: 100px;
        border-radius: 50%;
        margin-bottom: 10px;
      }
      h3 {
        font-size: 16px;
      }
      p {
        font-size: 12px;
        color: var(--c-p);
        margin: 10px 0;
      }
      span {
        width: 100px;
        height: 5px;
        display: block;
        margin: 0 auto 10px auto;
        background-color: var(--c-g);
        border-radius: 10px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 70%;
          background-color: #1781ff;
          border-radius: 10px;
        }
      }
      i {
        color: #f59e0b;
      }
    }
    table {
      border-left: 1px solid #e0e0e0;
      border-spacing: 0;
      width: 100%;
      tbody {
        tr:not(:last-of-type) {
          td {
            border-bottom: 1px solid #e0e0e0;
          }
        }
        tr {
          @media (max-width: 767px) {
            display: flex;
            flex-direction: column;
          }
          td {
            padding-left: 10px;
            font-size: 12px;
            color: var(--c-p);
            line-height: 2;
            span {
              color: #000;
              &.toggle {
                display: block;
                height: 10px;
                width: 40px;
                background-color: var(--c-p);
                border-radius: 10px;
                position: relative;
                transition: 0.3s;
                i {
                  position: absolute;
                  left: 1px;
                  top: 1px;
                  font-size: 6px;
                  padding: 1px;
                  border-radius: 50%;
                  background-color: var(--c-w);
                }
                &.toggle.blue {
                  background-color: #1781ff;
                  i {
                    right: 1px;
                    left: auto;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .bottom {
    margin: 10px 0;
    @media (min-width: 768px) {
      display: flex;
      gap: 10px;
    }
    @media (min-width: 992px) {
      .right {
        flex-basis: 100% * 2;
      }
    }

    .right,
    .left {
      background-color: #fff;
      border-radius: 10px;
      padding: 10px;
      width: 100%;
      h3 {
        margin-top: 5px;
      }
      p {
        margin: 5px 0 5px;
        color: var(--c-p);
        font-size: 12px;
      }
      .box {
        &:not(:last-of-type) {
          border-bottom: 1px solid #e0e0e0;
        }
      }
    }
    .left {
      @media (max-width: 767px) {
        margin-bottom: 10px;
      }
      .box {
        padding: 10px 0;
        button {
          border: none;
          border-radius: 4px;
          padding: 3px 6px;
          font-size: 12px;
        }
      }
    }
    .right {
      .box {
        padding: 10px 0;
        display: flex;
        align-items: center;
        gap: 10px;
        i {
          font-size: 16px;
          padding: 10px;
          border-radius: 50%;
          color: var(--c-w);
          background-color: red;
        }
        &:first-of-type,
        &:last-of-type {
          i {
            background-color: #e03d5e;
          }
        }
        &:nth-of-type(2) {
          i {
            background-color: #bf2030;
          }
        }
        &:nth-of-type(3) {
          i {
            background-color: #1a92e4;
          }
        }
        & > div {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
