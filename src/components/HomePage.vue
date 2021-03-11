<template>
  <div class="container-fluid m-0 p-0">
    <div id="home-page" class="p-4">
      <!-- First navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bar">
        <div class="col-sm">
          <form class="d-flex">
            <input
              class="form-control"
              type="search"
              placeholder=""
              aria-label="Search"
            />
            <button class="btn btn-outline-success search" type="submit">
              <i class="fas fa-search"></i>&nbsp;Search
            </button>
          </form>
        </div>
        <div class="col-sm right"></div>
        <div class="col-sm right">
          <button type="button" class="btn btn-light learn bold">
            <router-link to="/">Learn </router-link>
          </button>
          <button type="button" class="btn btn-danger  donate">
            <router-link to="/donate" class="text-white">Donate </router-link>
          </button>
        </div>
      </nav>
    </div>

    <!-- Second navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #f8f9fa00"
    >
      <div id="home-page2" class="col-12">
        <div class="row" style="border-bottom: 0px; ">
          <div class="col-4 text-left">
            <a class="navbar-brand" href="#"
              ><img
                alt="Good Things Foundation"
                src="../assets/good_things_foundation.png"
              />
            </a>
          </div>
          <div class="col-8 text-right">
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <router-link to="/" class="nav-link text-black"
                    >Home
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/whatwedo" class="nav-link text-black"
                    >What we do
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/digitaldevide" class="nav-link text-black"
                    >Digital Devide
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/getinvolved" class="nav-link text-black"
                    >Get Involved
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/ournetwork" class="nav-link text-black"
                    >Our Network
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/insights" class="nav-link text-black"
                    >Insights
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Get Online week 2021 Part -->
    <div id="bodypart1" class="p-4">
      <div class="pt-3">
        <div class="col-12">
          <div class="first-p m-3 p-4">
            <h1 class="font-weight-bold text-white text-left">
              Get Online Week 2021
            </h1>
          </div>
        </div>
      </div>
      <div class="pt-1">
        <div class="col-12 pb-5">
          <div class="second-p m-3 p-4">
            <p class="font-weight-normal text-left">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div class="col-12 text-left">
            <button
              type="button"
              class="getinvolved btn btn-outline-danger btn-light"
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Social change Part -->
    <div id="bodypart2">
      <div class="container-fluid p-0 m-0">
        <div class="row custom-row">
          <div class="col custom-column">
            <img src="#" alt="" class="library w-100 " />
          </div>
          <div class="col library-2">
            <div class="m-3 p-4">
              <h2 class="text-white font-weight-bold text-left">
                We are social change charity, helping people to improve their
                lives through digital.
              </h2>
            </div>
            <div class="m-3 p-4">
              <h4 class="text-left text-white">
                We trackle the most pressing issues of our time, working with
                partners in thousands of communities across the UK and further
                afield.
              </h4>
            </div>
            <div class="m-3 p-4 text-left">
              <button type="button" class="btn btn-outline-light learnmore">
                Learn more about us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- How can we help Part -->
    <div id="bodypart3" class="p-5">
      <div class="container-fluid p-0 m-0 text-left">
        <h2 class="font-weight-bold">How can we help you?</h2>
        <p>
          Let us know who you are and what you're looking for, and we'll help
          get you to the right place.
        </p>

        <div class="p-2 bg-light text-center ">
          <p class="p-3 lead mb-0">
            I am
            <span class="span-border">
              <a class="individual" href="#"
                >an individual<i class="fas fa-chevron-down"></i>
              </a>
            </span>
            and I
            <span class="span-border">
              <a class="individual" href="#"
                >want to learn<i class="fas fa-chevron-down"></i>
              </a>
            </span>
            &nbsp;
            <span>
              <button
                type="button"
                class="btn btn-danger start-now"
                style="width: 120px; border-radius:40px"
              >
                Start Now
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>

    <!-- What we do Part -->
    <div id="bodypart4" class="part4 p-5">
      <div class="container-fluid p-0 m-0 text-left">
        <h2 class="font-weight-bold text-white">What do we do?</h2>
        <p class="text-white">
          You might not have heard of us, but we are the people behind the
          following impactful programs.
        </p>

        <div class="row" style="margin-top: 70px; border-bottom: 0px">
          <div
            class="col p-5 text-center mrg-right"
            style=" width: 200px;   background-color: white; "
          >
            <h4>
              Get online week
            </h4>
            <p>Lorem Ipsum dolor</p>

            <button
              type="button"
              class="btn btn-outline-danger"
              style="width: 120px; border: 2px solid #2c3e50; border-radius: 40px"
            >
              Read More
            </button>
          </div>
          <div
            class="col p-5 text-center mrg-right"
            style=" width: 200px;  background-color: white; "
          >
            <h4>
              Learn my way
            </h4>
            <p>Lorem Ipsum dolor</p>

            <button
              type="button"
              class="btn btn-outline-danger"
              style="width: 120px; border: 2px solid #2c3e50; border-radius: 40px"
            >
              Read More
            </button>
          </div>
          <div
            class="col p-5 text-center mrg-right"
            style=" width: 200px; background-color: white; "
          >
            <h4>
              Make it click
            </h4>
            <p>Lorem Ipsum dolor</p>

            <button
              type="button"
              class="btn btn-outline-danger"
              style="width: 120px; border: 2px solid #2c3e50; border-radius: 40px"
            >
              Read More
            </button>
          </div>
          <div
            class="col p-5 text-center mrg-right"
            style=" width: 200px;  background-color: white; "
          >
            <h4>
              Get online week
            </h4>
            <p>Lorem Ipsum dolor</p>

            <button
              type="button"
              class="btn btn-outline-danger"
              style="width: 120px; border: 2px solid #2c3e50; border-radius: 40px"
            >
              Read More
            </button>
          </div>
        </div>

        <div class="text-center m-5">
          <button type="button" class="btn btn-light final-button" style="">
            More about what we do
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- nav1 - first nav bar -->

