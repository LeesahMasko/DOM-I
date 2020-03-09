const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.getElementsByTagName("a")
for (i=0; i < navLinks.length; i++){
  navLinks[i].innerText = siteContent["nav"]["nav-item-" + (i+1)];
}

// navLinks[0].innerText = siteContent["nav"]["nav-item-1"];
// navLinks[1].innerText = siteContent["nav"]["nav-item-2"];
// navLinks[2].innerText = siteContent["nav"]["nav-item-3"];
// navLinks[3].innerText = siteContent["nav"]["nav-item-4"];
// navLinks[4].innerText = siteContent["nav"]["nav-item-5"];
// navLinks[5].innerText = siteContent["nav"]["nav-item-6"];


let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const ctaTitle = document.querySelector("h1");
ctaTitle.innerText = siteContent["cta"]["h1"];

const ctaBtn = document.querySelector("button");
ctaBtn.innerText = siteContent["cta"]["button"];

// const h4s = document.querySelectorAll("h4")
// for (i=0; i < h4s.length; i++){
//   h4s[i].innerText = siteContent["main-content"]["-h4" + (i+1)];
// }
// const h4F = document.getElementsByTagName("h4");
// h4F.innerText = siteContent["main-content"]["features-h4"];

// const h4A = document.get("about-h4");
// h4A.innerText = siteContent["main-content"]["about-h4"];

let mainContentSec = document.querySelectorAll(".top-content")[0];
let featureSec = mainContentSec.children[0];

let featuresHeader = featureSec.children[0];
featuresHeader.innerText = siteContent["main-content"]["features-h4"];

let featuresContent = featureSec.children[1];
featuresContent.innerText = siteContent["main-content"]["features-content"];

let AboutSec = mainContentSec.children[1];

let AboutHeader = AboutSec.children[0];
AboutHeader.innerText = siteContent["main-content"]["about-h4"];

let AboutContent = AboutSec.children[1];
AboutContent.innerText = siteContent["main-content"]["about-content"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottContentSec = document.querySelectorAll(".bottom-content")[0];
let ServicesSec = bottContentSec.children[0];

let ServicesHeader = ServicesSec.children[0];
ServicesHeader.innerText = siteContent["main-content"]["services-h4"];

let ServicesContent = ServicesSec.children[1];
ServicesContent.innerText = siteContent["main-content"]["services-content"];

let productSec = bottContentSec.children[1];

let productHeader = productSec.children[0];
productHeader.innerText = siteContent["main-content"]["product-h4"];

let productContent = productSec.children[1];
productContent.innerText = siteContent["main-content"]["product-content"];

let visionSec = bottContentSec.children[2];

let visionHeader = visionSec.children[0];
visionHeader.innerText = siteContent["main-content"]["vision-h4"];

let visionContent = visionSec.children[1];
visionContent.innerText = siteContent["main-content"]["vision-content"];

let contactSec = document.querySelectorAll(".contact")[0];
let contact = contactSec.children[0];

let contactHeader = contactSec.children[0];
contactHeader.innerText = siteContent["contact"]["contact-h4"];

let contactAdd = contactSec.children[1];
contactAdd.innerText = siteContent["contact"]["address"];

let contactPh = contactSec.children[2];
contactPh.innerText = siteContent["contact"]["phone"];

let contactEmail = contactSec.children[3];
contactEmail.innerText = siteContent["contact"]["email"];

let footerSec = document.querySelectorAll(".footer")[0];
let footerCopy = footerSec.children[0];

// let footerCopy = footerSec.children[0];
footerCopy.innerText = siteContent["footer"]["copyright"];
