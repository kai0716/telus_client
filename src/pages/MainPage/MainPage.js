import './MainPage.scss';
import Section4 from '../../components/Section4/Section4.js'
import Section5 from '../../components/Section5/Section5.js'

export default function MainPage(props) {

    return (
        <div className='main'>
            <p className="k-main__p">Side Nav</p>

            <div className='k-main__wrapper-mid'>
                <p className="k-main__p" style={{ height: "90px", width: "1025px", backgroundColor: "rgba(165, 165, 165, 1)", paddingBottom: "20px" }}>Section 2</p>
                <p className="k-main__p" style={{ height: "68px", width: "1025px", backgroundColor: "rgba(165, 165, 165, 1)", paddingBottom: "50px" }}>Section 3</p>

                <Section4 />
            </div>
            <div className='k-main__wrapper-right'>
                <Section5 />
            </div>

        </div >
    );
}

