<script setup>
import useCounterStore from '../store/counter';
const counterStore = useCounterStore();

</script>

<template>
  <header style="background-color: #e11b23;" class=" text-white  ">
    <div  class="nav-header d-flex justify-content-between align-items-center h-100 w-50">
      
      
      <ul class="category-tabs d-flex my-0 h-100 w-50">
        <li :class="{ active: active1 === 1, 'fw-bolder': true, 'h-100': true, 'd-flex': true, 'category-tab1': true }">
          <p  @click="setActive(1)" class="category-tab cursor-pointer">WOMEN</p>
        </li>
        <li :class="{ active: active1 === 2, 'fw-bolder': true, 'h-100': true, 'd-flex': true, 'category-tab1': true }">
          <p @click="setActive(2)" class="category-tab">MEN</p>
        </li>
        <li :class="{ active: active1 === 3, 'fw-bolder': true, 'h-100': true, 'd-flex': true, 'category-tab1': true }">
        <p  @click="setActive(3)" class="category-tab" >KIDS</p>
      </li>
      </ul>
      <div class="d-flex my-0 h-100 w-50">
        <ul class="nav">
        
          <li class="nav-item">
            <a href="#" class="nav-link text-white">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-white">About</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-white">Contact</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-white" style="padding: 10px;"> <i class="fas fa-shopping-cart" style="font-size: 0.75rem;">  </i>
             {{ counterStore.count }}
</a>

          </li>
        </ul>
        </div>
     
      
    </div>
   
  </header>
  <header class=" text-black  shadow-sm " style="padding: 11px;">
    <div class="container-xxl d-flex justify-content-center align-items-center px-0 " style="max-width: fit-content;margin-left: 200px;">
     
      <nav style="width: fit-content;">
        <ul class="nav" style="width: fit-content;">
          <li class="nav-item px-0">
            <div class="dropdown-center">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    WINTERWEAR' 24 <sup>NEW</sup>
  </button>
  <ul class="dropdown-menu">
    <li class="nav-item"><a class="dropdown-item" href="#">All Winterwear</a></li>
    <li><a class="dropdown-item" href="#">Hoodie and Sweatshirts</a></li>
    <li><a class="dropdown-item" href="#">Women's Thermal</a></li>
    <li><a class="dropdown-item" href="#">Men's Thermal</a></li>
  </ul>
</div>
          </li>
          <li class="nav-item px-0">
            <div class="dropdown-center">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    TOPWEAR
  </button>
  <ul class="dropdown-menu">
    <li class="nav-item"><a class="dropdown-item" href="#">All Topwear</a></li>
    <li><a class="dropdown-item" href="#">Hoodie and Sweatshirts</a></li>
    <li><a class="dropdown-item" href="#">Women's Thermal</a></li>
    <li><a class="dropdown-item" href="#">Men's Thermal</a></li>
  </ul>
</div>
          </li>
          <li class="nav-item px-0">
            <div class="dropdown-center">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    BOTTOMWEAR
  </button>
  <ul class="dropdown-menu">
    <li class="nav-item"><a class="dropdown-item" href="#">All Bottomwear</a></li>
    <li><a class="dropdown-item" href="#">Hoodie and Sweatshirts</a></li>
    <li><a class="dropdown-item" href="#">Women's Thermal</a></li>
    <li><a class="dropdown-item" href="#">Men's Thermal</a></li>
  </ul>
</div>
          </li>
          <li class="nav-item px-0">
            <div class="dropdown-center">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    BESTSELLERS
  </button>
  <ul class="dropdown-menu">
    <li class="nav-item"><a class="dropdown-item" href="#">All Bestsellers</a></li>
    <li><a class="dropdown-item" href="#">Hoodie and Sweatshirts</a></li>
    <li><a class="dropdown-item" href="#">Women's Thermal</a></li>
    <li><a class="dropdown-item" href="#">Men's Thermal</a></li>
  </ul>
</div>
          </li>
          <li class="nav-item px-0">
            <div class="dropdown-center">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    SNEAKERS
  </button>
  <ul class="dropdown-menu">
    <li class="nav-item"><a class="dropdown-item" href="#">All Sneakers</a></li>
    <li><a class="dropdown-item" href="#">Hoodie and Sweatshirts</a></li>
    <li><a class="dropdown-item" href="#">Women's Thermal</a></li>
    <li><a class="dropdown-item" href="#">Men's Thermal</a></li>
  </ul>
