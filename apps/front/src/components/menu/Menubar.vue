<template>
  <section
    data-bs-version="5.1"
    class="menu menu01 devicem5 cid-uluulv4sM3"
    once="menu"
    id="menu01-10"
  >
    <nav class="navbar navbar-dropdown navbar-expand-lg">
      <div class="menu_box container-fluid">
        <div class="navbar-brand d-flex">
          <span class="navbar-logo">
            <a href="#">
              <img src="/assets/images/logo.png" alt="" />
            </a>
          </span>
          <span class="navbar-caption-wrap"
            ><a class="navbar-caption display-7" href="#"
              ><span
                class="mobi-mbri mobi-mbri-smile-face mbr-iconfont mbr-iconfont-btn"
              ></span></a
            ><a
              class="navbar-caption display-7"
              href="#"
              style="display: inline !important"
            >
              <span style="font-size: 28.8px"></span>
            </a>
            <a
              class="navbar-caption display-7"
              href="#"
              style="display: inline !important"
              >My Life... tell us your story</a
            >
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"></div> -->
        <div id="navbarSupportedContent">
          <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true">
            <li class="nav-item">
              <router-link
                :to="{ name: 'home' }"
                class="nav-link link text-info text-primary display-7"
              >
                Home
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                :to="{ name: 'mypage' }"
                class="nav-link link text-info text-primary display-7"
                >My page&nbsp;
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                :to="{ name: 'test' }"
                class="nav-link link text-info text-primary display-7"
              >
                Test&nbsp;
              </router-link>
            </li>


            <li class="nav-item">
              <router-link
                :to="{ name: 'createpage' }"
                class="nav-link link text-info text-primary display-7"
                >CreatePage&nbsp;</router-link
              >
            </li>

            <li class="nav-item">
              <router-link
                :to="{ name: 'pagelist' }"
                class="nav-link link text-info text-primary display-7"
                >PageList&nbsp;</router-link
              >
            </li>

            <li class="nav-item">
              <router-link
                :to="{ name: 'login' }"
                class="nav-link link text-info text-primary display-7"
              >
                Login&nbsp;
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                :to="{ name: 'signup' }"
                class="nav-link link text-info text-primary display-7"
              >
                SignUp&nbsp;
              </router-link>
            </li>

            
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

/**
 * Routerの動作に関係
 * 強制ログインクリック、ログイン画面を表示された場合、再クリックすると表示されないことを解決する
 */
const handleLoginClick = () => {
  if ("/signup" == router.currentRoute.value.fullPath) {
    window.location.reload();
  }
};
</script>

<style scoped>
.cid-uluulv4sM3 {
  background-color: transparent;
}

.cid-uluulv4sM3 .navbar-dropdown {
  background-color: #71818e !important;
  padding: 0;
}

.cid-uluulv4sM3 .navbar.navbar-expand-lg .dropdown .dropdown-menu {
  background-color: #71818e !important;
  background: #71818e;
}

.cid-uluulv4sM3
  .navbar.navbar-expand-lg
  .dropdown
  .dropdown-menu
  .dropdown-submenu {
  margin: 0;
  left: 100%;
}

.cid-uluulv4sM3 .menu_box {
  flex-wrap: nowrap;
}

@media (max-width: 991px) {
  .cid-uluulv4sM3 .menu_box {
    flex-direction: column;
    align-items: flex-start;
  }

  .cid-uluulv4sM3 .menu_box .navbar.opened,
  .cid-uluulv4sM3 .menu_box .navbar-collapse {
    background-color: #71818e !important;
    transition: all 0s ease 0s;
  }
}

.cid-uluulv4sM3 .navbar-dropdown {
  position: relative !important;
}

.cid-uluulv4sM3 .icons-menu-main {
  display: flex;
  flex-wrap: wrap;
  min-width: 150px;
  margin-left: 24px;
}

@media (max-width: 991px) {
  .cid-uluulv4sM3 .icons-menu-main {
    min-width: auto;
    max-width: 100%;
    margin: 1rem 0 1rem 1rem;
  }
}

@media (max-width: 991px) {
  .cid-uluulv4sM3 .mbr-section-btn-main {
    margin-top: 1rem;
  }
}

.cid-uluulv4sM3 .btn {
  min-height: auto;
  box-shadow: none;
  margin-top: 0;
}

.cid-uluulv4sM3 .btn:hover {
  box-shadow: none;
}

