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

let nav = document.querySelectorAll('nav > a');

for(let i = 0; i < nav.length; i++) {
  nav[i].textContent = siteContent["nav"]["nav-item-" + (i + 1)];
}

let headline1 = document.getElementsByTagName('h1');
headline1[0].textContent = siteContent["cta"]["h1"];

let ctaButton = document.getElementsByTagName('button');
ctaButton[0].textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let topContentH4 = document.querySelectorAll('.top-content > .text-content > h4');
topContentH4[0].textContent = siteContent["main-content"]["features-h4"];
topContentH4[1].textContent = siteContent["main-content"]["about-h4"];

let topContentParagraph = document.querySelectorAll('.top-content > .text-content > p');
topContentParagraph[0].textContent = siteContent["main-content"]["features-content"];
topContentParagraph[1].textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomContentH4 = document.querySelectorAll('.bottom-content > .text-content > h4');
bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContentParagraph = document.querySelectorAll('.bottom-content > .text-content > p');
bottomContentParagraph[0].textContent = siteContent["main-content"]["services-content"];
bottomContentParagraph[1].textContent = siteContent["main-content"]["product-content"];
bottomContentParagraph[2].textContent = siteContent["main-content"]["vision-content"];

let contactH4 = document.querySelector('.contact > h4');
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contact = document.querySelectorAll('.contact > p');
contact[0].textContent = siteContent["contact"]["address"];
contact[1].textContent = siteContent["contact"]["phone"];
contact[2].textContent = siteContent["contact"]["email"];

let footer = document.querySelector('footer > p');
footer.textContent = siteContent["footer"]["copyright"];