<template>
  <div class="sub-main">
    <div class="info">
      <p class="title">Because we are you. Humans.</p>
      <p class="description">
        Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui
        dolor cillum fugiat ad.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sub-main {
  position: relative;
  height: 80vh;
}
.info {
  position: absolute;
  width: 100%;
  max-width: 450px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.title {
  font-family: Libre Baskerville;
  font-size: 53px;
  text-align: center;
  color: #1c1c1c;
}
.description {
  font-family: Open Sans;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #1c1c1c;
  padding: 0 20px;
  margin-top: 5px;
}

@media (max-width: 767.98px) { 
  .title {
  font-size: 26px;
}

.description {
    font-size: 17px;
}
 }

@media (min-width: 768px) and (max-width: 991.98px) {

.title {
  font-size: 32px;
}

.description {
    font-size: 18px;
}
  }

@media (min-width: 992px) and (max-width: 1199.98px){

.title {
  font-size: 38px;
}
.description {
  font-size: 18px;
}
 }
</style>