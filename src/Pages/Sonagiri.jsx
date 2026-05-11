import React from "react";
import { motion } from "framer-motion";
// import logo from "./assets/logo.png";
import img1 from "../assets/sonagiri/img1.jpg";
import img4 from "../assets/sonagiri/img4.jpg";


const services = [
{
title:"Property Management",
image: img1,

desc:"Complete property supervision including tenant coordination, maintenance management and property monitoring. Sonagiri ensures your property stays secure, well maintained and professionally managed with regular updates."
},
{
title:"Tenant Management",
image:"https://images.unsplash.com/photo-1554995207-c18c203602cb",
desc:"We help find verified tenants and manage agreements, communication and support. Our tenant management service ensures smooth relationships between owners and tenants."
},
{
title:"Real Estate Services",
image:"https://images.unsplash.com/photo-1582407947304-fd86f028f716",
desc:"Professional real estate assistance for buying, selling and renting residential or commercial properties with transparent guidance."
},
{
title:"Builders & Construction",
image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e",
desc:"End-to-end building construction services from design planning to project completion using modern construction methods."
},
{
title:"Plot Monitoring",
image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef",
desc:"Regular inspection and monitoring of your plots and land to ensure safety and prevent encroachment."
},
{
title:"Packers & Movers",
image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
desc:"Professional packing and moving services for safe home and office relocation with trained staff."
},
{
title:"Apartment Maintenance",
image:"https://images.unsplash.com/photo-1523217582562-09d0def993a6",
desc:"Complete apartment maintenance services including plumbing, electrical repairs and facility support."
},
{
title:"Interior Design Services",
image:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
desc:"Modern interior design solutions that transform homes and commercial spaces into elegant environments."
}
];

const ScrollServices = () => {

// const text =
// "ACP Works + Modular Kitchen + Cupboard + Glass Work + PVC Window + ACP Works + Modular Kitchen + Cupboard + Glass Work + PVC Window + ";

// return(

// <div
// style={{
// width:"100%",
// overflow:"hidden",
// background:"#e9f5f4",
// padding:"40px 0"
// }}
// >

// <div
// style={{
// display:"flex",
// whiteSpace:"nowrap",
// animation:"scrollText 20s linear infinite",
// fontSize:"60px",
// fontWeight:"700",
// color:"#0f766e",
// letterSpacing:"3px"
// }}
// >

// {text}

// </div>

// <style>

// {`

// @keyframes scrollText {

// 0%{
// transform: translateX(0);
// }

// 100%{
// transform: translateX(-50%);
// }

// }

// `}

// </style>

// </div>

// )

}


function App(){

return(

<div style={{fontFamily:"Poppins"}}>

{/* HERO SECTION */}

<section
style={{
height:"90vh",
backgroundImage:"linear-gradient(rgba(31,63,115,0.75),rgba(31,63,115,0.75)),url(https://images.unsplash.com/photo-1560518883-ce09059eeffa)",
backgroundSize:"cover",
backgroundPosition:"center",
display:"flex",
alignItems:"center",
justifyContent:"center",
textAlign:"center",
color:"white"
}}
>

<motion.div
initial={{opacity:0,y:60}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{delay:0.3}}
style={{
fontSize:"50px",
fontWeight:"700"
}}
>

Reliable Property Management & Real Estate Services

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.6}}
style={{
maxWidth:"700px",
margin:"20px auto",
fontSize:"18px"
}}
>

Sonagiri provides complete property solutions including property management,
tenant management, construction and rental services all in one place.

</motion.p>

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.9}}
>

<button
className="btn"
style={{
background:"#f47c20",
color:"#fff",
border:"none",
padding:"12px 30px",
marginRight:"15px",
fontWeight:"600"
}}
>
Get Service
</button>

<button
className="btn"
style={{
background:"#fff",
color:"#1f3f73",
padding:"12px 30px",
fontWeight:"600"
}}
>
Contact Us
</button>

</motion.div>

</motion.div>

</section>

{/* SCROLL SERVICES */}

<ScrollServices />

{/* OVERVIEW SECTION */}

<section
  style={{
    padding: "100px 0",
    background: "#f4f7fb"
  }}
>

<div className="container">

<div className="row align-items-center g-5">

{/* IMAGE */}

<div className="col-lg-6">

<motion.img
  src={img4}
  alt="Property Management"
  className="img-fluid"
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  whileHover={{ scale: 1.03 }}
  style={{
    width: "100%",
    height: "420px",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "0 25px 60px rgba(0,0,0,0.18)"
  }}
/>

</div>

{/* TEXT */}

<div className="col-lg-6">

<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

<h2
  className="fw-bold mb-4"
  style={{
    color: "#1f3f73",
    fontSize: "38px"
  }}
>
Overview
</h2>

<p
  style={{
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.9",
    maxWidth: "540px"
  }}
>

Sonagiri Property Management provides reliable and professional services for property owners across India.
Our team ensures that every property is properly monitored, maintained and managed with complete transparency.
We help property owners handle documentation, builder coordination and tenant related services efficiently.

Through regular inspections and maintenance support, we make sure your property stays secure and well maintained.
Our goal is to simplify property ownership for clients who live in different cities or countries.

With experienced professionals and trusted service partners, we deliver dependable property care solutions.
Sonagiri focuses on long-term relationships by offering trustworthy, efficient and stress-free property management services.

</p>

</motion.div>

</div>

</div>

</div>

</section>




{/* SERVICES */}

<section
style={{
padding:"80px 0",
background:"#f4f7fb"
}}
>

<div className="container">

<h2
className="text-center fw-bold mb-5"
style={{
color:"#1f3f73"
}}
>
Our Services
</h2>

<div className="row">

