<template>
  <div class="Settings">
    <section class="Settings">
      <h2>Settings</h2>
      <div class="container">
        <div class="controle grid">
          <h3 class="h3">Site Control</h3>
          <p class="p">Control The Web Site If There Is Maintenance</p>
          <div class="box">
            <label>
              <input type="checkbox" class="toggle-check" checked />
              <div class="toggle-swich"></div>
            </label>
            <h4>Website Control</h4>
            <p>Open/Close Website And Type The Reason</p>
            <textarea placeholder="Close Message Content"></textarea>
          </div>
        </div>
        <div class="general grid">
          <h3 class="h3">General Info</h3>
          <p class="p">General Information About your Account</p>
          <form>
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />
            <label>Email</label>
            <input type="email" placeholder="o@nn.sa" />
            <span>Change</span>
          </form>
        </div>
        <div class="security grid">
          <h3 class="h3">Security Info</h3>
          <p class="p">Security Information About Your Account</p>
          <div class="box">
            <h4>Pasword</h4>
            <p>Last Change On 25/10/2021</p>
            <button>Change</button>
          </div>
          <div class="box">
            <h4>Two-Factor Authentication</h4>
            <p>Enable/Disable The Feature</p>
          </div>
          <div class="box">
            <h4>Devices</h4>
            <p>Check The Login Devices List</p>
            <button>Devices</button>
          </div>
        </div>
        <div class="social grid">
          <h3 class="h3">Social Info</h3>
          <p class="p">Social Media Information</p>
          <div class="twitter">
            <i class="fa-brands fa-twitter"></i>
            <p>twitter Username</p>
          </div>
          <div class="facebook">
            <i class="fa-brands fa-facebook-f"></i>
            <p>facebook Username</p>
          </div>
          <div class="youtube">
            <i class="fa-brands fa-youtube"></i>
            <p>youtube Username</p>
          </div>
          <div class="linkedin">
            <i class="fa-brands fa-linkedin"></i>
            <p>linkedin Username</p>
          </div>
        </div>
        <div class="widgets grid">
          <h3 class="h3">Widgets Controle</h3>
          <p class="p">Show/Hide Widgets</p>
          <div class="box">
            <input type="checkbox" checked />
            <label>Quick Draft</label>
          </div>
          <div class="box">
            <input type="checkbox" checked />
            <label>Yearly Targets</label>
          </div>
          <div class="box">
            <input type="checkbox" checked />
            <label>Ticket Statistics</label>
          </div>
          <div class="box">
            <input type="checkbox" checked />
            <label>Latest News</label>
          </div>
          <div class="box">
            <input type="checkbox" />
            <label>Latest Tasks</label>
          </div>
          <div class="box">
            <input type="checkbox" checked />
            <label>Top Search Items</label>
          </div>
        </div>
        <div class="manager grid">
          <h3 class="h3">Backup Manager</h3>
          <p class="p">Controle Backup Time And Location</p>
          <div class="top">
            <div class="box">
              <input
                type="radio"
                name="drone"
                id="dally"
                value="dally"
                checked
              />
              <label for="dally">Dally</label>
            </div>
            <div class="box">
              <input type="radio" name="drone" id="weekly" value="weekly" />
              <label for="weekly">Weekly</label>
            </div>
            <div class="box">
              <input type="radio" name="drone" id="monthly" value="monthly" />
              <label for="monthly">Monthly</label>
            </div>
          </div>
          <div class="bottom">
            <div class="box">
              <i class="fa-solid fa-bars-progress"></i>
              <p>Megaman</p>
            </div>
            <div class="box">
              <i class="fa-solid fa-bars-progress"></i>
              <p>Zero</p>
            </div>
            <div class="box">
              <i class="fa-solid fa-bars-progress"></i>
              <p>Sigma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section.Settings {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;
    .controle {
      .box {
        position: relative;
        padding: 5px 0;
        label {
          .toggle-check {
            -webkit-appearance: none;
            appearance: none;
            &:checked + .toggle-swich {
              background-color: #3d91ff;
              &::before {
                content: "\f00c";
                left: 30px;
                color: #3d91ff;
              }
            }
          }
          .toggle-swich {
            width: 50px;
            height: 20px;
            background-color: var(--c-g);
            border-radius: 10px;
            position: absolute;
            top: 10px;
            right: 0;
            transition: 0.3s;
            cursor: pointer;
            &::before {
              font-family: var(--fa-style-family-classic);
              position: absolute;
              font-weight: 900;
              border-radius: 50%;
              padding: 1px;
              top: 1px;
              background-color: var(--c-w);
              transition: 0.3s;
              width: 16px;
              height: 16px;
              text-align: center;
              line-height: 16px;
              content: "\f00d";
              left: 2px;
              color: var(--c-g);
            }
          }
        }
        textarea {
          padding: 10px;
          font-size: 10px;
          border: 1px solid var(--c-g);
          border-radius: 6px;
          resize: none;
          width: 100%;
          height: 100px;
        }
      }
    }
    .general {
      form {
        position: relative;
        label {
          font-size: 10px;
          margin: 10px 0;
          color: var(--c-p);
        }
        input[type="text"] {
          width: 100%;
        }
        input {
          padding: 5px;
          font-size: 10px;
          border: 1px solid var(--c-g);
          border-radius: 4px;
        }
        input[type="email"] {
          width: calc(100% - 50px);
          background-color: #f0f4f8;
        }
        span {
          color: #3d91ff;
          display: inline-block;
          font-size: 12px;
          width: 40px;
          position: absolute;
          right: 0;
        }
      }
    }
    .security {
      .box {
        position: relative;
        margin-top: 5px;
        padding-bottom: 10px;
        &:not(:first-of-type) {
          padding-top: 10px;
        }
        &:not(:last-of-type) {
          border-bottom: 1px solid var(--c-g);
        }
        &:nth-of-type(2)::before {
          content: "";
          background-color: #0075ff;
          width: 35px;
          height: 14px;
          position: absolute;
          border-radius: 10px;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &:nth-of-type(2)::after {
          font-family: "Font Awesome 5 Free";
          content: "\f00c";
          font-weight: 600;
          font-size: 10px;
          padding: 1px;
          position: absolute;
          color: #0075ff;
          background-color: var(--c-w);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          right: 2px;
        }
        button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          font-size: 12px;
          border: none;
          padding: 3px 6px;
          border-radius: 4px;
        }
        &:first-of-type {
          button {
            background-color: #0075ff;
            color: var(--c-w);
          }
        }
      }
    }
    .social {
      & > div {
        padding-left: 40px;
        margin: 10px 0;
        height: 30px;
        line-height: 30px;
        position: relative;
        background-color: var(--c-g);
        border: 1px solid #e9e9e9;
        border-radius: 4px;
        i {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          color: var(--c-p);
          border-right: 1px solid #e0e0e0;
        }
        p {
          margin: 0;
        }
      }
    }
    .widgets {
      .box {
        padding: 5px 0;
        font-size: 12px;
      }
    }
    .manager {
      .top {
        .box {
          padding: 5px 0;
          font-size: 12px;
        }
      }
      .bottom {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        .box {
          border: 1px solid #e0e0e0;
          padding: 10px;
          border-radius: 6px;
          text-align: center;
          width: 100%;
          &:hover {
            color: #0075ff;
            border-color: #0075ff;
            p {
              color: #0075ff;
            }
          }
        }
      }
    }
  }
  h4 {
    font-size: 12px;
  }
  p {
    font-size: 12px;
    color: var(--c-p);
    margin: 5px 0;
  }
}
</style>