@media (min-width: 992px) {
  .cid-uluulv4sM3 .offcanvas {
    padding: 12rem 64px 0;
    width: 35%;
    background-color: #34363a;
  }

  .cid-uluulv4sM3 .offcanvas_image img {
    width: auto;
    object-fit: cover;
    display: inline-block;
  }

  .cid-uluulv4sM3 .offcanvas-header {
    position: relative;
    padding: 0;
  }

  .cid-uluulv4sM3 .offcanvas-header .btn-close {
    position: absolute;
    top: -70px;
    right: 0;
    width: 35px;
    height: 30px;
  }

  .cid-uluulv4sM3 .offcanvas-body {
    text-align: center;
    padding: 0;
  }

  .cid-uluulv4sM3 .offcanvas-body .mbr-text,
  .cid-uluulv4sM3 .offcanvas-body .mbr-section-subtitle {
    margin-bottom: 32px;
  }

  .cid-uluulv4sM3 .offcanvas-body .offcanvas_contact {
    margin: 0;
  }

  .cid-uluulv4sM3 .offcanvas_box button.btn_offcanvas {
    outline: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    align-self: center;
  }

  .cid-uluulv4sM3 .offcanvas_box button.btn_offcanvas .hamburger span {
    position: absolute;
    right: 0;
    width: 40px;
    height: 2px;
    border-right: 5px;
    background-color: #ffffff;
  }

  .cid-uluulv4sM3
    .offcanvas_box
    button.btn_offcanvas
    .hamburger
    span:nth-child(1) {
    top: 18px;
    transition: all 0.2s;
  }

  .cid-uluulv4sM3
    .offcanvas_box
    button.btn_offcanvas
    .hamburger
    span:nth-child(2) {
    top: 25px;
    transition: all 0.2s;
  }

  .cid-uluulv4sM3 .offcanvas_box button.btn_offcanvas:hover .hamburger span {
    width: 36px;
  }

  .cid-uluulv4sM3
    .offcanvas_box
    button.btn_offcanvas:hover
    .hamburger
    span:nth-child(2) {
    width: 33px;
    transition-delay: 0.2s;
  }

  .cid-uluulv4sM3 ul.navbar-nav {
    padding-bottom: 1.5rem;
  }

  .cid-uluulv4sM3
    .dropdown-menu
    .dropdown-toggle[data-toggle="dropdown-submenu"]::after,
  .cid-uluulv4sM3 .link.dropdown-toggle::after {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-left: 0.5rem;
    margin-bottom: 2px;
    content: "";
    border: 2px solid;
    border-left: none;
    border-top: none;
    transform: rotate(-45deg);
  }

  .cid-uluulv4sM3 .link.dropdown-toggle::after {
    padding: 0 !important;
    transform: rotate(45deg);
  }

  .cid-uluulv4sM3 li.nav-item {
    position: relative;
    display: inline-block;
    padding: 0 !important;
    vertical-align: middle;
    line-height: 1.5em !important;
    font-weight: 600 !important;
    text-decoration: none;
    letter-spacing: 0 !important;
    z-index: 1;
  }

  .cid-uluulv4sM3 .lg_brand {
    margin: 0 1rem;
  }

  .cid-uluulv4sM3 .navbar-nav.nav-dropdown {
    display: -webkit-flex;
    width: 100%;
    justify-content: center;
    min-width: 200px;
  }
}

.cid-uluulv4sM3 .nav-item {
  margin: 4px 15px;
}

@media (min-width: 1200px) {
  .cid-uluulv4sM3 .nav-item {
    margin: 4px 24px;
  }
}

@media (max-width: 991px) {
  .cid-uluulv4sM3 .nav-item {
    margin: 0 !important;
  }
}

.cid-uluulv4sM3 .nav-item .nav-link {
  transition: all 0.5s ease-out;
  border-radius: 0.5rem !important;
  position: relative;
}

.cid-uluulv4sM3 .nav-item .nav-link::before {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  background-color: #ffffff;
  height: 1px;
  width: 0;
  transition: all 0.3s ease-in-out;
}

.cid-uluulv4sM3 .nav-item .nav-link:hover::before,
.cid-uluulv4sM3 .nav-item .nav-link:focus::before {
  width: 100%;
}

.cid-uluulv4sM3 .dropdown-menu {
  border-radius: 0;
  box-shadow: none;
  text-align: left;
}

