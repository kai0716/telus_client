import './SecondPage.scss';
import Section4 from '../../components/Section4/Section4.js'
import Section5 from '../../components/Section5/Section5.js'

export default function SecondPage(props) {

    return (
        <div className='second'>
            <div className="k__wrapper1-left">
                <p className="k__p">Side Nav</p>
            </div>
            <div className='k__wrapper1-mid'>
                <p className="k__p">Section 2</p>
                <Section4 />
            </div>
            <div className='k__wrapper1-right'>
                <Section5 />
            </div>

        </div>
    );
}

