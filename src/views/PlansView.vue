<template>
  <div class="Plans">
    <section class="Plans">
      <h2>Plans</h2>
      <div class="container">
        <div class="green grid">
          <div class="head">
            <h3>Free</h3>
            <p><span>$</span>0.00</p>
          </div>
          <ul>
            <li class="nike">Access All Text Lessons</li>
            <li class="nike">Access All Videos Lessons</li>
            <li class="nike">Appear On Leaderboard</li>
            <li class="x">Browse Content Without Ads</li>
            <li class="x">Access All Assignments</li>
            <li class="x">Get Daily Prizes</li>
            <li class="x">Earn Certificate</li>
            <li class="x">1 GB Space Hosting Files</li>
            <li class="x">Access Badge System</li>
          </ul>
          <button>Join</button>
        </div>
        <div class="blue grid">
          <div class="head">
            <h3>Basic</h3>
            <p><span>$</span>7.99</p>
          </div>
          <ul>
            <li class="nike">Access All Text Lessons</li>
            <li class="nike">Access All Videos Lessons</li>
            <li class="nike">Appear On Leaderboard</li>
            <li class="nike">Browse Content Without Ads</li>
            <li class="nike">Access All Assignments</li>
            <li class="nike">Get Daily Prizes</li>
            <li class="nike">Earn Certificate</li>
            <li class="x">1 GB Space Hosting Files</li>
            <li class="x">Access Badge System</li>
          </ul>
          <button>Join</button>
        </div>
        <div class="orange grid">
          <div class="head">
            <h3>Premium</h3>
            <p><span>$</span>19.99</p>
          </div>
          <ul>
            <li class="nike">Access All Text Lessons</li>
            <li class="nike">Access All Videos Lessons</li>
            <li class="nike">Appear On Leaderboard</li>
            <li class="nike">Browse Content Without Ads</li>
            <li class="nike">Access All Assignments</li>
            <li class="nike">Get Daily Prizes</li>
            <li class="nike">Earn Certificate</li>
            <li class="nike">1 GB Space Hosting Files</li>
            <li class="nike">Access Badge System</li>
          </ul>
          <p>This Is Your Current Plan</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section.Plans {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;
    .grid {
      padding-top: 10px;
      .head {
        padding: 20px;
        text-align: center;
        color: var(--c-w);
        border: 2px solid var(--c-w);
        p {
          font-size: 30px;
          position: relative;
          width: fit-content;
          margin: 0 auto;
          span {
            position: absolute;
            font-size: 14px;
            left: -10px;
          }
        }
      }
      ul {
        list-style: none;
        margin-top: 20px;
        li {
          padding: 10px 0 10px 20px;
          border-bottom: 1px solid #e0e0e0;
          font-size: 12px;
          position: relative;
          &::before,
          &::after {
            font-family: "Font Awesome 5 Free";
            font-weight: 600;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          &::after {
            content: "\f05a";
            right: 0;
            color: var(--c-p);
          }
          &.nike::before {
            content: "\f00c";
            left: 0;
            color: #22c55e;
          }
          &.x::before {
            content: "\f00d";
            left: 0;
            color: red;
          }
        }
      }
      button {
        border: none;
        padding: 3px 6px;
        border-radius: 4px;
        margin-top: 10px;
        color: var(--c-w);
        font-size: 10px;
      }
      &.green {
        .head {
          background-color: #22c55e;
          outline: 2px solid #22c55e;
        }
        button {
          background-color: #22c55e;
        }
      }
      &.blue {
        .head {
          background-color: #0075ff;
          outline: 2px solid #0075ff;
        }
        button {
          background-color: #0075ff;
        }
      }
      &.orange {
        .head {
          background-color: #f59e0b;
          outline: 2px solid #f59e0b;
        }
        & > p {
          width: fit-content;
          margin: 10px auto;
          color: var(--c-p);
          font-size: 12px;
        }
      }
    }
  }
}
</style>