<!-- nav2 - second nav bar -->
<style scoped>
h1 {
  font-size: 3.5rem;
}
h2 {
  font-size: 2.5rem;
  color: #212529;
}
h4 {
  font-weight: 600;
}
#nav1 {
  padding: 30px;
}
#bodypart1 {
  background: url("../assets/girl_with_laptop.jpg") no-repeat center center;
  background-size: cover;
  height: auto;
}

#bodypart2 {
  border-bottom-width: 0px !important;
}

#bodypart3 {
  background-color: #dee2e6 !important;
}
.row {
  margin-right: 0px !important;
}
.bar {
  padding: 0;
  border-bottom: 1px solid #dee2e6;
}

.form-control {
  padding-bottom: 10px;
  border-radius: 0px;
  margin-top: 6px;
}

a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  border-radius: none;
}
.row {
  border-bottom: 1px solid #dee2e6;
  padding: 0 0 12px 0;
  margin-left: 0px;
}
.btn {
  width: 85px;
}
.right {
  text-align: right;
}
.learn {
  border-bottom: 3px solid #198754;
  font-weight: 900;
  border-radius: 0px;
  margin-top: 4px;
}
button a.donate {
  color: white !important;
}
.donate {
  border-bottom: 3px solid #dc3545;
  border-radius: 0px;
  margin-top: 4px;
  color: white;
}

.search {
  width: 180px;
  display: inline-block;
  color: #636464;
  border-color: #dee2e6;
  font-weight: 600;
  border-radius: 0px;
  margin-top: 6px;
}
.search:hover {
  color: white;
}

a {
  color: #212529;
}

img {
  width: 220px;
  height: auto;
}

.light {
  background-color: #f8f9fa00 !important;
}
.navbar-right li a {
  text-align: right;
}

.home img {
  width: 220px;
  height: auto;
}

.final-button {
  border-radius: 40px;
  color: #dc3545;
  font-weight: 700;
  padding: 10px;
  width: 230px;
}

div.navbar2 {
  @media (min-width: 992px) {
    .navbar-expand-lg .navbar-collapse {
      display: unset !important;
      flex-basis: unset !important;
    }
  }
}
.collapse:not(.show) {
  display: unset !important;
}

.first-p {
  width: 650px;
  height: 120px;
  background-color: rgb(7, 114, 117);
}

.second-p {
  width: 460px;
  height: 120px;
  background-color: #f8f9fa;
  color: rgb(7, 114, 117);
}

.getinvolved {
  border-radius: 40px;
  font-weight: 900;
  width: 170px;
}

button.btn-outline-danger {
  border-color: #f8f9fa;
}

.library {
  background: url("../assets/library.jpg") no-repeat center center;
  background-size: cover;
  height: 100%;
}

.library-2 {
  background-color: rgb(7 117 94);
}

.custom-column {
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.custom-row {
  padding-bottom: 0px !important;
}

.learnmore {
  width: 200px;
  border-radius: 40px;
}
.span-border {
  border-bottom: 2px solid rgb(24, 119, 151);
}
a.individual {
  color: rgb(24, 119, 151);
}
.part4 {
  background-color: rgb(24, 119, 151);
}

.mrg-right {
  margin-right: 70px !important;
}

.collapse {
  display: none;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  .mrg-right {
    margin-right: 20px !important;
  }
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1200px) and (-webkit-min-device-pixel-ratio: 2) {
  .mrg-right {
    margin-right: 20px !important;
  }
}

@media screen and (max-width: 960px) {
  ul {
    display: block;
  }
  .first-p {
    width: auto;
    height: auto;
  }

  .second-p {
    width: auto;
    height: auto;
  }

  .search {
    width: 200px;
  }

  .container-fluid img {
    width: 100%;
  }

  .custom-p {
    font-size: 25px !important;
  }

  .mrg-right {
    margin: 10px !important;
  }

  .final-button {
    width: 200px !important;
  }
}
</style>
