import img7 from "../assets/Industries/img7.png";
import AMimg1 from "../assets/Industries/AMimg1.png";




const fadeUpStyle = {
  animation: "fadeUp 1.2s ease-out forwards",
  opacity: 0,
};

const arrowStyle = {
  fontSize: "50px",
  display: "inline-block",
  animation: "arrowMove 1.5s ease-in-out infinite",
};





function Industry_AM() {
    return (

        <>


       
             {/* ================= HERO SECTION ================= */}
             <div className="container-fluid p-0">
             <div
               className="d-flex align-items-center"
               style={{
                 position: "relative",
                 minHeight: "100vh",
                 width: "100%",
                 backgroundImage: `url(${AMimg1})`,
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 backgroundRepeat: "no-repeat",
                 overflow: "hidden",
               }}
             >
               {/* Gradient Overlay */}
               <div
                 style={{
                   position: "absolute",
                   inset: 0,
                   background:
                     "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0))",
                   zIndex: 1,
                 }}
               />
       
               {/* Content */}
               <div
                 className="container"
                 style={{
                   position: "relative",
                   zIndex: 2,
                   color: "#fff",
                   paddingTop: "120px",
                   paddingBottom: "60px",
                   paddingLeft: "30px",
                   ...fadeUpStyle,
                 }}
               >
                 <h1 className="mb-2" style={{ fontSize: "50px", fontWeight: "700" }}>
                  Automotive and Mobility
                 </h1>
       
                 <h3 style={{ fontSize: "32px", fontWeight: "400" }}>
                  Engineering the future of transportation with skilled professionals supporting connected, electrified, and software-driven mobility ecosystems.
                 </h3>
       
                 {/* Animated Arrow */}
                 <p style={arrowStyle}>→</p>
               </div>
       
               {/* Animations */}
               <style>
                 {`
                   @keyframes fadeUp {
                     from {
                       opacity: 0;
                       transform: translateY(30px);
                     }
                     to {
                       opacity: 1;
                       transform: translateY(0);
                     }
                   }
       
                   @keyframes arrowMove {
                     0% {
                       transform: translateX(0);
                     }
                     50% {
                       transform: translateX(20px); /* ~5cm */
                     }
                     100% {
                       transform: translateX(0);
                     }
                   }
                 `}
               </style>
             </div>
           </div>
       




            <div className="container-fluid p-2 mt-5 text-center" >
                        <h1 className="mb-2" style={{fontFamily:"poppins", fontSize:"40px"}}><b>Automotive and Mobility</b></h1>
                        <p className="p-4" style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px" }}>Automotive and Mobility staffing services focus on providing skilled professionals to support the evolving transportation and vehicle technology ecosystem. This industry includes traditional automotive manufacturing, electric vehicles (EV), autonomous and connected vehicles, and modern mobility solutions. By delivering qualified manpower across technical and non-technical roles, staffing services help organizations maintain efficiency, innovation, and growth in a highly competitive market. </p>
                    </div>
        
        
        
        
        
                    <div className="container py-5">
                        <div className="row align-items-center">
        
        
                            {/* RIGHT CONTENT - col-8 */}
                            <div className="col-lg-8 col-md-12">
                                <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Vehicle Innovation</h3>
                                <p style={{ fontFamily:"poppins", fontSize:"18px" }}>
                                    We support vehicle innovation by providing skilled professionals who drive advancements in automotive and mobility technologies. Our staffing solutions enable organizations to build teams specializing in electric vehicles, autonomous systems, connected vehicle platforms, and next-generation automotive engineering. By supplying domain-ready talent, we help companies accelerate innovation, improve product quality, and stay competitive in a rapidly evolving industry. </p>
        
                                <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Sustainable Solutions</h3>
                                <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Our sustainable staffing solutions focus on supporting eco-friendly and future-ready mobility initiatives. We help organizations recruit talent skilled in electric vehicle development, battery technology, energy efficiency, and environmentally responsible manufacturing practices. By aligning manpower strategies with sustainability goals, we enable businesses to reduce their environmental impact while achieving long-term operational success. </p>
        
                                <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Smart Mobility </h3>
                                <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>We empower smart mobility initiatives by staffing professionals who support shared mobility platforms, intelligent transportation systems, and data-driven mobility services. From software developers and data analysts to operations and fleet management experts, our recruitment solutions help organizations enhance urban mobility, optimize transportation networks, and deliver efficient, user-centric mobility experiences.</p>
        
                                <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Global Transportation Evolution </h3>
                                <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>As the transportation ecosystem evolves globally, we provide scalable staffing solutions to support cross-regional operations and international growth. Our focus is on connecting organizations with skilled talent across manufacturing, technology, and mobility services. By enabling access to a global workforce, we help automotive and mobility companies adapt to changing markets and build resilient, future-ready teams. </p>
        
        
        
                            </div>
        
        
        
                            {/* LEFT IMAGE - col-4 */}
                            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center">
                                <img
                                    src={img7}
                                    alt="Flexible Staffing"
                                    style={{
                                        width: "100%",
                                        maxWidth: "300px",   // optional – neat center look
                                        height: "auto",
                                        borderRadius: "8px"
                                    }}
                                />
                            </div>
        
                        </div>
                    </div>
        
        










        
        
        </>
    );
}
export default Industry_AM