
<script setup>
import { ref, onMounted } from 'vue'
import { useDispatch, useSelector } from 'react-redux';
import useBoxStore  from '../store/boxStore'; // Import the store
import useCounterStore  from '../store/counter'; // Import the store


// Create an array of 10 items
const boxes = ref(Array.from({ length: 10 }));

// Access the Pinia store
const boxStore = useBoxStore();
const counterStore = useCounterStore();
const fetchInitialData = async () => {
  
    try {
  const response = await fetch('https://api.api-ninjas.com/v1/cars', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic doAy4wXsuzH5dhydzLA6nw==skGrJOAYCWNhtPKM"
    }
  });
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error('Fetch error:', error);
}
};

// Call API on component load
onMounted(() => {
  fetchInitialData();
});
// Handle click event
const handleIncrement = (index) => {
  boxStore.incrementClick(index);
    counterStore.increment();

};
const handleDecrement = (index) => {
  boxStore.decrementClick(index);
  counterStore.decrement();
};
defineProps({
  msg: String,
})



// Function to increment count

</script>

<template>
  
<div id="carouselExampleIndicators" class="carousel slide" data-bs-interval="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item ">
      <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/HOMEPAGE_1_copy.jpg?format=webp&w=1500&dpr=1.0" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/HOMEPAGE_HX3sIjI.jpg?format=webp&w=1500&dpr=1.0" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Home_page_e7QPqF9.jpg?format=webp&w=1500&dpr=1.0" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Home_page_2nXqER7.jpg?format=webp&w=1500&dpr=1.0" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_2_hLI0iCz.jpg?format=webp&w=1500&dpr=1.0" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_3_98wuUd0.jpg?format=webp&w=1500&dpr=1.0" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Kansos_Women_homepage_Banner.now_live.jpg?format=webp&w=1500&dpr=1.0" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<!-- Buttons to manually activate a specific slide -->
<h2 class="my-5 fw-bold">BEST OF WINTERWEAR</h2>
<div class="div-container row d-flex justify-content-around ">
  
  <div class="outfit-card " @click='redirectTo("/product-detail")'>
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_8_jp5kBmN.jpg?format=webp&w=360&dpr=1.0" />
    <h6 class="text-start m-0 p-0">Lilo & Stitch</h6>
    <p class="text-start m-0 p-0">Sweaters</p>
    <p class="text-start m-0 p-0">₹ 1699</p>
  </div>
  <div class="outfit-card "  @click='redirectTo("/product-detail")'>
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_2_v2XlwHK.jpg?format=webp&w=360&dpr=1.0" />
    <h6 class="text-start m-0 p-0">Lilo & Stitch</h6>
    <p class="text-start m-0 p-0">Sweaters</p>
    <p class="text-start m-0 p-0">₹ 1699</p>
  </div>
  <div class="outfit-card "  @click='redirectTo("/product-detail")'>
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_3_So55dwn.jpg?format=webp&w=360&dpr=1.0" />
    <h6 class="text-start m-0 p-0">Lilo & Stitch</h6>
    <p class="text-start m-0 p-0">Sweaters</p>
    <p class="text-start m-0 p-0">₹ 1699</p>
  </div>
   <div class="outfit-card "  @click='redirectTo("/product-detail")'>
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_1_TAr1WVN.jpg?format=webp&w=360&dpr=1.0" />
    <h6 class="text-start m-0 p-0">Lilo & Stitch</h6>
    <p class="text-start m-0 p-0">Sweaters</p>
    <p class="text-start m-0 p-0">₹ 1699</p>

  </div>
</div>
<h2 style="margin-top: 100px;" class="mb-5 fw-bold">LATEST COLLECTIONS</h2>
<div class="div-container row d-flex justify-content-around ">
  
  <div class="collection-card ">
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection-tile-13th-Dec_hUtl9uu.jpg?format=webp&w=360&dpr=1.0" />
    
  </div>
  <div class="collection-card ">
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/1_1_d4mZBiJ.jpg?format=webp&w=360&dpr=1.0" />
    
  </div>
  <div class="collection-card ">
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/2_lEja8XJ.jpg?format=webp&w=360&dpr=1.0" />
   
  </div>
   <div class="collection-card ">
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection_tile_restock_copy.jpg?format=webp&w=360&dpr=1.0" />
   

  </div>
