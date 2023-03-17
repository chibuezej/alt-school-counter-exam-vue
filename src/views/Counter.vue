<template>
    <section>
      <div class="counter">
        <div class="input-wrapper"> 
          <input class="input-field" type="number" v-model="value" />
      <input
        class="submit"
        type="submit"
        @click="setValue(value)"
        value="Set Value"
      />
        </div>
       
          <h1 class="header">Counter: {{ count }}</h1>
          <div class="button">
            <button class="btn1" id="decreament" @click="decrement">Decrement</button>
          <button class="btn2"  id="increament" @click="increment">Increment</button>
          </div>
          <button class="reset" @click="reset">Reset</button>

      </div>
    </section>
  </template>

  <script>
import useCounter from "../composable/counterFunc";


export default {
 name: 'Counter', 
 setup() {
    const { count, increment, decrement, reset, setValue } = useCounter();
    return {
      count,
      increment,
      decrement,
      reset,
      setValue,
      value: 0,
    };
  },
};

</script>


<style lang="scss" scoped>
@keyframes slideInLeft {
  from{
transform: translateX(-500px);
  }
  to{
transform: translateX(0)
  }
}
section{
  display: flex;
  align-items: center;
  background-image: url(../assets/hero-bg.png);
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
  .counter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 206px;
    margin: 161px 553px;
    @media (max-width: 1450px) {
  
        padding: 0;
        margin: auto;
        overflow: hidden;
      }
  }
  .input-wrapper{
    display: grid;
    margin: auto;
    padding: auto;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    

    .input-field{
      position: relative;
      top: 0;
      left: 0;
      padding: auto;
      margin: auto;
      border: 5px solid #fff;
      border-radius:5px ;
      font-family: inherit;
      font-size: inherit;
      color: #fff;
      outline: none;
      padding: 1rem;
      background: none;

      &:hover{
        border-color: blue;
      }
      &:focus{
        border-color: #00afea;
      }
     
    }
    .submit{
      left: 1rem;
      top: 0.8rem;
      padding: 1rem;
      color: #000;
      background-color: #00afea;
      cursor: pointer;

      &:hover{
        background-color: blue;
      }
      &:focus{
        background-color: #00afea;
      }
    }
  }
  h1{
    color: #fff;
    animation: slideInLeft 1s ease-in;
    animation-delay: 1s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    transform: translateX(-500px);
  }
.button{
  display: block;
 
  
    #increament,
    #decreament{
      font-size: 1rem;
  font-weight: 100;
  color: #00afea;
  background-color: #fff;
    margin: 10px;
    border-radius: 11px;
    transition:all 0.3s;

    &:hover{
      background-color: #00afea;
      color: #000;
    }
    }

  

}
.reset{
  width: 70px;
  object-fit: contain;
  height: 30px;
    font-size: 1rem;
    font-weight: 100;
    color: #00afea;
    border-radius: 8px;
    

    &:hover{
      transform: translateY(-5px);
      background-color: #00afea;
      color: #000;
      
    }
   }
.btn1{
  width: 110px;
  object-fit: contain;
    height: 60px;
    margin: 10px;
    border-radius: 11px;

    &:hover{
      transform: translateY(-10px);
      background-color: #00afea;
      color: #000;
      
    }
}
.btn2{
  width: 110px;
  object-fit: contain;
    height: 60px;
    margin: 10px;
    border-radius: 11px;

    &:hover{
      transform: translateY(-10px);
      background-color: #00afea;
      color: #000;
    }
}
}
</style>