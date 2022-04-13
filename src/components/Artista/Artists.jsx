import artist from '../../assets/img/artist.png';

const Artists = () => {
  return (
    <section className="page-section portfolio bg-secundary" id="artists">
            <div className="container">
                {/*<!-- Portfolio Section Heading-->*/}
                <h2 className="page-section-heading text-center text-uppercase text-black mb-0">Artistas</h2>
                {/*<!-- Icon Divider -->*/}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-microphone"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/*<!-- Portfolio Grid Items-->*/}
                <div className="row justify-content-center">
                    {/*<!-- Portfolio Item 1 -->*/}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" >
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={artist} alt="..." />
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 2 -->*/}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" >
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={artist} alt="..." />
                        </div>
                    </div>
                    {/*<!-- Portfolio Item 3 -->*/}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" >
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={artist} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
                  
           
        </section>
    );
};

export default Artists;
