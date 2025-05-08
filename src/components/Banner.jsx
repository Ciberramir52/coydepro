function Banner({ title, description, cto, img }) {
    const bannerStyle = {
        backgroundImage: `url(${img})`
    }
    return (
        <div style={bannerStyle} className='hero-banner mt-5p w-75 mx-auto'>
            <div className='container hero-content d-flex flex-column gap-lg-5 justify-content-center align-items-center'>
                <h1 className='display-4 fw-bold text-light f-title'>{title}</h1>
                <p className='lead text-light fs-3 mt-lg-5 mb-lg-5'>
                    {description}
                </p>
                <a href='#start-analysis' className='btn btn-secondary btn-lg w-auto px-5 py-3 text-primary fs-3 fw-bold f-title'>{cto}</a>
            </div>
        </div>
    );
}

export default Banner;