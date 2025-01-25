<template>
   <div class="div-container row w-75">
    <div class="bread-crumbs d-flex justify-content-start gap-1 mt-2">
      <a >Home</a> /<a> Women Oversized Sweater </a>/<a>Disney <sup>TM</sup></a>/<a> Lilo & Stitch: Ohana</a>
    </div>
    <div class="col-7 row d-flex justify-content-between">
        <div class="product-card ">
            <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1734688659_6105447.jpg?format=webp&w=480&dpr=1.0"/>
        </div>
        <div class="product-card ">
            <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1734688659_5646750.jpg?format=webp&w=480&dpr=1.0" />
        </div>
        <div class="product-card">
            <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1734688659_7428940.jpg?format=webp&w=480&dpr=1.0"/>
        </div>
        <div class="product-card">
            <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1734688659_7428940.jpg?format=webp&w=480&dpr=1.0"/>
            
        </div>
        <div class="product-card">
        <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1734688659_5646750.jpg?format=webp&w=480&dpr=1.0"/>
            </div>
    </div>
    <div class="col-5">
        <h1 class="text-start fs-4 mt-3 fw-bolder">Lilo & Stitch: Ohana</h1>
        <p class="text-start text-opacity-25 fs-6">Women Oversized Sweaters</p>

        <hr>
        <h4 class="text-start  mt-3 fw-bolder">₹ 1699</h4>
        <p class="text-start text-opacity-25 fs-6">MRP incl. of all taxes</p>
        <p class="text-start text-opacity-25 fs-6 fw-bolder">Please select a size. <a class="fw-lighter" style="color: #58595b;" href="#">SIZE CHART</a></p>
        <div class="size-bar d-flex gap-1 my-3">
            <div class="size-pill">
                XXS
            </div>
            <div class="size-pill">
                XS
            </div>
            <div class="size-pill">
                S
            </div>
            <div class="size-pill">
                M
            </div>
            <div class="size-pill">
                L
            </div>
            <div class="size-pill">
                XL
            </div>
            <div class="size-pill">
                XXL
            </div>
        </div>
        <p class="text-start text-opacity-25 fs-6 fw-bolder">Size not available? <a class="fw-lighter" style="color: #58595b;" href="#">Notify Me.</a></p>
        <p class="text-start text-opacity-25 fs-6">Quantity<select class="ms-2"><option value="1">01</option>
        <option value="2">02</option>
        <option value="3">03</option>
        <option value="4">04</option>
        <option value="5">05</option>
        <option value="6">06</option>
        <option value="7">07</option>
        <option value="8">08</option>
        <option value="9">09</option>
        <option value="10">10</option></select></p>
        <div class="w-75 d-flex justify-content-between"><button style="background-color: #e11b23;width: 48%;" class=" fw-bolder text-white fs-6 ">ADD TO CART</button><button style="border: 1px solid #e11b23;color:#e11b23;width: 48%;" class="fw-lighter fs-6"><i class="fa-regular fa-heart"></i> ADD TO WISHLIST</button></div>
        <p class="text-start text-opacity-25 fs-6 my-3">Share <span><i class="fa fa-whatsapp" aria-hidden="true"></i> <i class="fa fa-facebook-square" aria-hidden="true"> </i> <i class="fa fa-twitter-square" aria-hidden="true"></i> <i class="fa fa-instagram" aria-hidden="true"></i></span></p>

        <p class="text-start text-opacity-25 fs-6 fw-bolder">Delivery Details. </p>
        <div class="pin-code d-flex justify-content-between align-items-center  gap-1"><p class="ms-2 py-0 my-0">390020</p><p class="py-0 my-0 fw-bolder me-2">CHECK</p></div>
        <div class="d-flex justify-content-around w-100 my-3 align-items-center "><i class="fa fa-undo fs-3 me-2" aria-hidden="true"></i> <p class="text-start mb-0">This product is eligible for return or exchange under our 30-day return or exchange policy. No questions asked.</p></div>
            <hr>
        <div style="height: fit-content;" class="pin-code  d-block justify-content-between align-items-center  gap-1">
            <div @click="setIsClose" class="w-100 d-flex justify-content-between align-items-center ">
                <p class="ms-2 py-0 my-2 fw-bolder m-0 me-2">Product Details</p><p v-if="isClosed" class="m-0 me-2">
                    <i  class="fa fa-angle-down " aria-hidden="true"></i>
                </p>
                <p v-else class="m-0 me-2" >
                    <i class="fa fa-angle-up m-0 me-2" aria-hidden="true"></i>
                </p>
            </div>
        <p v-if="!isClosed" class="text-start mx-2 m-0 me-2">Material & Care:<br>
100% Acrylic<br><br>

Country of Origin: India (and proud)<br><br>

