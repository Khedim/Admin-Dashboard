<template>
  <div class="Dashboard">
    <section class="Dashboard curent">
      <h2>Dashboard</h2>
      <div class="top">
        <div class="welcom">
          <img
            class="work"
            src="@/assets/imgs/work-steps.png"
            alt="work space picture"
          />
          <h3>Welcom</h3>
          <p>Elzero</p>
          <img
            class="profile"
            src="@/assets/imgs/avatar-02.png"
            alt="profile picture"
          />
          <div class="info">
            <div>
              <h4>Osama Elzero</h4>
              <p>Devloper</p>
            </div>
            <div>
              <h4>80</h4>
              <p>Projects</p>
            </div>
            <div>
              <h4>$8500</h4>
              <p>Earned</p>
            </div>
          </div>
          <button>Profile</button>
        </div>
        <div class="draft grid">
          <h3 class="h3">Quick Draft</h3>
          <p class="p">Write A Draft For Your Ideas</p>
          <input type="text" placeholder="Title" />
          <textarea placeholder="Your Thought"></textarea>
          <button>Save</button>
        </div>
        <div class="target grid">
          <h3 class="h3">Yearly Target</h3>
          <p class="p">Targets Of The Year</p>
          <div class="mony">
            <i class="fa-solid fa-dollar-sign"></i>
            <p>Mony</p>
            <h4>$20.000</h4>
            <div>
              <span style="width: 80%" data-span="80%"></span>
            </div>
          </div>
          <div class="projects">
            <i class="fa-solid fa-code"></i>
            <p>Projects</p>
            <h4>24</h4>
            <div>
              <span style="width: 55%" data-span="55%"></span>
            </div>
          </div>
          <div class="team">
            <i class="fa-solid fa-user"></i>
            <p>Team</p>
            <h4>12</h4>
            <div>
              <span style="width: 75%" data-span="75%"></span>
            </div>
          </div>
        </div>
        <div class="ticket grid">
          <h3 class="h3">Ticket Statistecs</h3>
          <p class="p">Everything About Support Ticket</p>
          <div class="box">
            <div class="total">
              <i class="fa-solid fa-list"></i>
              <h4>2500</h4>
              <p>Total</p>
            </div>
            <div class="pending">
              <i class="fa-solid fa-spinner"></i>
              <h4>500</h4>
              <p>Pending</p>
            </div>
            <div class="closed">
              <i class="fa-solid fa-check"></i>
              <h4>1900</h4>
              <p>Closed</p>
            </div>
            <div class="deleted">
              <i class="fa-solid fa-xmark"></i>
              <h4>100</h4>
              <p>Deleted</p>
            </div>
          </div>
        </div>
        <div class="news grid">
          <h3 class="h3">Latest News</h3>
          <div class="box">
            <img src="@/assets/imgs/gallery-01.png" alt="" />
            <h4>Created SASS Section</h4>
            <p>New SASS Examples & Tutorials</p>
            <button>3 Days Ago</button>
          </div>
          <div class="box">
            <img src="@/assets/imgs/gallery-02.png" alt="" />
            <h4>Changed the Design</h4>
            <p>A Brand New Website Design</p>
            <button>5 Days Ago</button>
          </div>
          <div class="box">
            <img src="@/assets/imgs/gallery-03.jpg" alt="" />
            <h4>Team Increased</h4>
            <p>3 Devlopers Joined The Team</p>
            <button>7 Days Ago</button>
          </div>
          <div class="box">
            <img src="@/assets/imgs/gallery-04.png" alt="" />
            <h4>Added Payment Gateways</h4>
            <p>Many Payment Gateways Added</p>
            <button>9 Days Ago</button>
          </div>
        </div>
        <div class="taskes grid">
          <h3 class="h3">Latest Taskes</h3>
          <div class="box">
            <h4>Record One New Video</h4>
            <p>Record Python Create Exe Project</p>
            <i class="fa-regular fa-trash-can"></i>
          </div>
          <div class="box">
            <h4>Write Article</h4>
            <p>Write Low Level Vs High Level Language</p>
            <i class="fa-regular fa-trash-can"></i>
          </div>
          <div class="box">
            <h4>Finish Project</h4>
            <p>Publish Academy Programming Project</p>
            <i class="fa-regular fa-trash-can"></i>
          </div>
          <div class="box blur">
            <h4>Attend The Meeting</h4>
            <p>Attend The Project Business Analysis Meeting</p>
            <i class="fa-regular fa-trash-can"></i>
          </div>
          <div class="box">
            <h4>Finish Lesson</h4>
            <p>Finish Teaching Flex Box</p>
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </div>
        <div class="items grid">
          <h3 class="h3">Top Search Items</h3>
          <div class="box">
            <div class="keyword">
              <h4>Keyword</h4>
              <p>Programing</p>
              <p>JavaScript</p>
              <p>PHP</p>
              <p>Code</p>
              <p>Design</p>
              <p>Logic</p>
            </div>
            <div class="search">
              <h4>Search Count</h4>
              <p>220</p>
              <p>180</p>
              <p>160</p>
              <p>145</p>
              <p>110</p>
              <p>95</p>
            </div>
          </div>
        </div>
        <div class="uploads grid">
          <h3 class="h3">Latest UPloads</h3>
          <div class="box">
            <i class="fa-regular fa-file-pdf"></i>
            <h4>My-File.pdf</h4>
            <p>Elzero</p>
            <button>2.9mb</button>
          </div>
          <div class="box">
            <i class="fa-regular fa-file-pdf"></i>
            <h4>My-Video-File.pdf</h4>
            <p>Admin</p>
            <button>4.9mb</button>
          </div>
          <div class="box">
            <i class="fa-regular fa-file-pdf"></i>
            <h4>My-Psd-File.pdf</h4>
            <p>Osama</p>
            <button>4.5mb</button>
          </div>
          <div class="box">
            <i class="fa-regular fa-file-pdf"></i>
            <h4>My-Zip-File.pdf</h4>
            <p>User</p>
            <button>8.9mb</button>
          </div>
          <div class="box">
            <i class="fa-regular fa-file-pdf"></i>
            <h4>My-Dell-File.pdf</h4>
            <p>Admin</p>
            <button>4.9mb</button>
          </div>
          <div class="box">
            <i class="fa-regular fa-file-pdf"></i>
            <h4>My-Eps-File.pdf</h4>
            <p>Designer</p>
            <button>8.9mb</button>
          </div>
        </div>
        <div class="progres grid">
          <h3 class="h3">Last Project Progres</h3>
          <p>Got The Project</p>
          <p>Sterted The Project</p>
          <p>The Project Abuot To Finish</p>
          <p class="now">Test The Project</p>
          <p class="next">Finish The Project & Get Mony</p>
        </div>
        <div class="reminder grid">
          <h3 class="h3">Reminders</h3>
          <div class="box">
            <h4>Check My Tasks List</h4>
            <p>28/09/2022 - 12:00am</p>
          </div>
          <div class="box">
            <h4>Check My Projects</h4>
            <p>26/10/2022 - 12:00am</p>
          </div>
          <div class="box">
            <h4>Call All clients</h4>
            <p>05/11/2022 - 12:00am</p>
          </div>
          <div class="box">
            <h4>Finish The Development Workshop</h4>
            <p>20/12/2022 - 12:00am</p>
          </div>
        </div>
        <div class="post grid">
          <h3 class="h3">Latest Post</h3>
          <div class="title">
            <img src="@/assets/imgs/avatar-02.png" alt="profile picture" />
            <h4>Osama Elzero</h4>
            <p>About 3 Hours Ago</p>
          </div>
          <div class="core">
            <p>
              You Can Fool All Of The People Some Of The Time, And Some Of The
              People All Of The Time, But You Can't Fool All Of The People All
              Of The Time.
            </p>
          </div>
          <div class="foot">
            <div>
              <i class="fa-regular fa-heart"></i>
              <span>1.8K</span>
            </div>
            <div>
              <i class="fa-regular fa-comments"></i>
              <span>500</span>
            </div>
          </div>
        </div>
        <div class="media grid">
          <h3 class="h3">Social Media Stats</h3>
          <div class="twitter">
            <i class="fa-brands fa-twitter"></i>
            <p>90K Followers</p>
            <button>Follow</button>
          </div>
          <div class="facebook">
            <i class="fa-brands fa-facebook-f"></i>
            <p>2M Like</p>
            <button>Like</button>
          </div>
          <div class="youtube">
            <i class="fa-brands fa-youtube"></i>
            <p>1M Subs</p>
            <button>Subscribe</button>
          </div>
          <div class="linkedin">
            <i class="fa-brands fa-linkedin"></i>
            <p>70K Followers</p>
            <button>Follow</button>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="projects">
          <h3 class="h3">Projects</h3>
          <div class="table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Finish Date</th>
                  <th>Client</th>
                  <th>Price</th>
                  <th>Team</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ministry Wikipedia</td>
                  <td>10 May 2022</td>
                  <td>Ministry</td>
                  <td>$5300</td>
                  <td>
                    <img
                      src="@/assets/imgs/avatar-01.png"
                      alt="avatar picture"
                    />
                    <img
                      src="@/assets/imgs/avatar-03.png"
                      alt="avatar picture"
                    />
                    <img
                      src="@/assets/imgs/avatar-05.png"
                      alt="avatar picture"
                    />
                    <img
                      src="@/assets/imgs/avatar-06.png"
                      alt="avatar picture"
                    />
                  </td>
                  <td>
                    <button class="pending">Pending</button>
                  </td>
                </tr>
                <tr>
                  <td>Elzero Shop</td>
                  <td>10 Oct 2021</td>
                  <td>Elzero Company</td>
                  <td>$1500</td>
                  <td>
                    <img
                      src="@/assets/imgs/avatar-01.png"
                      alt="avatar picture"
                    />
                    <img
                      src="@/assets/imgs/avatar-03.png"
                      alt="avatar picture"
                    />
                    <img
                      src="@/assets/imgs/avatar-05.png"
                      alt="avatar picture"
                    />
                  </td>
                  <td>
                    <button class="in-prog">In Progres</button>
                  </td>
                </tr>
                <tr>
                  <td>Bouba App</td>
                  <td>05 Sep 2021</td>
                  <td>Bouba</td>
                  <td>$800</td>
                  <td>
                    <img
                      src="@/assets/imgs/avatar-01.png"
                      alt="avatar picture"
                    />
                    <img
                      src="@/assets/imgs/avatar-03.png"
                      alt="avatar picture"
                    />
                  </td>
                  <td>
                    <button class="complete">Completed</button>
                  </td>
                </tr>
                <tr>
                  <td>Mohamed Website</td>
                  <td>22 May 2021</td>
                  <td>Mohamed</td>
                  <td>$600</td>
                  <td>
                    <img
                      src="@/assets/imgs/avatar-01.png"
                      alt="avatar picture"
                    />
                    <img
                      src="@/assets/imgs/avatar-03.png"
                      alt="avatar picture"
                    />
                  </td>
                  <td>
                    <button class="complete">Completed</button>
                  </td>
                </tr>
                <tr>
                  <td>Sayed Website</td>
                  <td>24 May 2021</td>
                  <td>Sayed</td>
                  <td>$300</td>
                  <td>
                    <img
                      src="@/assets/imgs/avatar-01.png"
                      alt="avatar picture"
                    />
                    <img
                      src="@/assets/imgs/avatar-03.png"
                      alt="avatar picture"
                    />
                  </td>
                  <td>
                    <button class="reject">Rejected</button>
                  </td>
                </tr>
                <tr>
                  <td>Arena Application</td>
                  <td>01 Mar 2021</td>
                  <td>Arena Company</td>
                  <td>$2600</td>
                  <td>
                    <img
                      src="@/assets/imgs/avatar-01.png"
                      alt="avatar picture"
                    />
                    <img
                      src="@/assets/imgs/avatar-03.png"
                      alt="avatar picture"
                    />
                    <img
                      src="@/assets/imgs/avatar-05.png"
                      alt="avatar picture"
                    />
                    <img
                      src="@/assets/imgs/avatar-06.png"
                      alt="avatar picture"
                    />
                  </td>
                  <td>
                    <button class="complete">Completed</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section.Dashboard {
  .top {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;
    .welcom {
      position: relative;
      background-color: var(--c-w);
      border-radius: 6px;
      overflow: hidden;
      .work {
        position: absolute;
        width: 90px;
        height: 70px;
        top: 20px;
        right: 20px;
      }
      h3 {
        background-color: var(--c-g);
        padding: 20px 20px 0;
      }
      & > p {
        background-color: var(--c-g);
        padding: 0 20px 40px;
        color: #777;
        font-size: 12px;
      }
      .profile {
        width: 50px;
        border-radius: 50%;
        position: relative;
        top: -25px;
        left: 25px;
        border: 3px solid var(--c-w);
        outline: 1px solid #dadada;
      }
      .info {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top: 1px solid #f1f1f1;
        border-bottom: 1px solid #f1f1f1;
        padding: 20px 0;
        div {
          text-align: center;
          h4 {
            font-size: 14px;
            font-weight: normal;
          }
          p {
            font-size: 12px;
            color: #777;
            margin-top: 5px;
          }
        }
      }
      button {
        display: block;
        background-color: #0066ff;
        color: var(--c-w);
        border: none;
        margin: 10px 10px 10px auto;
        padding: 3px 6px;
        border-radius: 5px;
      }
    }
    .draft {
      input,
      textarea {
        background-color: var(--c-g);
        border: none;
        width: 100%;
        padding: 5px;
        border-radius: 6px;
        margin-bottom: 10px;
        font-size: 12px;
        &:focus {
          outline: none;
        }
      }
      textarea {
        height: 100px;
      }
      button {
        display: block;
        background-color: #0066ff;
        color: var(--c-w);
        border: none;
        margin: 10px 0 10px auto;
        padding: 3px 6px;
        border-radius: 5px;
      }
    }
    .target {
      .mony,
      .projects,
      .team {
        margin: 0 0 10px 50px;
        position: relative;
        padding: 5px;
        i {
          position: absolute;
          top: 0;
          left: -50px;
          width: 40px;
          height: 100%;
          text-align: center;
          line-height: 40px;
        }
        p {
          color: #777;
          margin: 0;
          font-size: 10px;
          margin-bottom: 5px;
        }
        h4 {
          font-size: 12px;
        }
        div {
          height: 2px;
          span {
            position: relative;
            display: block;
            height: 100%;
            &::before {
              content: attr(data-span);
              position: absolute;
              top: -25px;
              right: -12px;
              color: var(--c-w);
              font-size: 10px;
              padding: 3px;
              border-radius: 3px;
            }
            &::after {
              content: "";
              position: absolute;
              top: -8px;
              right: -4px;
              border: 5px solid transparent;
            }
          }
        }
      }
      .mony {
        i {
          color: #2c85ff;
          background-color: #cce3ff;
        }
        div {
          background-color: #cce3ff;
          span {
            background-color: #2c85ff;
            &::before {
              background-color: #2c85ff;
            }
            &::after {
              border-top-color: #2c85ff;
            }
          }
        }
      }
      .projects {
        i {
          color: #f5a214;
          background-color: #fdecce;
        }
        div {
          background-color: #fdecce;
          span {
            background-color: #f5a214;
            &::before {
              background-color: #f5a214;
            }
            &::after {
              border-top-color: #f5a214;
            }
          }
        }
      }
      .team {
        i {
          color: #2ac663;
          background-color: #d3f3df;
        }
        div {
          background-color: #d3f3df;
          span {
            background-color: #2ac663;
            &::before {
              background-color: #2ac663;
            }
            &::after {
              border-top-color: #2ac663;
            }
          }
        }
      }
    }
    .ticket {
      .box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 10px;
        .total,
        .pending,
        .closed,
        .deleted {
          width: 48%;
          border: 1px solid var(--c-g);
          border-radius: 6px;
          text-align: center;
          padding: 10px;
          h4 {
            margin: 10px;
          }
          p {
            font-size: 10px;
            color: #777;
          }
        }
        .total {
          i {
            color: #f8c17e;
            border: 2px solid #f8c17e;
            padding: 2px;
            border-radius: 4px;
          }
        }
        .pending {
          i {
            color: #1180ff;
            padding: 2px;
          }
        }
        .closed {
          i {
            color: #3bc770;
            border: 2px solid #3bc770;
            padding: 2px;
            border-radius: 50%;
          }
        }
        .deleted {
          i {
            color: #f45a54;
            border: 2px solid #f45a54;
            padding: 2px 4px;
            border-radius: 4px;
          }
        }
      }
    }
    .news {
      background-color: var(--c-w);
      border-radius: 6px;
      padding: 20px 10px 10px;
      h3 {
        font-size: 16px;
      }
      .box {
        padding: 15px 0 15px 70px;
        position: relative;
        border-bottom: 1px solid var(--c-g);
        img {
          position: absolute;
          left: 0;
          width: 60px;
          height: 30px;
          border-radius: 6px;
        }
        h4 {
          font-size: 12px;
        }
        p {
          font-size: 12px;
          color: #777;
        }
        button {
          font-size: 10px;
          border: none;
          padding: 4px;
          border-radius: 4px;
          color: #414141;
          background-color: var(--c-g);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 10px;
        }
      }
    }
    .taskes {
      .box {
        position: relative;
        padding: 10px 0;
        &:not(:last-child) {
          border-bottom: 1px solid var(--c-g);
        }
        &.blur {
          opacity: 0.3;
        }
        h4 {
          font-size: 12px;
        }
        p {
          font-size: 12px;
          color: #777;
          margin-top: 5px;
        }
        i {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .items {
      .box {
        display: flex;
        justify-content: space-between;
        h4 {
          font-size: 12px;
          font-weight: normal;
          color: #777;
          padding: 10px 0 0;
        }
        p {
          font-size: 12px;
          margin: 20px 0;
          padding: 3px 0;
        }
        .search {
          p {
            background-color: var(--c-g);
            width: fit-content;
            margin-left: auto;
            padding: 3px 6px;
            border-radius: 6px;
          }
        }
      }
    }
    .uploads {
      .box {
        padding: 5px 0 5px 40px;
        position: relative;
        &:first-of-type {
          margin-top: 10px;
        }
        &:not(:last-child) {
          border-bottom: 1px solid var(--c-g);
        }
        i {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 30px;
          color: red;
        }
        h4 {
          font-size: 12px;
        }
        p {
          font-size: 12px;
          color: #777;
          margin-top: 5px;
        }
        button {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          padding: 3px 6px;
          border-radius: 6px;
          font-size: 10px;
        }
      }
    }
    .progres {
      p {
        padding: 20px 0 0 30px;
        font-size: 12px;
        position: relative;
        &:not(:first-of-type)::before {
          content: "";
          position: absolute;
          width: 1px;
          height: calc(100% - 16px);
          background-color: #0075ff;
          left: 17px;
          bottom: 17px;
        }
        &::after {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #0075ff;
          left: 10px;
          bottom: 2px;
          border: 1px solid var(--c-w);
          outline: 1px solid #0075ff;
        }
        &.now::after {
          background-color: #b3d6ff;
        }
        &.next::after {
          background-color: var(--c-w);
        }
      }
    }
    .reminder {
      .box {
        margin: 10px auto 10px 20px;
        padding-left: 10px;
        border-left: 1px solid;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
        }
        &:first-of-type {
          border-color: #55a3ff;
        }
        &:first-of-type::before {
          background-color: #55a3ff;
        }
        &:nth-of-type(2) {
          border-color: #22c55e;
        }
        &:nth-of-type(2)::before {
          background-color: #22c55e;
        }
        &:nth-of-type(3) {
          border-color: #f59e0b;
        }
        &:nth-of-type(3)::before {
          background-color: #f59e0b;
        }
        &:last-of-type {
          border-color: #f44336;
        }
        &:last-of-type::before {
          background-color: #f44336;
        }
        h4 {
          font-size: 12px;
        }
        p {
          font-size: 12px;
          color: #777;
          margin-top: 5px;
        }
      }
    }
    .post {
      & > div {
        padding: 10px 0;
      }
      & > div:not(:last-child) {
        border-bottom: 1px solid var(--c-g);
      }
      .title {
        position: relative;
        padding-left: 50px;
        img {
          width: 40px;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        h4 {
          font-size: 12px;
        }
        p {
          font-size: 12px;
          color: #777;
          margin-top: 5px;
        }
      }
      .core {
        p {
          font-size: 12px;
          line-height: 1.8;
        }
      }
      .foot {
        display: flex;
        justify-content: space-between;
        color: #777;
        font-size: 12px;
      }
    }
    .media {
      & > div {
        padding-left: 40px;
        margin: 10px 0;
        height: 30px;
        line-height: 30px;
        position: relative;
        i {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          color: var(--c-w);
        }
        p {
          font-size: 12px;
        }
        button {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          padding: 3px 6px;
          border-radius: 4px;
          font-size: 10px;
          color: var(--c-w);
          &:focus {
            outline: none;
          }
        }
      }
      .twitter {
        background-color: #d2ecfc;
        i {
          background-color: #1da1f2;
        }
        p {
          color: #1da1f2;
        }
        button {
          background-color: #1da1f2;
        }
      }
      .facebook {
        background-color: #d1e4fc;
        i {
          background-color: #1877f2;
        }
        p {
          color: #1877f2;
        }
        button {
          background-color: #1877f2;
        }
      }
      .youtube {
        background-color: #ffcccc;
        i {
          background-color: #ff0000;
        }
        p {
          color: #ff0000;
        }
        button {
          background-color: #ff0000;
        }
      }
      .linkedin {
        background-color: #cce4f0;
        i {
          background-color: #0077b5;
        }
        p {
          color: #0077b5;
        }
        button {
          background-color: #0077b5;
        }
      }
    }
  }
  .bottom {
    background-color: var(--c-w);
    border-radius: 6px;
    margin: 10px 0 0;
    padding: 10px;
    overflow-x: hidden;
    h3 {
      margin-bottom: 10px;
    }
    .table {
      overflow-x: auto;
      table {
        min-width: 1000px;
        border-spacing: 0;
        tr:hover {
          td {
            background-color: #e0e0e040;
          }
        }
        thead {
          background-color: var(--c-g);
          text-align: left;
        }
        th,
        td {
          padding: 10px;
          font-size: 12px;
          border: 0.5px solid var(--c-g);
        }
        td {
          position: relative;
        }
        img {
          width: 20px;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          &:nth-child(2) {
            left: 20px;
          }
          &:nth-child(3) {
            left: 30px;
          }
          &:nth-child(4) {
            left: 40px;
          }
          &:hover {
            z-index: 1;
          }
        }
        button {
          color: var(--c-w);
          border: none;
          padding: 3px 6px;
          border-radius: 4px;
          font-size: 10px;
          &:focus {
            outline: none;
          }
          &.in-prog {
            background-color: #0075ff;
          }
          &.pending {
            background-color: #f59e0b;
          }
          &.complete {
            background-color: #22c55e;
          }
          &.reject {
            background-color: #f44336;
          }
        }
      }
    }
  }
}
</style>
