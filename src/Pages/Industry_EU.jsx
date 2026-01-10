import img9 from "../assets/Industries/img9.png";
import EUimg1 from "../assets/Industries/EUimg1.png";



function Industry_EU() {

    return (

        <>



            <div className="container-fluid p-0">
                <img
                    src={EUimg1}
                    alt="Banner"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block"
                    }}
                />
            </div>







            <div className="container-fluid p-2 mt-3 text-center" >
                <h1 className="mb-2"><b>Energy and Utilities definition</b></h1>
                <p style={{ color: "#015670" }}>Energy and Utilities refers to the industries responsible for the generation, transmission, distribution, and management of essential resources such as electricity, natural gas, water, and renewable energy. This sector includes traditional energy sources like fossil fuels, as well as renewable energy innovations such as solar, wind, and hydroelectric power. Utilities manage infrastructure, ensure supply reliability, and support energy efficiency, sustainability, and regulatory compliance. With increasing emphasis on clean energy, the industry is evolving to address environmental challenges and meet growing energy demands while transitioning to more sustainable and efficient solutions.</p>
            </div>


            <div className="container py-5">
                <div className="row align-items-center">

                    {/* RIGHT CONTENT - col-8 */}
                    <div className="col-lg-8 col-md-12">
                        <h3 className="mb-3">Energy Generation</h3>
                        <p style={{ lineHeight: "1.7" }}>
                            Involves the production of electricity, natural gas, and renewable energy from various sources like fossil fuels, solar, wind, and hydro. </p>

                        <h3 className="mb-3">Sustainable Solutions  </h3>
                        <p style={{ lineHeight: "1.7" }}>We are committed to advancing clean and renewable energy initiatives that minimize environmental impact and promote a sustainable future. Our innovative solutions focus on harnessing solar, wind, and other renewable energy sources, ensuring energy efficiency and reducing carbon footprints for communities and industries worldwide. </p>

                        <h3 className="mb-3">Infrastructure Management  </h3>
                        <p style={{ lineHeight: "1.7" }}>Our approach to infrastructure management ensures the reliable transmission and distribution of energy resources through cutting-edge technologies and smart grid systems. We focus on building robust, scalable, and resilient energy infrastructure that optimizes performance, reduces downtime, and meets the evolving demands of modern energy consumption. </p>

                        <h3 className="mb-3">Regulatory Compliance </h3>
                        <p style={{ lineHeight: "1.7" }}>We navigate the complex landscape of industry regulations and compliance standards to ensure safety, reliability, and environmental responsibility across all operations. Our dedicated compliance strategies help organizations adhere to local and global regulatory frameworks, maintaining operational integrity and fostering public trust in the energy and utilities sector.   </p>
                    </div>




                    {/* LEFT IMAGE - col-4 */}
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center">
                        <img
                            src={img9}
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
    )


}
export default Industry_EU