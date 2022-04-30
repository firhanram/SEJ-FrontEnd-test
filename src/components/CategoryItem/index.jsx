import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CategoryItem({ id, name }) {
    return (
        <Link
            to={`/books/category/${id}`}
            className="bg-white border-x border-y border-b-4 border-b-sky-800 flex justify-center items-center rounded w-80 h-24 md:h-28 font-semibold text-slate-800 transform hover:scale-95"
        >
            {name}
        </Link>
    );
}

CategoryItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default CategoryItem;
