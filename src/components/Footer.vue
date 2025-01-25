<template>
    <footer class="footer">
    <div class="container">
      <div class="footer-content w-75 align-items-start">
        <div class="footer-links d-flex flex-column">
          <h5 class="fw-bold">NEED HELP</h5>
          <a href="#about" class="footer-link">Contact Us</a>
          <a href="#services" class="footer-link">Track order</a>
          <a href="#contact" class="footer-link">Return & Refunds</a>
          <a href="#contact" class="footer-link">FAQS</a>
          <a href="#contact" class="footer-link">My Account</a>


        </div>
        <div class="footer-links d-flex flex-column">
          <h5 class="fw-bold">COMPANY</h5>
          <a href="#about" class="footer-link">About Us</a>
          <a href="#services" class="footer-link">Careers</a>
          <a href="#contact" class="footer-link">Gift Vouchers</a>
          <a href="#contact" class="footer-link">Community Initiatives</a>
          <a href="#contact" class="footer-link">Souled Army</a>


        </div>
        <div class="footer-links d-flex flex-column">
          <h5 class="fw-bold">MORE INFO</h5>
          <a href="#about" class="footer-link">T&C</a>
          <a href="#services" class="footer-link">Privacy Policy</a>
          <a href="#contact" class="footer-link">Sitemap</a>
          <a href="#contact" class="footer-link">Blogs</a>


        </div>
        <div class="footer-links d-flex flex-column">
          <h5 class="fw-bold">STORE NEAR ME</h5>
          <a href="#about" class="footer-link">Mumbai</a>
          <a href="#services" class="footer-link">Pune</a>
          <a href="#contact" class="footer-link">Indore</a>
          <a href="#contact" class="footer-link">Bangalore</a>
          <a href="#contact" class="footer-link text-primary">View more</a>


        </div>
     
      </div>
      <p class=" text-secondary text-start"><i class="fa-solid fa-indian-rupee-sign me-1"></i>  COD Available</p>
      <p class=" text-secondary text-start"><i class="fa fa-undo ms-0 " aria-hidden="true"></i>   30 Days Easy Returns</p>
      <p class=" text-secondary fw-bold"><i class="fa-solid fa-mobile"></i> EXPERIENCE THE SOULED STORE APP</p>
      <div>
        <img width="150px" src="https://tss-static-images.gumlet.io/icons/play-store.png" />
        <img width="150px" src="https://tss-static-images.gumlet.io/icons/app-store.png" />

      </div>
      <div style="height: fit-content;" class="pin-code  d-block justify-content-between align-items-center  gap-1 mt-3">
        <div @click="setIsClose" class="w-100 d-flex justify-content-between align-items-center "><p class="ms-2 py-0 my-2 fw-bolder">NAVIGATION LINKS</p><p class="m-0 me-1" v-if="isClosed"><i class="fa-solid fa-plus"></i></p><p class="m-0 me-1" v-else ><i class="fa-solid fa-minus"></i></p></div>
        <p v-if="!isClosed" class="text-start mx-2">Material & Care:<br>
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
    <div style="height: fit-content;" class="pin-code  d-block justify-content-between align-items-center  gap-1 mb-3"><div  @click="setIsClose1" class="w-100 d-flex justify-content-between align-items-center "><p class="ms-2 py-0 my-2 fw-bolder m-0 me-1">ARTIST DETAILS</p><p class="m-0 me-1" v-if="isClosed1"><i class="fa-solid fa-plus"></i></p><p class="m-0 me-1" v-else ><i class="fa-solid fa-minus"></i></p></div>
    <p v-if="!isClosed1" class="text-start mx-2">
        The Souled Store was born out of a simple idea - love what you do and follow<br>
         your soul! Thus, our goal is to give everyone something<br>
          they'll love, something they can use to express themselves, and, simply put, something to put a smile<br>
           on their face. So, whether it's superheroes like Superman, TV shows like<br>
            F.R.I.E.N.D.S, pop culture, music, sports, or quirky, funny stuff you're looking<br> for, we have something for everyone.

TSS Originals or The Souled Store Originals is our exclusive range of funny,<br>
 funky, trendy and stylish designs. Designed by our kick-ass team of in-house<br>
  designers, TSS Originals are some cool and quirky designs that help you speak<br>
   your vibe.
    </p>
</div>
      <p class="footer-copyright text-secondary">
        © The Souled Store  {{ currentYear }}-{{ currentYear+1 }}
      </p>
    </div>
  </footer>
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
      border-radius: 30px;
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
 
  </script>