</div>
<h2 class="my-5 fw-bold">SOULFUL BESTSELLERS</h2>

<div class="div-container row d-flex justify-content-around ">
  
  <div class="outfit-card "  @click='redirectTo("/product-detail")'>
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_19_n9vmBS6.jpg?format=webp&w=360&dpr=1.0" />
    <h6 class="text-start m-0 p-0">Lilo & Stitch</h6>
    <p class="text-start m-0 p-0">Sweaters</p>
    <p class="text-start m-0 p-0">₹ 1699</p>
  </div>
  <div class="outfit-card "  @click='redirectTo("/product-detail")'>
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/3_2_Drco6Uz.jpg?format=webp&w=360&dpr=1.0" />
    <h6 class="text-start m-0 p-0">Lilo & Stitch</h6>
    <p class="text-start m-0 p-0">Sweaters</p>
    <p class="text-start m-0 p-0">₹ 1699</p>
  </div>
  <div class="outfit-card ">
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/6_iA1oQX3.jpg?format=webp&w=360&dpr=1.0" />
    <h6 class="text-start m-0 p-0">Lilo & Stitch</h6>
    <p class="text-start m-0 p-0">Sweaters</p>
    <p class="text-start m-0 p-0">₹ 1699</p>
  </div>
   <div class="outfit-card "  @click='redirectTo("/product-detail")'>
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_20_WKJl9Vm.jpg?format=webp&w=360&dpr=1.0" />
    <h6 class="text-start m-0 p-0">Lilo & Stitch</h6>
    <p class="text-start m-0 p-0">Sweaters</p>
    <p class="text-start m-0 p-0">₹ 1699</p>

  </div>
</div>

<h2  style="margin-top: 100px;" class="mb-5 fw-bold">CATEGORIES</h2>
<div class="div-container row d-flex justify-content-around ">
  
  <div class="category-card col-4">
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/big_tile_women_2_KGEb4X8.jpg?format=webp&w=480&dpr=1.0" />
    
  </div>
  <div class="category-card col-4">
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/big_tile_women.3_5LenZ1t.jpg?format=webp&w=480&dpr=1.0" />
    
  </div>
  <div class="category-card col-4">
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/jacket_1_r74b4iE.jpg?format=webp&w=480&dpr=1.0" />

  </div>
   <div class="category-card ">
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/big_tile_women.7_24oNjRs.jpg?format=webp&w=480&dpr=1.0" />
    

  </div>
  <div class="category-card ">
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/big_tile_women.6_35MVSr8.jpg?format=webp&w=480&dpr=1.0" />
    
  </div>
  <div class="category-card ">
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/all_bottoms_kKyc7jK.jpg?format=webp&w=480&dpr=1.0" />
    
  </div>
  <div class="category-card ">
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/big_tile_women.5_8QG2SkB.jpg?format=webp&w=480&dpr=1.0" />
    

  </div>
  <div class="category-card ">
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/big_tile_women.4_1xOmF4Z.jpg?format=webp&w=480&dpr=1.0" />
    
  </div>
  <div class="category-card ">
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/dress_1EjU4MV.jpg?format=webp&w=480&dpr=1.0" />
    
  </div>
