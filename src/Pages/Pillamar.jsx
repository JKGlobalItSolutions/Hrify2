import { motion } from "framer-motion";
import {
FaCalculator,
FaFileInvoiceDollar,
FaClock,
FaShieldAlt,
FaChartLine,
FaDatabase
} from "react-icons/fa";

export default function App() {

const features = [
{
icon:<FaCalculator size={28}/>,
title:"Automated Salary Calculations",
desc:"Automatically calculates salaries, bonuses, allowances and deductions ensuring accurate payroll processing."
},
{
icon:<FaFileInvoiceDollar size={28}/>,
title:"Digital Payslip Generation",
desc:"Generate detailed digital payslips with complete breakdown of salary components and deductions."
},
{
icon:<FaClock size={28}/>,
title:"Attendance Integration",
desc:"Connect employee attendance and leave data directly with payroll calculations."
},
{
icon:<FaShieldAlt size={28}/>,
title:"Tax & Compliance",
desc:"Handles statutory deductions and tax rules according to government regulations."
},
{
icon:<FaChartLine size={28}/>,
title:"Real Time Reports",
desc:"Generate payroll reports and insights for HR and finance teams instantly."
},
{
icon:<FaDatabase size={28}/>,
title:"Secure Data Management",
desc:"Protect payroll data with secure storage and role based access."
}
];

return (

<div style={{fontFamily:"Arial"}}>

{/* HERO */}

<section style={{background:"#0c8f5b",color:"white",padding:"120px 0"}}>

<div className="container text-center">

<motion.h1
initial={{opacity:0,y:-40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
style={{fontSize:"48px",fontWeight:"bold"}}
>
Pillamar Payroll Management Software
</motion.h1>

<p style={{maxWidth:"750px",margin:"auto",marginTop:"20px"}}>
Advanced payroll automation platform developed under HRify Group
to simplify payroll processing, salary management and compliance.
</p>

</div>
</section>

{/* INTRODUCTION */}

<section style={{padding:"90px 0",background:"#f6fbf8"}}>

<div className="container">

<div className="row align-items-center">

<div className="col-md-6">

<motion.img
src="/payroll.jpg"
className="img-fluid rounded"
initial={{opacity:0,x:-60}}
whileInView={{opacity:1,x:0}}
whileHover={{scale:1.05}}
transition={{duration:0.6}}
style={{boxShadow:"0 15px 40px rgba(0,0,0,0.15)"}}
/>

</div>

<div className="col-md-6">

<h2 style={{color:"#0c8f5b",fontWeight:"bold"}}>
Introduction
</h2>

<p>
Pillamar is an advanced payroll management software designed to
simplify payroll operations for modern businesses.
</p>

<p>
It automates salary calculations, deductions, tax processing and
compliance requirements to ensure employees are paid accurately
and on time every pay cycle.
</p>

<p>
The system reduces administrative workload for HR and finance
teams while improving payroll accuracy and transparency.
</p>

</div>

</div>
</div>
</section>

{/* ABOUT */}

<section style={{padding:"90px 0"}}>

<div className="container text-center">

<h2 style={{color:"#0c8f5b",fontWeight:"bold"}}>
About Pillamar
</h2>

<p style={{maxWidth:"900px",margin:"auto",marginTop:"20px",lineHeight:"1.8"}}>
Pillamar Payroll Management Software integrates employee data,
attendance records, salary structures, tax rules and deductions
into one centralized platform.
</p>

<p style={{maxWidth:"900px",margin:"auto"}}>
HR teams can manage payroll operations, generate salary reports
and monitor compensation structures through an easy dashboard.
</p>

</div>
</section>

{/* PAYROLL AUTOMATION */}

<section style={{padding:"90px 0",background:"#f6fbf8"}}>

<div className="container">

<h2 className="text-center" style={{color:"#0c8f5b",fontWeight:"bold"}}>
Payroll Automation
</h2>

<div className="row mt-5">

{[
"Automated salary calculations",
"Bonus and allowances processing",
"Statutory deduction handling",
"Automated payroll records"
].map((item,index)=>(

<div className="col-md-3 mb-4" key={index}>

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
whileHover={{scale:1.05}}
transition={{delay:index*0.2}}
style={{
background:"white",
padding:"25px",
borderRadius:"12px",
boxShadow:"0 10px 25px rgba(0,0,0,0.1)"
}}
>

<h6 style={{color:"#0c8f5b"}}>{item}</h6>

</motion.div>

</div>

))}

</div>

</div>
</section>

{/* GLOBAL PAYROLL */}

<section style={{padding:"90px 0"}}>

<div className="container text-center">

<h2 style={{color:"#0c8f5b",fontWeight:"bold"}}>
Global Payroll Management
</h2>

<p style={{maxWidth:"900px",margin:"auto",marginTop:"20px",lineHeight:"1.8"}}>
Pillamar provides a centralized payroll platform capable of
managing multiple departments, employee roles and salary
structures across organizations.
</p>

<p style={{maxWidth:"900px",margin:"auto"}}>
HR teams can monitor payroll processing, generate reports
and manage employee compensation efficiently.
</p>

</div>
</section>

{/* BENEFITS */}

<section style={{padding:"90px 0",background:"#f6fbf8"}}>

<div className="container">

<h2 className="text-center" style={{color:"#0c8f5b",fontWeight:"bold"}}>
Benefits
</h2>

<div className="row mt-5">

{[
"Improved payroll accuracy",
"Faster salary processing",
"Reduced manual effort",
"Better compliance tracking",
"Transparent employee payslips",
"Scalable payroll system"
].map((item,index)=>(

<div className="col-md-4 mb-4" key={index}>

<motion.div
whileHover={{scale:1.05}}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
style={{
background:"white",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 10px 25px rgba(0,0,0,0.1)"
}}
>

<h6 style={{color:"#0c8f5b"}}>{item}</h6>

</motion.div>

</div>

))}

</div>

</div>
</section>

{/* KEY FEATURES */}

<section style={{padding:"100px 0"}}>

<div className="container">

<h2 className="text-center fw-bold mb-5" style={{color:"#0c8f5b"}}>
Key Features
</h2>

<div className="row">

{features.map((item,index)=>(

<div className="col-md-4 mb-4" key={index}>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
whileHover={{
scale:1.05,
boxShadow:"0 20px 40px rgba(0,0,0,0.15)"
}}
style={{
background:"#fff",
padding:"30px",
borderRadius:"12px",
textAlign:"center"
}}
>

<div style={{color:"#0c8f5b",marginBottom:"15px"}}>
{item.icon}
</div>

<h5 style={{color:"#0c8f5b"}}>{item.title}</h5>

<p style={{fontSize:"14px",color:"#555"}}>
{item.desc}
</p>

</motion.div>

</div>

))}

</div>

</div>
</section>

{/* FOOTER */}

<footer style={{background:"#0c8f5b",color:"white",padding:"40px 0"}}>

<div className="container text-center">

<h4>Pillamar Payroll Software</h4>

<p>Developed under HRify Group</p>

</div>

</footer>

</div>

);
}