@media (min-width: 992px) {
  .cid-uluulv4sM3 .dropdown-menu {
    padding: 18px 34px 22px;
    min-width: 250px;
    top: auto !important;
    left: -40px !important;
  }

  .cid-uluulv4sM3 .dropdown-menu.dropdown-submenu {
    left: 215px !important;
    top: -45% !important;
  }
}

@media (max-width: 991px) {
  .cid-uluulv4sM3
    .dropdown-menu
    .dropdown-toggle[data-toggle="dropdown-submenu"]::after,
  .cid-uluulv4sM3 .link.dropdown-toggle::after {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-left: 0.5rem;
    margin-bottom: 2px;
    content: "";
    border: 2px solid;
    border-left: none;
    border-top: none;
    transform: rotate(-45deg);
    right: 15px;
    position: absolute;
    margin-top: -2px;
  }

  .cid-uluulv4sM3 .show.dropdown-toggle[aria-expanded="true"]::after {
    transform: rotate(45deg);
    margin-top: -4px;
  }

  .cid-uluulv4sM3 .offcanvas_box {
    display: none;
  }
}

.cid-uluulv4sM3 .dropdown-item {
  border: none;
  font-weight: 300 !important;
}

.cid-uluulv4sM3 .nav-dropdown .link {
  font-weight: 400 !important;
  padding: 0 !important;
  margin: 0 !important;
}

.cid-uluulv4sM3 .nav-dropdown .link.dropdown-toggle::after {
  margin-left: 0.5rem;
  margin-top: 0;
}

.cid-uluulv4sM3 .container {
  display: flex;
  margin: auto;
}

.cid-uluulv4sM3 .iconfont-wrapper {
  color: #202020;
  font-size: 17px;
  margin-right: 10px;
  margin-bottom: 5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
}

.cid-uluulv4sM3 .iconfont-wrapper:last-child {
  margin-right: 0;
}

.cid-uluulv4sM3 .iconfont-wrapper:hover {
  opacity: 0.5;
}

.cid-uluulv4sM3 .navbar-nav {
  margin: 0 1rem;
}

@media (min-width: 992px) {
  .cid-uluulv4sM3 .navbar-nav {
    margin: 0;
  }
}

.cid-uluulv4sM3 .dropdown-menu,
.cid-uluulv4sM3 .navbar.opened {
  background-color: false !important;
}

.cid-uluulv4sM3 .nav-item:focus,
.cid-uluulv4sM3 .nav-link:focus {
  outline: none;
}

.cid-uluulv4sM3 .dropdown .dropdown-menu .dropdown-item {
  width: auto;
  transition: all 0.25s ease-in-out;
}

.cid-uluulv4sM3 .dropdown .dropdown-menu .dropdown-item::after {
  right: 0.5rem;
}

.cid-uluulv4sM3 .dropdown .dropdown-menu .dropdown-item .mbr-iconfont {
  margin-right: 0.5rem;
  vertical-align: sub;
}

.cid-uluulv4sM3 .dropdown .dropdown-menu .dropdown-item .mbr-iconfont:before {
  display: inline-block;
  transform: scale(1, 1);
  transition: all 0.25s ease-in-out;
}

.cid-uluulv4sM3 .collapsed .dropdown-menu .dropdown-item:before {
  display: none;
}

.cid-uluulv4sM3 .collapsed .dropdown .dropdown-menu .dropdown-item {
  padding: 0.235em 1.5em 0.235em 1.5em !important;
  transition: none;
  margin: 0 !important;
}

.cid-uluulv4sM3 .navbar {
  min-height: 70px;
  padding: 5px 0;
  transition: all 0.3s;
  border-bottom-width: 0;
}

@media (max-width: 992px) {
  .cid-uluulv4sM3 .navbar {
    min-height: 30px;
    max-height: none;
  }
}

.cid-uluulv4sM3 .navbar.opened {
  transition: all 0.3s;
}

.cid-uluulv4sM3 .navbar .dropdown-item {
  padding: 0;
  margin: 8px 0;
}

.cid-uluulv4sM3 .navbar .navbar-logo img {
  max-width: 50px;
  min-height: 50px;
  object-fit: contain;
  border-radius: 0.3rem !important;
}

.cid-uluulv4sM3 .navbar .navbar-collapse {
  justify-content: center;
  justify-content: flex-end;
  justify-content: space-between;
  z-index: 1;
}

