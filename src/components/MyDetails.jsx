import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const MyDetails = () => {
    return (
        <div className="w-full bg-orange-200 text-black font-semibold px-5 py-2 mt-4 text-xs lg:text-xl text-center transition duration-200 ease-in hover:bg-gray-300 cursor-pointer">
            <div>
               <Link to="/about"><span className="px-1">Made with</span><span className="text-red-600 text-2xl"><FavoriteIcon /></span><span className="px-2">by Pooja Verma</span></Link>
            </div>
        </div>
    );
};

export default MyDetails;