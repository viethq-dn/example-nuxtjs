<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
<template>
  <nav>
    <logo />
    <div class="left-side-menu">
      <ul class="side-nav">
        <li class="side-nav-title side-nav-item">
          Conponent
        </li>
        <li class="side-nav-item">
          <nuxt-link to="/alert" class="side-nav-link">
            <i class="uil-calender" />
            <span> Alert </span>
          </nuxt-link>
        </li>
        <li class="side-nav-item">
          <a href="#" class="side-nav-link">
            <i class="uil-calender" />
            <span> Badge </span>
          </a>
        </li>
        <li class="side-nav-item">
          <a href="#" class="side-nav-link">
            <i class="uil-calender" />
            <span> Badge </span>
          </a>
        </li>
        <li class="side-nav-item">
          <a href="#" class="side-nav-link">
            <i class="uil-calender" />
            <span> Badge </span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