.cid-uluulv4sM3 .navbar.collapsed {
  justify-content: center;
}

.cid-uluulv4sM3 .navbar.collapsed .nav-item .nav-link::before {
  display: none;
}

.cid-uluulv4sM3 .navbar.collapsed.opened .dropdown-menu {
  top: 0;
}

.cid-uluulv4sM3 .navbar.collapsed .dropdown-menu .dropdown-submenu {
  left: 0 !important;
}

.cid-uluulv4sM3 .navbar.collapsed .dropdown-menu .dropdown-item:after {
  right: auto;
}

.cid-uluulv4sM3 .navbar.collapsed ul.navbar-nav li {
  margin: auto;
}

.cid-uluulv4sM3 .navbar.collapsed .dropdown-menu .dropdown-item {
  padding: 0.25rem 1.5rem;
  text-align: left;
}

.cid-uluulv4sM3 .navbar.collapsed .icons-menu {
  padding: 0;
}

@media (max-width: 991px) {
  .cid-uluulv4sM3 .navbar .nav-item {
    padding: 0.5rem 0;
  }

  .cid-uluulv4sM3 .navbar .navbar-collapse {
    padding: 34px 0;
    border-radius: 16px;
    width: 100%;
  }

  .cid-uluulv4sM3 .navbar .nav-item .nav-link::before {
    display: none;
  }

  .cid-uluulv4sM3 .navbar.opened .dropdown-menu {
    top: 0;
  }

  .cid-uluulv4sM3 .navbar .dropdown-menu {
    padding: 6px 0 6px 15px;
  }

  .cid-uluulv4sM3 .navbar .dropdown-menu .dropdown-submenu {
    left: 0 !important;
  }

  .cid-uluulv4sM3 .navbar .dropdown-menu .dropdown-item:after {
    right: auto;
    margin-top: -0.4rem;
  }

  .cid-uluulv4sM3 .navbar .navbar-logo img {
    height: 3rem !important;
  }

  .cid-uluulv4sM3 .navbar ul.navbar-nav {
    overflow: hidden;
  }

  .cid-uluulv4sM3 .navbar ul.navbar-nav li {
    margin: 0;
  }

  .cid-uluulv4sM3 .navbar .dropdown-menu .dropdown-item {
    padding: 0 !important;
    margin: 0;
    margin-top: 8px;
    text-align: left;
  }

  .cid-uluulv4sM3 .navbar .navbar-brand {
    flex-shrink: initial;
    flex-basis: auto;
    word-break: break-word;
    padding-right: 0;
    width: 100%;
    justify-content: space-between;
  }

  .cid-uluulv4sM3 .navbar .navbar-toggler {
    flex-basis: auto;
  }

  .cid-uluulv4sM3 .navbar .icons-menu {
    padding: 0;
  }
}

.cid-uluulv4sM3 .navbar.navbar-short {
  min-height: 60px;
}

.cid-uluulv4sM3 .navbar.navbar-short .navbar-logo img {
  height: 2.5rem !important;
}

.cid-uluulv4sM3 .navbar.navbar-short .navbar-brand {
  min-height: 60px;
  padding: 0;
}

.cid-uluulv4sM3 .navbar-brand {
  min-height: 70px;
  flex-shrink: 0;
  align-items: center;
  margin-right: 0;
  padding: 10px 0;
  transition: all 0.3s;
  word-break: break-word;
  z-index: 1;
}

.cid-uluulv4sM3 .navbar-brand .navbar-caption {
  line-height: inherit !important;
  font-weight: 700;
}

.cid-uluulv4sM3 .navbar-brand .navbar-logo a {
  outline: none;
}

.cid-uluulv4sM3 .dropdown-item.active,
.cid-uluulv4sM3 .dropdown-item:active {
  background-color: transparent;
}

.cid-uluulv4sM3 .navbar-expand-lg .navbar-nav .nav-link {
  margin: 8px 12px !important;
}

.cid-uluulv4sM3 .nav-dropdown .link.dropdown-toggle {
  margin-right: 1.667em;
}

.cid-uluulv4sM3 .nav-dropdown .link.dropdown-toggle[aria-expanded="true"] {
  margin-right: 0;
  padding: 0.667em 1.667em;
}

.cid-uluulv4sM3 .navbar .dropdown.open > .dropdown-menu {
  display: block;
}