Manufactured & Sold By:<br>
The Souled Store Pvt. Ltd.<br>
224, Tantia Jogani Industrial Premises<br>
J.R. Boricha Marg<br>
Lower Parel (E)<br>
Mumbai - 400 011<br>
connect@thesouledstore.com<br>
Customer care no. +91 22-68493328</p>
    </div>
    <div style="height: fit-content;" class="pin-code  d-block justify-content-between align-items-center  gap-1"><div  @click="setIsClose1" class="w-100 d-flex justify-content-between align-items-center "><p class="ms-2 py-0 my-2 fw-bolder">Product Description</p><p class="m-0 " v-if="isClosed1"><i  class="fa fa-angle-down m-0 me-2" aria-hidden="true"></i></p><p v-else class="m-0 me-2" > <i class="fa fa-angle-up m-0 me-2" aria-hidden="true"></i></p></div>
    <p v-if="!isClosed1" class="text-start mx-2 ">
        Feeling the need to retreat to your personal cuddle puddle but still want a hint <br>
        of "don't mess with me" look? Then these hoodies are your answer! Dress-up<br>
         like the queen of chill.<br><br>

Style Tip: Pair your hoodie with leggings and fuzzy slippers for ultimate<br>
 relaxation. Or rock it with ripped jeans, chunky sneakers, and a beanie for a<br>
  laid-back look.
    </p>
</div>

    </div>

   </div>
   <div class="div-container row d-flex justify-content-around mb-5">
    <h5 class="my-5 fw-bold text-start mx-5 fs-6">Others also bought</h5>

    <div class="outfit-card" v-for="(product, index) in products" :key="index">
      <img 
        class="product-img"
        :src="product.defaultImg"
        :alt="product.name"
         @click='redirectTo("/product-detail")'
        @mouseover="changeImage(index, 'hover')"
        @mouseout="changeImage(index, 'default')"
      />
      <h6 class="text-start m-0 p-0">{{ product.name }}</h6>
      <p class="text-start m-0 p-0">{{ product.category }}</p>
      <p class="text-start m-0 p-0 pb-5">₹ {{ product.price }}</p>
    </div>
  </div>
  <div class="homegrown-indian-brand mt-5"><p class="text-white fs-1">HOME GROWN INDIAN BRAND</p></div>
<div class="happy-customers mt-1"><p class="text-black fs-1">Over <span class="fw-bolder">6 Million</span> Happy Customers </p></div>


</template>
<style>
.product-card {
width: 47%;
height: 500px;
padding: 0;
margin: 12px;
img {
    height: 100%;
    width: 100%;
}
}
.outfit-card img {
   
        transition: opacity 0.3s ease-in;
}
.div-container {
    color: #58595b;
    width: 88.5%;
    margin: 0 auto;
    p {
        color-scheme: light;
    }
    .size-bar {
        width: fit-content;
        .size-pill {
            width: 50px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 30px;
            border: 1.5px solid #58595b;
        }
    }
    .pin-code {
        width: 100%;
        height: 50px;
        border: 0.01px solid lightgray;
    }
    .outfit-card {
    width: 355px;
    

    height: 525px;
    padding: 0;
    /* border: 1px solid black; */
    border-radius: 30px;
    img {
        width: 100%;
        height: 100%;
     
        transition:  0.3s ease-in;
    }
  }
}

.footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px 0;
  text-align: center;
  height: 300px;
}
.bread-crumbs {
  color: #a7a9ac;
  font-size: 12px;
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
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
}
.homegrown-indian-brand {
  background-color: #e11b23;
  font-family: inherit;
  height: 70px;
  margin-top: 100px !important;

  width: 100%;
}
.footer-links {
  display: flex;
  gap: 15px;
}

.footer-link {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 14px;
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

.social-icon:hover {
  color: #3498db;
}

.footer-copyright {
  font-size: 12px;
  margin: 0;
}
</style>
<script>

  export default {
    data() {
      return {
        isClosed: true,
        isClosed1: true,
        products: [
        {
          name: "Lilo & Stitch",
          category: "Sweaters",
          price: 1699,
          defaultImg: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_8_jp5kBmN.jpg",
          hoverImg: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1736257728_2930707.jpg?format=webp&w=480&dpr=1.0"
        },
        {
          name: "Lilo & Stitch",
          category: "Sweaters",
          price: 1699,
          defaultImg: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_2_v2XlwHK.jpg",
          hoverImg: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1733915952_4172305.jpg?format=webp&w=300&dpr=1.0"
        },
        {
          name: "Lilo & Stitch",
          category: "Sweaters",
          price: 1699,
          defaultImg: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_3_So55dwn.jpg",
          hoverImg: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/Jacquard-Hoodie-Colour-Pop-Hoodie_42024_12_13-23-49-58.jpg?format=webp&w=480&dpr=1.0"
        },
        {
          name: "Lilo & Stitch",
          category: "Sweaters",
          price: 1699,
          defaultImg: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Artboard_1_TAr1WVN.jpg",
          hoverImg: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1734688659_5646750.jpg?format=webp&w=480&dpr=1.0"
        }
      ]

        
      }
    },
    methods: {
      setIsClose() {
        this.isClosed = !this.isClosed;

      },
      setIsClose1() {
        this.isClosed1 = !this.isClosed1;

      },
      redirectTo(path) {
      window.scrollTo(0, 0)

      this.$router.push(path); // Redirect to the specified path
      debugger
    },
      changeImage(index, type) {
      
      const imgElement = document.querySelectorAll(".product-img")[index];
      const product = this.products[index];

      imgElement.src = type === "hover" ? product.hoverImg : product.defaultImg;
    }
    }
  }
</script>