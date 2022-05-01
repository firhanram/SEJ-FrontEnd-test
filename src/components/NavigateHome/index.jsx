import ArrowBack from 'assets/images/icons8-arrow-pointing-left-24.png';
import { Link } from 'react-router-dom';

function NavigateHome() {
    return (
        <div className="flex items-center space-x-5">
            <Link to="../" className="rounded-full p-2 bg-white inline-flex items-center">
                <img src={ArrowBack} alt="Arrow Back" />
            </Link>
            <div className="text-xl font-semibold text-white">Home</div>
        </div>
    );
}

export default NavigateHome;