{services.map((service,index)=>(

<div className="col-lg-4 col-md-6 mb-4" key={index}>

<motion.div
whileHover={{
y:-10,
scale:1.03,
boxShadow:"0 15px 40px rgba(0,0,0,0.2)"
}}
transition={{duration:0.3}}
style={{
background:"#fff",
borderRadius:"12px",
overflow:"hidden",
cursor:"pointer",
height:"100%"
}}
>

<img
src={service.image}
style={{
width:"100%",
height:"220px",
objectFit:"cover"
}}
/>

<div style={{padding:"20px"}}>

<h5
className="fw-bold mb-2"
style={{color:"#1f3f73"}}
>
{service.title}
</h5>

<p
style={{
fontSize:"14px",
color:"#555"
}}
>
{service.desc}
</p>

</div>

</motion.div>

</div>

))}

</div>

</div>

</section>


{/* WHY CHOOSE */}

<section
style={{
padding:"80px 0",
background:"#fff"
}}
>

<div className="container text-center">

<h2
className="fw-bold mb-4"
style={{color:"#1f3f73"}}
>
Why Choose Sonagiri
</h2>

<div className="row fs-5">

<div className="col-md-3" style={{color:"#f47c20"}}>✔ Experienced Team</div>
<div className="col-md-3" style={{color:"#f47c20"}}>✔ Complete Property Solutions</div>
<div className="col-md-3" style={{color:"#f47c20"}}>✔ Transparent Pricing</div>
<div className="col-md-3" style={{color:"#f47c20"}}>✔ Reliable Support</div>

</div>

</div>

</section>


{/* OVERVIEW */}

{/* <section style={{padding:"80px 0",background:"#f4f7fb"}}>

<div className="container">

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="text-center fw-bold mb-4"
style={{color:"#1f3f73"}}
>

Overview

</motion.h2>

<motion.p
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{delay:0.2}}
viewport={{once:true}}
className="text-center"
style={{maxWidth:"800px",margin:"auto",fontSize:"18px"}}
>

Sonagiri delivers reliable property management services including tenant handling,
rental support, property monitoring and construction assistance across India.

</motion.p>

</div>

</section> */}


{/* HOW SONAGIRI WORKS */}

<section style={{padding:"80px 0",background:"#fff"}}>

<div className="container text-center">

<h2 className="fw-bold mb-5" style={{color:"#1f3f73"}}>
How Sonagiri Works
</h2>

<div className="row">

{[
"Register Your Property",
"Property Inspection",
"Tenant Placement",
"Maintenance Management",
"Monthly Reporting"
].map((step,i)=>(

<div className="col-md-2 col-6 mb-4" key={i}>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.2}}
whileHover={{scale:1.1}}
style={{
background:"#f4f7fb",
padding:"25px",
borderRadius:"10px",
fontWeight:"600"
}}
>

<div style={{fontSize:"28px",color:"#f47c20"}}>
{i+1}
</div>

{step}

</motion.div>

</div>

))}

</div>

</div>

</section>
{/* CUSTOM PROPERTY MANAGEMENT SERVICES */}

<section style={{padding:"80px 0",background:"#fff"}}>

<div className="container">

<h2
className="text-center fw-bold mb-5"
style={{color:"#1f3f73"}}
>
Our Custom Property Management Services include
</h2>

<div className="row">

{[
{
title:"Property Monitoring",
desc:"Regular monitoring of your property to ensure safety, security and proper maintenance. Our team keeps track of property conditions and ensures everything remains well managed."
},

{
title:"Taking Possession from Builder",
desc:"We assist property owners by officially taking possession from the builder or developer and ensuring all formalities and property handover processes are completed properly."
},

{
title:"Dealing with the Developer",
desc:"Our team communicates directly with developers regarding construction updates, documentation and property related queries to simplify the process for property owners."
},

{
title:"Dealing with Paperwork",
desc:"Handling essential paperwork including agreements, documentation, verification and administrative processes related to property ownership and management."
},

{
title:"Periodic Visit to the Property",
desc:"Regular inspection visits are conducted to monitor property condition, check security and ensure the property remains in good shape even when the owner is away."
},

{
title:"Repair and Maintenance",
desc:"We coordinate repair work, maintenance services and necessary improvements through trusted vendors to keep the property safe, functional and well maintained."
}

].map((service,index)=>(

<div className="col-md-4 mb-4" key={index}>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
viewport={{once:true}}
whileHover={{
scale:1.05,
boxShadow:"0 15px 40px rgba(0,0,0,0.2)"
}}
style={{
background:"#f4f7fb",
padding:"25px",
borderRadius:"12px",
height:"100%",
cursor:"pointer"
}}
>

<h5
className="fw-bold mb-3"
style={{color:"#1f3f73"}}
>
{service.title}
</h5>

<p style={{fontSize:"14px",color:"#555"}}>
{service.desc}
</p>

</motion.div>

</div>

))}

</div>

</div>

</section>

{/* CTA */}

<section
style={{
padding:"80px 0",
background:"#1f3f73",
color:"#fff",
textAlign:"center"
}}
>

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="fw-bold mb-3"
>

Let Us Handle Your Property in India

</motion.h2>

<motion.p
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{delay:0.2}}
viewport={{once:true}}
style={{maxWidth:"700px",margin:"auto"}}
>

From tenant placement to maintenance and monitoring,
Sonagiri manages everything professionally so you can enjoy
stress-free property ownership.

</motion.p>

<motion.a
  href="https://www.sonagiri.in/"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.08, y: -3 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  style={{
    display: "inline-block",
    marginTop: "20px",
    background: "#f47c20",
    border: "none",
    padding: "12px 32px",
    color: "#fff",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
    letterSpacing: "0.5px",
    textDecoration: "none"
  }}
>
  Explore More
</motion.a>

</section>

</div>

)

}

export default App;