</div>
          </li>
          <li class="nav-item px-0">
            <div class="dropdown-center">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    SPECIAL PRICES<sup>LIMITED PERIOD</sup>
  </button>
  <ul class="dropdown-menu">
    <li class="nav-item"><a class="dropdown-item" href="#">All Sneakers</a></li>
    <li><a class="dropdown-item" href="#">Hoodie and Sweatshirts</a></li>
    <li><a class="dropdown-item" href="#">Women's Thermal</a></li>
    <li><a class="dropdown-item" href="#">Men's Thermal</a></li>
  </ul>
</div>
          </li>
          <li class="nav-item px-0">
            <div class="dropdown-center">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   COLLECTIONS
  </button>
  <ul class="dropdown-menu">
    <li class="nav-item"><a class="dropdown-item" href="#">All Sneakers</a></li>
    <li><a class="dropdown-item" href="#">Hoodie and Sweatshirts</a></li>
    <li><a class="dropdown-item" href="#">Women's Thermal</a></li>
    <li><a class="dropdown-item" href="#">Men's Thermal</a></li>
  </ul>
</div>
          </li>
          <li class="nav-item px-0">
            <div class="dropdown-center">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   ACCESSORIES<sup>NEW</sup>
  </button>
  <ul class="dropdown-menu">
    <li class="nav-item"><a class="dropdown-item" href="#">All Sneakers</a></li>
    <li><a class="dropdown-item" href="#">Hoodie and Sweatshirts</a></li>
    <li><a class="dropdown-item" href="#">Women's Thermal</a></li>
    <li><a class="dropdown-item" href="#">Men's Thermal</a></li>
  </ul>
</div>
          </li>
          <li class="nav-item px-0">
            <div class="dropdown-center">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   THEMES
   <sup>NEW</sup>
  </button>
  <ul class="dropdown-menu">
    <li class="nav-item"><a class="dropdown-item" href="#">All Sneakers</a></li>
    <li><a class="dropdown-item" href="#">Hoodie and Sweatshirts</a></li>
    <li><a class="dropdown-item" href="#">Women's Thermal</a></li>
    <li><a class="dropdown-item" href="#">Men's Thermal</a></li>
  </ul>
</div>
          </li> 
         <li class="nav-item px-0">
            <div class="dropdown-center">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   MEMBERSHIP

  </button>
  <ul class="dropdown-menu">
    <li class="nav-item"><a class="dropdown-item" href="#">All Sneakers</a></li>
    <li><a class="dropdown-item" href="#">Hoodie and Sweatshirts</a></li>
    <li><a class="dropdown-item" href="#">Women's Thermal</a></li>
    <li><a class="dropdown-item" href="#">Men's Thermal</a></li>
  </ul>
</div>
          </li> 
        </ul>
      </nav>
      
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      active1: 1, // Tracks active state
    };
  },
  name: 'Header',
  props: ['toggleSidebar'], // Pass the toggleSidebar method as a prop
  computed: {
    counterStore() {
      return {
        count: 0, // Replace with your actual store's count
      };
    }
  },
  methods: {
    setActive(buttonId) {
      this.active1 = buttonId; // Set the active button based on the button ID
    },
  },
};
</script>

<style scoped>
.nav-link:hover {
  text-decoration: underline;
}
.btn {
  font-size: 0.80rem;
  font-weight: 700;
}
.category-tab {
  margin-bottom: 9.7px;
  margin-top: 9.7px;
  width: 120px;
}

.category-tab1:hover {
  background-color: #df7c7c;
}
.category-tabs li:first-child {
  list-style: none;
  border-left: 0.5px solid black;

}
.category-tabs li {
  list-style: none;
  background-color: #ed2d2f;
  border-right: 0.5px solid black;

}
.active:hover  {
  background-color: #fff;
}
.clothes-section-tab {
    width: 50%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0 1rem; /* Add padding for better spacing */
  }
sup {
  color: #e11b23;
  font-weight: bold;
  margin: 5px;

}
.nav-header {
  margin: 0 auto;
}
.active {
  background-color: white !important;
  color: #ed2d2f;
}

</style>
