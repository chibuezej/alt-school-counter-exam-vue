<template>
   <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <h4>Vue Responsive Counter</h4>
        <hr />
        <h2>
          Alt School <br />
        Examination
        </h2>
        <hr />
        <div class="getStarted">

          <router-link to="/counter"><button>Go to Counter</button></router-link>
       
      </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import navigation from '@/components/Navigation.vue'

export default {
  name: 'HomeView',
  components: {
    navigation
  }
}
</script>



<style lang="scss" scoped>
.hero {
  background-image: url("../assets/hero-bg.png");
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
   
    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }
    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }
    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
.getStarted{
  display: flex;
  text-align: center;
  top: 0;

  button{
    font-size: 2rem;
    width: 200px;
    height: 80px;
    border-radius: 50px;
    margin: 30px 0px;
    &:hover{
      cursor: pointer;
      background-color: #00afea;
    }
    @media (max-width: 1450px) {
      width: 150px;
    border-radius: 25px;
    }
  }
}
</style>