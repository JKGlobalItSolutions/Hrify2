import img7 from "../assets/Industries/img7.png";
import AMimg1 from "../assets/Industries/AMimg1.png";



function Industry_AM() {
    return (

        <>


         <div className="container-fluid p-0" style={{ marginTop: "80px" }}>
                        <img
                            src={AMimg1}
                            alt="Banner"
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block"
                            }}
                        />
                    </div>




            <div className="container-fluid p-2 mt-5 text-center" >
                        <h1 className="mb-2" style={{fontFamily:"poppins", fontSize:"40px"}}><b>Automotive and Mobility</b></h1>
                        <p style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px" }}>Automotive and Mobility refers to the industries and technologies focused on the design, manufacturing, and operation of vehicles, along with the development of innovative transportation solutions that enable efficient, safe, and sustainable movement of people and goods. This domain encompasses traditional automotive manufacturing, electric and autonomous vehicles, shared mobility services, smart infrastructure, and advancements in connectivity to reshape the future of transportation. </p>
                    </div>
        
        
        
        
        
                    <div className="container py-5">
                        <div className="row align-items-center">
        
        
                            {/* RIGHT CONTENT - col-8 */}
                            <div className="col-lg-8 col-md-12">
                                <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Vehicle Innovation</h3>
                                <p style={{ fontFamily:"poppins", fontSize:"18px" }}>
                                    Driving the future of mobility, our focus is on the latest advancements in electric, autonomous, and connected vehicle technologies. We support innovation that enhances energy efficiency, promotes sustainability, and delivers safer, smarter transportation solutions. From cutting-edge electric drivetrains to AI-powered autonomous systems and integrated connectivity features, we are at the forefront of transforming the automotive industry. </p>
        
                                <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Sustainable Solutions</h3>
                                <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>We are committed to promoting eco-friendly technologies that reduce carbon emissions and support environmental sustainability. Our solutions focus on the adoption of electric vehicles (EVs), renewable energy integration, and energy-efficient transportation systems. By leveraging innovative technologies, we aim to create a cleaner, greener future for global mobility. </p>
        
                                <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Smart Mobility </h3>
                                <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>Embracing the future of transportation, our smart mobility initiatives include shared mobility services, ride-hailing platforms, and intelligent transportation systems. By integrating smart infrastructure and leveraging data-driven insights, we enhance urban mobility, reduce traffic congestion, and offer convenient, cost-effective transportation options for both individuals and businesses.</p>
        
                                <h3 style={{ color: "#015670", fontFamily:"poppins", fontSize:"18px", fontWeight:"bold" }}>Global Transportation Evolution </h3>
                                <p style={{ lineHeight: "1.7", fontFamily:"poppins", fontSize:"18px" }}>As the world shifts toward seamless, efficient, and sustainable movement of people and goods, we are leading the way in revolutionizing global transportation. Our focus is on innovative solutions that streamline logistics, enhance connectivity between regions, and support the development of sustainable transportation networks on a global scale. </p>
        
        
        
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