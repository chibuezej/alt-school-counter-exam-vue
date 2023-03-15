<template>
  <div class="about">
    <div class="right">
      <h4 class="hello">Hi 👋, i am</h4>
      <div class="container"> 
        <h2 class="text">Johnhenry Nmeregini</h2>
      </div>
  
    <h3>A FRONT-<span>END DEVELOPER</span></h3>
    <p class="paragh">Frontend developer with a year experience crafting clean<br/> and functional user interface and web apllication using, <br/>Javascript, React.js, Redux, figma, css/scss, bootsrap, Tailwind, Vue.js. <br/>I am commited to writing clean, scalable and re-usable code.</p>
    <button>Check Portfolio</button>
    </div>
   <div class="left"> 
    <img src="../assets/meriles.png" alt="Henry" class="img"/>
   </div>
  </div>
</template>


<script>

export default {

name: 'About',


}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/hero-bg.png");
  background-attachment: fixed;
 min-height: 100vh;
  color: #fff;
    @media (max-width: 1450px) {
      font-size: 12px;
  display: block;
  padding-top: 30px;
  
    }
   
    .right{
      font-size: 30px;
      margin: auto;
      @media (max-width: 1450px) {
        display: block;
  font-size: 10px;
  padding-top: 30px;
  margin:0px 15px;
  .hello{
    padding-top: 28px;
    margin: auto;
      margin-bottom:10px;
    }
    }
    .paragh{
      font-size: 30px;
    
    @media (max-width: 550px) {
      font-size: 12px;
    }
  }
      button{
      cursor: pointer;
    font-size: 2rem;
    width: 200px;
    height: 80px;
    border-radius: 50px;
    margin: 30px 0px;
     &:hover{
      background-color: #00afea;
     }
    @media (max-width: 1450px) {
      width: 100px;
      font-size: 2em;
      margin: 10px 0;
    border-radius: 25px;
    }
  }
    }
    span{
      color: #00afea;
    }

    h3 {
      text-transform: uppercase;
      font-size: 30px;
      margin: 10px auto;
      @media (max-width: 1450px) {
        font-size: 15px;
      }
    }
  .left{
 margin: auto;
 @media (max-width: 1450px) {
    display: flex;
    justify-content: center;
    margin:0;
 }
 .img{
  @media (max-width: 1450px) {
  height: 30vh;
  margin: 0px;
  }
 }
  }
  .container{
    display: inline-flex;
  @media (max-width: 1450px) {
     display: block;
    }
    .text{
      color: #00afea;
      font-size: 3em;
      margin: auto;
      letter-spacing: 8px;
      border-right: 5px solid;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      animation: typing 2s steps(19), cursor .4s step-end infinite alternate;
        @media (max-width: 650px) {
      font-size: 10px;
      letter-spacing: 4px;

     padding: auto;
    }
    }
    
  }
}

  @keyframes cursor{
    50% { border-color: transparent}
  }
  @keyframes typing{
    from {width: 0;}
  }
</style>


<!-- <div class="about-page">
    <section class="about">
      <div class="about-text container">
        <h1 class="header">About Me</h1>
     
        <h1 class="text"><span>N</span>meregini <span>J</span>ohnhenry</h1>
        <hr />
        <div class="container"> 
          <h2 class="text">
          FRONT-END 
          DEVELOPER
        </h2>
        </div>
     
        <hr />
        <div class="container"> 
          <p class="text">Typwriter css.</p>
        </div>
      </div>
    </section>
  </div> -->