<template>
   <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <h4><span>Vue </span>Responsive Counter</h4>
        <hr />
        <h2>
          Alt <span>School </span><br />
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
  span{
    color: #00afea;
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
        color: #fff;
        border: 1px solid #00afea;
        border-radius: 5px;
     font-size: 20px;
    margin: 30px auto;
    padding: 10px 20px;
     background: none;
    cursor: pointer;
    transition: 0.8s;
    position: relative;
    overflow: hidden;

    &:hover{
      color: #00afea;
     }
  
    @media (max-width: 550px) {
    
  font-size: 15px;
    }
  }
}
</style>