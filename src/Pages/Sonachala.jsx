import img1 from "../assets/Products/img1.png";
import img2 from "../assets/Products/img2.png";
import img3 from "../assets/Products/img3.png";
import img4 from "../assets/Products/img4.png";
import img5 from "../assets/Products/img5.png";
import img6 from "../assets/Products/img6.png";
import img7 from "../assets/Products/img7.png";
import img8 from "../assets/Products/img8.png";


function Products() {



    return (


        <>
        <div style={{height:"100px", background: "linear-gradient(135deg, #038A5F, #012419)",}}></div>
            <div
                className="mb-5"
                style={{
                    background: "linear-gradient(135deg, #038A5F, #012419)",
                    minHeight: "clamp(300px, 45vh, 450px)",
                    // marginTop:"80px"
                }}
            >
               <div className="container h-100">
  <div className="row h-100 align-items-center">

    {/* LEFT IMAGE */}
    <div className="col-lg-6 col-md-12 d-flex justify-content-lg-start justify-content-center align-items-center">
      <img
        className="img-fluid mt-5"
        src={img1}
        alt="Hotel"
        style={{
          maxWidth: "200px",
          objectFit: "contain",
          borderRadius: "12px",
          marginLeft: "10px",   // 👈 slight left corner move
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="col-lg-6 col-md-12 d-flex align-items-center">
      <div className="text-white text-center text-lg-start mt-5">
        <h1 style={{ fontWeight: "600"  }}>
          Hotel Revenue Management Solutions
        </h1>
      </div>
    </div>

  </div>
</div>

            </div>





            <div
                style={{
                    minHeight: "clamp(300px, 45vh, 450px)",
                    // marginBottom: "20px"
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-start align-items-lg-center">

                        {/* LEFT CONTENT – 8 COLUMNS */}
                        <div className="col-lg-8 col-md-12 text-dark">
                            <h3 style={{ fontWeight: "600", marginBottom: "12px", color: "#038A5F" }}>
                                <b>Revenue Management</b>
                            </h3>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                Sonachala equips hotels with intelligent pricing strategies
                                to maximize revenue while maintaining high occupancy rates.
                                Our system analyzes market demand, seasonal trends, and
                                competitor pricing in real time.
                            </p>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                Whether it’s peak season or a slow period, dynamic pricing
                                ensures that your rooms are always competitively priced —
                                attracting more guests without sacrificing profitability.
                            </p>

                            <p style={{ lineHeight: "1.7", opacity: 0.95, marginBottom: 0 }}>
                                Our platform empowers hoteliers to adjust rates instantly,
                                run promotions, and monitor performance from a single
                                dashboard. Make every room night count with data-driven
                                decision-making.
                            </p>
                        </div>

                        {/* RIGHT IMAGE – 4 COLUMNS */}
                        <div className="col-lg-4 col-md-12 text-center">
                            <img
                                src={img2}
                                alt="Revenue Management"
                                style={{
                                    width: "100%",
                                    height: "clamp(200px, 25vh, 300px)",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>



            <div className="container-fluid p-4 mb-5" style={{ color: "white", background: "linear-gradient(135deg, #038A5F, #012419)", }} >
                <p>
                    ✅ Dynamic pricing based on demand and competition ✅ Automated seasonal and event-based rate adjustments ✅ Real-time performance tracking and insights ✅ Maximize occupancy without undercutting revenue
                </p>


            </div>





            <div
                style={{
                    // minHeight: "450px",
                    // marginBottom: "20px"
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-start align-items-lg-center">



                        {/* RIGHT IMAGE – 4 COLUMNS */}
                        <div className="col-lg-4 col-md-12 text-center">
                            <img
                                src={img3}
                                alt="Revenue Management"
                                style={{
                                    width: "100%",
                                    height: "clamp(200px, 25vh, 300px)",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>


                        {/* LEFT CONTENT – 8 COLUMNS */}
                        <div className="col-lg-8 col-md-12 text-dark">
                            <h3 style={{ fontWeight: "600", marginBottom: "12px", color: "#038A5F" }}>
                                <b>Booking Engine</b>
                            </h3>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                Sonachala’s next-generation booking engine helps hotels capture direct bookings with ease. From quick searches to instant reservations, every step is optimized for speed, convenience, and conversion.
                            </p>


                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>Guests can view real-time room availability, compare options, and lock in their stay within seconds. Transparent pricing, secure payments, and instant confirmations ensure a frictionless booking experience.</p>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>Whether you run a boutique property or a chain of hotels, our booking engine integrates seamlessly into your website, allowing you to sell rooms 24/7 without relying solely on third-party platforms.
                            </p>


                        </div>



                    </div>
                </div>
            </div>




            <div className="container-fluid p-4 mt-5 mb-5" style={{ color: "white", background: "linear-gradient(135deg, #038A5F, #012419)", }} >
                <p>
                    ⚡ Lightning-fast search & booking in under a minute    📅 Live availability synced with hotel inventory 🔐 Secure, multi-option payments (UPI, Cards, Wallets)📩 Instant confirmation via email & SMS 📲 Fully responsive design for mobile & desktop users
                </p>


            </div>





            <div
                style={{
                    // minHeight: "clamp(300px, 45vh, 450px)",
                    // marginBottom: "20px"
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-start align-items-lg-center">

                        {/* LEFT CONTENT – 8 COLUMNS */}
                        <div className="col-lg-8 col-md-12 text-dark">
                            <h3 style={{ fontWeight: "600", marginBottom: "12px", color: "#038A5F" }}>
                                <b>Software</b>
                            </h3>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                Sonachala’s integrated Property Management System (PMS) and Channel Manager help hotels streamline operations, manage bookings, and boost revenue — all from a single platform.</p>
                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>Our PMS handles reservations, guest profiles, billing, and housekeeping tasks with ease, while the Channel Manager syncs your inventory across OTAs like Booking.com, Expedia, and Agoda in real time — eliminating overbookings and manual updates.</p>
                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>With automation, smart reporting, and a user-friendly dashboard, you can focus on delivering exceptional guest experiences while our software handles the heavy lifting.
                            </p>


                        </div>

                        {/* RIGHT IMAGE – 4 COLUMNS */}
                        <div className="col-lg-4 col-md-12 text-center">
                            <img
                                src={img4}
                                alt="Revenue Management"
                                style={{
                                    width: "100%",
                                    height: "clamp(200px, 25vh, 300px)",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>




            <div className="container-fluid p-4 mt-5 mb-5" style={{ color: "white", background: "linear-gradient(135deg, #038A5F, #012419)", }} >
                <p>
                    ⚡ Centralized dashboard for all hotel operations 🔄 Real-time OTA sync to avoid double bookings 📊 Revenue reports, occupancy stats, and performance insights💳 Integrated billing & payment processing 📱 Mobile-friendly interface for on-the-go management
                </p>


            </div>



            <div
                style={{
                    // minHeight: "clamp(300px, 45vh, 450px)",
                    // marginBottom: "20px"
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-start align-items-lg-center">



                        {/* RIGHT IMAGE – 4 COLUMNS */}
                        <div className="col-lg-4 col-md-12 text-center">
                            <img
                                src={img5}
                                alt="Revenue Management"
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>


                        {/* LEFT CONTENT – 8 COLUMNS */}
                        <div className="col-lg-8 col-md-12 text-dark">
                            <h3 style={{ fontWeight: "600", marginBottom: "12px", color: "#038A5F" }}>
                                <b>Tech Solutions</b>
                            </h3>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                We provide businesses with cutting-edge technology services to help them grow, scale, and stay competitive in the digital era. From building powerful websites and mobile apps to creating impactful marketing campaigns, our solutions are designed for success.</p>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>Our expert team delivers secure, scalable, and high-performance systems — ensuring your business operates smoothly, reaches the right audience, and stays ahead in the market.
                            </p>
                        </div>



                    </div>
                </div>
            </div>

            <div className="container-fluid p-4 mt-5 mb-5" style={{ color: "white", background: "linear-gradient(135deg, #038A5F, #012419)", }} >
                <p>
                    💻 Custom Website Design & Development 📱 Android & iOS Mobile App  evelopment 📣 Digital Marketing (SEO, Social Media, Paid Ads)🌐 Networking & IT Infrastructure Solutions 🛠️ Ongoing Maintenance & Technical Support 📊 Data Analytics & Performance Tracking
                </p>


            </div>






            <div
                style={{
                    // minHeight: "clamp(300px, 45vh, 450px)",
                    // marginBottom: "20px"
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-start align-items-lg-center">

                        {/* LEFT CONTENT – 8 COLUMNS */}
                        <div className="col-lg-8 col-md-12 text-dark">
                            <h3 style={{ fontWeight: "600", marginBottom: "12px", color: "#038A5F" }}>
                                <b>Hotel Facility Booking Engine</b>
                            </h3>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                Our advanced booking engine goes beyond room reservations — it lets guests instantly book hotel facilities like conference halls, banquet spaces, spas, gyms, and other amenities with ease.</p>
                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>Designed for speed, transparency, and convenience, the system allows guests to view real-time availability, select services, and confirm their bookings in just a few clicks — whether on desktop or mobile.</p>
                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>For hoteliers, the platform centralizes facility management, prevents double bookings, and provides analytics to optimize usage and maximize revenue from every service offered.
                            </p>


                        </div>

                        {/* RIGHT IMAGE – 4 COLUMNS */}
                        <div className="col-lg-4 col-md-12 text-center">
                            <img
                                src={img6}
                                alt="Revenue Management"
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>


            <div className="container-fluid p-4" style={{ color: "white", background: "linear-gradient(135deg, #038A5F, #012419)", }} >
                <p>
                    🏨 Real-time facility availability and instant booking 📅 Calendar-based scheduling for events and amenities 💳 Secure payment integration for add-on services 📊 Usage reports and revenue tracking for facilities 📲 Mobile-friendly interface for guests and staff
                </p>
            </div>




            <div
                style={{
                    height: "450px",
                    marginBottom: "20px"
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-start align-items-lg-center">



                        {/* RIGHT IMAGE – 4 COLUMNS */}
                        <div className="col-lg-4 col-md-12 text-center">
                            <img
                                src={img7}
                                alt="Revenue Management"
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>


                        {/* LEFT CONTENT – 8 COLUMNS */}
                        <div className="col-lg-8 col-md-12 text-dark">
                            <h3 style={{ fontWeight: "600", marginBottom: "12px", color: "#038A5F" }}>
                                <b>OTA Management</b>
                            </h3>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                Sonachala provides a powerful OTA (Online Travel Agency) management system designed to help hotels and resorts efficiently manage listings, pricing, and availability across multiple online channels — all from one centralized platform.Our tools ensure real-time updates to room inventory, rates, and promotions, eliminating overbookings and maximizing visibility on leading travel portals. Whether you manage one property or a large chain, our OTA management system simplifies distribution while boosting bookings.</p>
                        </div>



                    </div>
                </div>
            </div>



            <div className="container-fluid p-4" style={{ color: "white", background: "linear-gradient(135deg, #038A5F, #012419)", }} >
                <p>
                    🔄 Centralized control for all OTA listings 📊 Real-time rate & availability synchronization 💹 Dynamic pricing tools to maximize revenue 🌍 Increased visibility across global booking platforms ✅ Automated booking updates to prevent overbooking
                </p>
            </div>


            <div
                style={{
                    height: "450px",
                    marginBottom: "20px"
                }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-start align-items-lg-center">

                        {/* LEFT CONTENT – 8 COLUMNS */}
                        <div className="col-lg-8 col-md-12 text-dark">
                            <h3 style={{ fontWeight: "600", marginBottom: "12px", color: "#038A5F" }}>
                                <b>Online Travel Agent Management</b>
                            </h3>

                            <p style={{ lineHeight: "1.7", opacity: 0.95 }}>
                                Sonachala’s OTA Management solution enables hotels, resorts, and homestays to efficiently manage their presence across multiple online travel agencies from a single, unified platform.Our system updates room rates, availability, and promotions in real-time, ensuring accuracy across all channels while preventing overbookings and missed opportunities. With detailed analytics, revenue optimization tools, and centralized communication, you can grow your bookings and maintain a consistent brand presence across global platforms.</p>



                        </div>

                        {/* RIGHT IMAGE – 4 COLUMNS */}
                        <div className="col-lg-4 col-md-12 text-center">
                            <img
                                src={img8}
                                alt="Revenue Management"
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "contain",
                                    borderRadius: "12px"
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid p-4" style={{ color: "white", background: "linear-gradient(135deg, #038A5F, #012419)", }} >
                <p>
                    🌍 Multi-OTA connectivity from a single dashboard 🔄 Real-time inventory & pricing synchronization 📊 Channel performance reports & analytics 💹 Revenue optimization & promotional tools ✅ Automatic booking updates to prevent double bookings
                </p>
            </div>





            <div className="text-center mt-5 mb-5">
                <h1 ><b>Want to Explore More?</b></h1>
                <p>Visit our official website to browse properties, manage bookings, or become a partner</p>
                <a
                    href="https://sonachala.com"   // 👉 correct main site link podunga
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-block",
                        padding: "12px 30px",
                        background: "linear-gradient(135deg, #038A5F, #012419)",
                        color: "#ffffff",
                        textDecoration: "none",
                        borderRadius: "50px",          // 👈 double side curve
                        fontWeight: "500",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                        transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow = "0 6px 14px rgba(0,0,0,0.25)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
                    }}
                >
                    Go To Main Sonachala Site
                </a>
            </div>




        </>

    );

}



export default Products