</div>
<h2 class="my-5 fw-bold">NEW ARRIVALS</h2>
<div class="div-container row d-flex justify-content-around ">
  
  <div class="outfit-card "  @click='redirectTo("/product-detail")'>
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_8_jp5kBmN.jpg?format=webp&w=360&dpr=1.0" />
    <h6 class="text-start m-0 p-0">Lilo & Stitch</h6>
    <p class="text-start m-0 p-0">Sweaters</p>
    <p class="text-start m-0 p-0">₹ 1699</p>
  </div>
  <div class="outfit-card "  @click='redirectTo("/product-detail")'>
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_2_v2XlwHK.jpg?format=webp&w=360&dpr=1.0" />
    <h6 class="text-start m-0 p-0">Lilo & Stitch</h6>
    <p class="text-start m-0 p-0">Sweaters</p>
    <p class="text-start m-0 p-0">₹ 1699</p>
  </div>
  <div class="outfit-card "  @click='redirectTo("/product-detail")'>
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_3_So55dwn.jpg?format=webp&w=360&dpr=1.0" />
    <h6 class="text-start m-0 p-0">Lilo & Stitch</h6>
    <p class="text-start m-0 p-0">Sweaters</p>
    <p class="text-start m-0 p-0">₹ 1699</p>
  </div>
   <div class="outfit-card "  @click='redirectTo("/product-detail")'>
    <img  src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_1_TAr1WVN.jpg?format=webp&w=360&dpr=1.0" />
    <h6 class="text-start m-0 p-0">Lilo & Stitch</h6>
    <p class="text-start m-0 p-0">Sweaters</p>
    <p class="text-start m-0 p-0">₹ 1699</p>

  </div>
</div>
<h2  style="margin-top: 100px;" class="mb-5 fw-bold">WHAT ARE YOU IN THE MOOD FOR?</h2>

<div class="div-container row d-flex justify-content-around ">
  <div class="mood-card">
    <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Movies__dates_copy_YdwLuS1.jpg?format=webp&w=360&dpr=1.0" />
  </div>
  <div class="mood-card">

    <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Resort_ready_zJtWkqd.jpg?format=webp&w=360&dpr=1.0" />
  </div>
  <div class="mood-card">

    <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/CONCERT_CORE.jpg?format=webp&w=360&dpr=1.0" />
  </div>
  <div class="mood-card">

    <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Movies__datespower_dressing_WeqpQ9V.jpg?format=webp&w=360&dpr=1.0" />
  </div>
</div>
<h2 class="my-5 fw-bold">SHOP BY THEMES</h2>

<div class="div-container row d-flex justify-content-around ">
  <div class="mood-card">
    <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/7_fandom_tile_lQb23im.jpg?format=webp&w=360&dpr=1.0" />
  </div>
  <div class="mood-card">

    <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/9_fandom_tile.jpg?format=webp&w=360&dpr=1.0" />
  </div>
  <div class="mood-card">
    <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/3_fandom_tiles_76tezeV.jpg?format=webp&w=360&dpr=1.0" />

     </div>
  <div class="mood-card">
    <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/1_fandom_tile.jpg?format=webp&w=360&dpr=1.0" />

  </div>
</div>
<h2 class="my-5 fw-bold">SHOP FOR</h2>

<div class="div-container row d-flex justify-content-around ">
  <div class="mood-card">
    <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Shop-collection-tile.jpg-3..jpg?format=webp&w=360&dpr=1.0" />
  </div>
  <div class="mood-card">

    <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Shop-collection-tile.jpg-kiddo_8wCu0ab.jpg?format=webp&w=360&dpr=1.0" />
  </div>
  <div class="mood-card">
    <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Shop-collection-tile.jpg-re_HIPP6an.jpg?format=webp&w=360&dpr=1.0" />

     </div>
     <div class="mood-card">

     </div>

</div>
<h2 class="my-5 fw-bold">WHY CHOOSE US?</h2>

<div class="div-container">
  <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_banner_1.jpg?format=webp&w=1500&dpr=1.0" />
</div>
<h2 class="my-5 fw-bold">MEMBERSHIP</h2>

<div class="div-container">
  <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/membership-web-banner_1.jpg?format=webp&w=1500&dpr=1.0" />