.cid-uluulv4sM3 ul.navbar-nav {
  flex-wrap: wrap;
  padding: 0;
}

.cid-uluulv4sM3 .navbar-buttons {
  text-align: center;
  min-width: 170px;
}

.cid-uluulv4sM3 button.navbar-toggler {
  outline: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  align-self: center;
  color: #71818e;
  background: #71818e;
}

.cid-uluulv4sM3 button.navbar-toggler .hamburger span {
  position: absolute;
  right: 10px;
  margin-top: 14px;
  width: 26px;
  height: 2px;
  border-right: 5px;
  background-color: #ffffff;
}

.cid-uluulv4sM3 button.navbar-toggler .hamburger span:nth-child(1) {
  top: 0;
  transition: all 0.2s;
}

.cid-uluulv4sM3 button.navbar-toggler .hamburger span:nth-child(2) {
  top: 8px;
  transition: all 0.15s;
}

.cid-uluulv4sM3 button.navbar-toggler .hamburger span:nth-child(3) {
  top: 8px;
  transition: all 0.15s;
}

.cid-uluulv4sM3 button.navbar-toggler .hamburger span:nth-child(4) {
  top: 16px;
  transition: all 0.2s;
}

.cid-uluulv4sM3 nav.opened .hamburger span:nth-child(1) {
  top: 8px;
  width: 0;
  opacity: 0;
  right: 50%;
  transition: all 0.2s;
}

.cid-uluulv4sM3 nav.opened .hamburger span:nth-child(2) {
  transform: rotate(45deg);
  transition: all 0.25s;
}

.cid-uluulv4sM3 nav.opened .hamburger span:nth-child(3) {
  transform: rotate(-45deg);
  transition: all 0.25s;
}

.cid-uluulv4sM3 nav.opened .hamburger span:nth-child(4) {
  top: 8px;
  width: 0;
  opacity: 0;
  right: 50%;
  transition: all 0.2s;
}

.cid-uluulv4sM3 a.nav-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.cid-uluulv4sM3 .icons-menu {
  flex-wrap: nowrap;
  display: flex;
  justify-content: center;
  padding: 0;
  text-align: center;
  margin-bottom: 35px;
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .cid-uluulv4sM3 .navbar {
    height: 70px;
  }

  .cid-uluulv4sM3 .navbar.opened {
    height: auto;
  }

  .cid-uluulv4sM3 .nav-item .nav-link:hover::before {
    width: 175%;
    max-width: calc(100% + 2rem);
    left: -1rem;
  }
}

.cid-uluulv4sM3 .navbar-dropdown .navbar-logo {
  margin-right: 10px;
}

@media (min-width: 768px) {
  .cid-uluulv4sM3 .container-fluid {
    padding-left: 42px;
    padding-right: 42px;
  }
}

.cid-uluulv4sM3 .mbr-section-btn-main {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 992px) {
  .cid-uluulv4sM3 .mbr-section-btn-main {
    display: block;
    padding: 0;
  }
}

.cid-uluulv4sM3 .mbr-section-btn-main .btn {
  min-width: 140px;
}

.cid-uluulv4sM3 .navbar-caption:hover {
  color: #1c1c1c;
}

@media (min-width: 992px) {
  .cid-uluulv4sM3 .dropdown-menu.dropdown-submenu {
    left: 175px !important;
    top: -45% !important;
  }
}

.cid-uluulv4sM3 .text_widget {
  margin-bottom: 32px;
}

.cid-uluulv4sM3 .text_widget a {
  transition: all 0.3s ease-out;
}

.cid-uluulv4sM3 .text_widget a:hover,
.cid-uluulv4sM3 .text_widget a:focus {
  opacity: 0.8;
}

.cid-uluulv4sM3 .mbr-section-subtitle {
  color: #ffffff;
  text-align: center;
}

.cid-uluulv4sM3 .navbar-caption {
  color: #ffffff;
}

.cid-uluulv4sM3 .mbr-text {
  color: #f4f4f4;
  text-align: center;
}

.cid-uluulv4sM3 .mbr-section-subtitle,
.cid-uluulv4sM3 .text_widget,
.cid-uluulv4sM3 .mbr-section-btn {
  text-align: center;
}

.cid-uluulv4sM3
  a[class*="text-"]:not(.nav-link):not(.dropdown-item):not([role]):not(
    .navbar-caption
  ):hover {
  background-image: none;
}
</style>
