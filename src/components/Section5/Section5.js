import './Section5.scss';
import image1 from '../../assets/images/image0.jpg';
export default function Section5(props) {
    return (
        <div className="k__section5">
            <div className='k-s5__wrapper-top'>
                <p>HU</p>
            </div>

            <div className='k-s5__wrapper-bottom'>
                <div className='k-s5__more-video'>
                    <p className='k-s5__title' style={{ width: "209px" }}>Continue Watching</p>

                    <div className='k-s5__continue'>
                        <img className='k-s5__continue-img' src={image1} />

                        <div className='k-s5__continue-info'>
                            <p>Breaking Bad</p>
                            <p style={{ color: "rgba(131, 131, 131, 1)" }}>S3 EP4</p>
                        </div>
                    </div>

                    <div className='k-s5__continue'>
                        <img className='k-s5__continue-img' src={image1} />
                        <div className='k-s5__continue-info'>
                            <p>Serverance</p>
                            <p style={{ color: "rgba(131, 131, 131, 1)" }}>S1 EP2</p>
                        </div>
                    </div>

                </div>

                <div className='k-s5__collection'>
                    <p className='k-s5__title' style={{ width: "209px" }}>View collections you’ve liked by</p>

                    <div className='k-s5__continue'>
                        <img className='k-s5__continue-img' src={image1} />

                        <div className='k-s5__continue-info'>
                            <p>Breaking Bad</p>
                            <p style={{ color: "rgba(131, 131, 131, 1)" }}>S3 EP4</p>
                        </div>
                    </div>

                    <div className='k-s5__continue'>
                        <img className='k-s5__continue-img' src={image1} />
                        <div className='k-s5__continue-info'>
                            <p>Serverance</p>
                            <p style={{ color: "rgba(131, 131, 131, 1)" }}>S1 EP2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}