</div>
<div class="homegrown-indian-brand "><p class="text-white fs-1">HOME GROWN INDIAN BRAND</p></div>
<div class="happy-customers mt-1"><p class="text-black fs-1">Over <span class="fw-bolder">6 Million</span> Happy Customers </p></div>

 <!-- <div class="box-container">
    <div
      v-for="(box, index) in boxes"
      :key="index"
      class="box d-flex flex-column"
    >
      Box {{ index + 1 }} <br />
     
      <br />
       <div v-if="!boxStore.clicks[index] || boxStore.clicks[index] === 0">
        <button @click="handleIncrement(index)">Add to Cart</button>
      </div>
      <div v-else class="d-flex align-items-center">
        <button @click="handleIncrement(index)">+</button>
         <div v-if="boxStore.clicks[index]">
       {{ boxStore.clicks[index] || 0 }}  
       </div>
        <button @click="handleDecrement(index)">-</button>
      </div>
     
    </div>
  </div> -->



</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.box-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px; /* Optional: Adds space between boxes */
  padding: 50px 200px;
  
}
.homegrown-indian-brand {
  background-color: #e11b23;
  font-family: inherit;
  height: 70px;
  width: 100%;
}
.carousel-item {
  float: none;

  /* display: none; */
  /* justify-content: center; */
}
/* .carousel-inner {
  display: flex;
  justify-content: center;
}
.
.carousel-item {

  margin: 0 auto;

  height: 500px;
  width: 1500px;
}
.carousel-control-next .carousel-control-previous {
  color: black !important;
  background-color: black !important;

}
.carousel-control-next-icon {
  color: black;
  background-color: black;
}
.carousel-control-previous-icon {
  color: black;
  background-color: black;
} */
 #carouselExampleIndicators {
  width: 1500px;
  height: 512px;
  margin: 0 auto;
 }

 .category-card {
  width: 479px;
  height: 479px;
  overflow: hidden; 
  padding: 0;
  margin: 40px ;
  img:hover {
      transform: scale(1.1); /* Scale image by 1.2 times */
    }
  img {
    transition: transform 0.5s ease; /* Smooth zoom effect */
    /* -webkit-transition: opacity 0.12s; */
  }
  /* border: 1px solid black; */

 }
 .carousel-inner {
  height: 512px;
  width: 100%;

  img {
    width: 100%;
    height: 512px;
  }
 }
.box {
  width: 200px;
  height: 200px;
  margin: 40px ;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9; /* Optional */
}
.div-container {
  margin: 0 auto;
  width: 88.5%;
  .mood-card {
    width: 355px;
    height: 355px;
  }
  .outfit-card {
    width: 355px;

    height: 525px;
    padding: 0;
    /* border: 1px solid black; */
    border-radius: 30px;
  }
  .collection-card {
    width: 355px;
    height: 338px;
    padding: 0;
    
  }
}
.footer {
  background-color: #e6e7e8;
  color: #ecf0f1;
  padding: 20px 0;
  text-align: center;
  height: fit-content;
}

.container {
  max-width: 1200px;
  height: 99%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer-content {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
}

.footer-links {
  h5 {
    color: #e11b23;
  }
}

.footer-link {
  color: #292b2c;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  
  transition: color 0.3s ease;
}
.carousel-item {
  display: block !important;
}
.footer-link:hover {
  color: #3498db;
}

.footer-social {
  display: flex;
  gap: 15px;
}

.social-icon {
  color: #ecf0f1;
  font-size: 16px;
  transition: color 0.3s ease;
}
.pin-code {
        width: 100%;
        height: 70px;
        border: 0.01px solid lightgray;
        color: #e11b23;
    }
.social-icon:hover {
  color: #3498db;
}

.footer-copyright {
  font-size: 20px;
  margin: 0;
}
</style>
<script>

  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        isClosed: true,
        isClosed1: true,
        currentYear: new Date().getFullYear(),
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      setIsClose() {
        this.isClosed = !this.isClosed;

      },
      setIsClose1() {
        this.isClosed1 = !this.isClosed1;

      },
      redirectTo(path) {
      this.$router.push(path); // Redirect to the specified path
      window.scrollTo(0, 0)
    },
    }
  }
  function setActiveSlide(index) {
    // Get all carousel items
    debugger
    const items = document.querySelectorAll('#carouselExampleIndicators .carousel-item');

    // Remove active class from all items
    items.forEach((item) => item.classList.remove('active'));

    // Add active class to the selected item
    if (items[index]) {
      items[index].classList.add('active');
    }
  }
</script>