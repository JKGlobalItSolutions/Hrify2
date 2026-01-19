


function Form() {


    return(


        <>
        
        <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}
            >
                <div
                    className="card p-4"
                    style={{
                        width: "100%",
                        maxWidth: "600px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.50)",
                    }}
                >
                    <h4 className="text-center mb-4">Submit Your Inquiry</h4>

                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Business Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your business email"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">I am seeking</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="What are you seeking?"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">
                            Give us an overview of your expectations
                        </label>
                        <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Describe your expectations"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn w-100"
                        style={{
                            backgroundColor: "#015670",
                            color: "#ffffff",
                            fontWeight: "500",
                        }}
                    >
                        Submit Inquiry
                    </button>
                </div>
            </div>
        
        
        </>

    )

}



export default Form