<template>
  <div class="Courses">
    <section class="Courses">
      <h2>Courses</h2>
      <div class="container">
        <div class="box">
          <div class="img">
            <img src="@/assets/imgs/t1.jpg" alt="box picture" class="back" />
            <img
              src="@/assets/imgs/avatar-01.png"
              alt="avatar picture"
              class="avatar"
            />
          </div>
          <h3>Mastering Web Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            officiis veritatis <span>Cours Info</span>
          </p>
          <div class="foot">
            <p><i class="fa-regular fa-user"></i> 950</p>
            <p>$165</p>
          </div>
        </div>

        <div class="box">
          <div class="img">
            <img src="@/assets/imgs/t2.jpg" alt="box picture" class="back" />
            <img
              src="@/assets/imgs/avatar-02.png"
              alt="avatar picture"
              class="avatar"
            />
          </div>
          <h3>Data Strucure And Algorithms</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            officiis veritatis <span>Cours Info</span>
          </p>
          <div class="foot">
            <p><i class="fa-regular fa-user"></i> 1150</p>
            <p>$210</p>
          </div>
        </div>

        <div class="box">
          <div class="img">
            <img src="@/assets/imgs/t3.jpg" alt="box picture" class="back" />
            <img
              src="@/assets/imgs/avatar-03.png"
              alt="avatar picture"
              class="avatar"
            />
          </div>
          <h3>Resposive Web Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            officiis veritatis <span>Cours Info</span>
          </p>
          <div class="foot">
            <p><i class="fa-regular fa-user"></i> 650</p>
            <p>$90</p>
          </div>
        </div>

        <div class="box">
          <div class="img">
            <img src="@/assets/imgs/t4.jpg" alt="box picture" class="back" />
            <img
              src="@/assets/imgs/avatar-04.png"
              alt="avatar picture"
              class="avatar"
            />
          </div>
          <h3>Mastering Python</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            officiis veritatis <span>Cours Info</span>
          </p>
          <div class="foot">
            <p><i class="fa-regular fa-user"></i> 950</p>
            <p>$250</p>
          </div>
        </div>

        <div class="box">
          <div class="img">
            <img src="@/assets/imgs/t5.jpg" alt="box picture" class="back" />
            <img
              src="@/assets/imgs/avatar-05.png"
              alt="avatar picture"
              class="avatar"
            />
          </div>
          <h3>PHP Examples</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            officiis veritatis <span>Cours Info</span>
          </p>
          <div class="foot">
            <p><i class="fa-regular fa-user"></i> 850</p>
            <p>$150</p>
          </div>
        </div>

        <div class="box">
          <div class="img">
            <img src="@/assets/imgs/t2.jpg" alt="box picture" class="back" />
            <img
              src="@/assets/imgs/avatar-02.png"
              alt="avatar picture"
              class="avatar"
            />
          </div>
          <h3>Data Structore And Algorithms</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            officiis veritatis <span>Cours Info</span>
          </p>
          <div class="foot">
            <p><i class="fa-regular fa-user"></i> 1150</p>
            <p>$210</p>
          </div>
        </div>

        <div class="box">
          <div class="img">
            <img src="@/assets/imgs/t4.jpg" alt="box picture" class="back" />
            <img
              src="@/assets/imgs/avatar-04.png"
              alt="avatar picture"
              class="avatar"
            />
          </div>
          <h3>REsposive Web Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            officiis veritatis <span>Cours Info</span>
          </p>
          <div class="foot">
            <p><i class="fa-regular fa-user"></i> 650</p>
            <p>$90</p>
          </div>
        </div>

        <div class="box">
          <div class="img">
            <img src="@/assets/imgs/t1.jpg" alt="box picture" class="back" />
            <img
              src="@/assets/imgs/avatar-01.png"
              alt="avatar picture"
              class="avatar"
            />
          </div>
          <h3>Mastering Web Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            officiis veritatis <span>Cours Info</span>
          </p>
          <div class="foot">
            <p><i class="fa-regular fa-user"></i> 850</p>
            <p>$145</p>
          </div>
        </div>

        <div class="box">
          <div class="img">
            <img src="@/assets/imgs/t5.jpg" alt="box picture" class="back" />
            <img
              src="@/assets/imgs/avatar-05.png"
              alt="avatar picture"
              class="avatar"
            />
          </div>
          <h3>PHP Examples</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            officiis veritatis <span>Cours Info</span>
          </p>
          <div class="foot">
            <p><i class="fa-regular fa-user"></i> 850</p>
            <p>$150</p>
          </div>
        </div>

        <div class="box">
          <div class="img">
            <img src="@/assets/imgs/t3.jpg" alt="box picture" class="back" />
            <img
              src="@/assets/imgs/avatar-03.png"
              alt="avatar picture"
              class="avatar"
            />
          </div>
          <h3>Mastering Python</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            officiis veritatis <span>Cours Info</span>
          </p>
          <div class="foot">
            <p><i class="fa-regular fa-user"></i> 950</p>
            <p>$250</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section.Courses {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 10px;
    .box {
      overflow: hidden;
      border-radius: 10px;
      background-color: var(--c-w);
      .img {
        position: relative;
        .back {
          width: 100%;
        }
        .avatar {
          width: 40px;
          border-radius: 50%;
          position: absolute;
          top: 15px;
          left: 15px;
          border: 2px solid var(--c-w);
        }
      }
      h3 {
        font-size: 12px;
        padding: 10px;
      }
      p {
        font-size: 12px;
        color: var(--c-p);
      }
      & > p {
        padding: 0 10px 20px;
        border-bottom: 1px solid #e0e0e0;
        position: relative;
        span {
          background-color: #0075ff;
          color: var(--c-w);
          padding: 3px 6px;
          border-radius: 4px;
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .foot {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        p {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
