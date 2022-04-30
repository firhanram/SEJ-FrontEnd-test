import PropTypes from 'prop-types';

function BookItem({ coverUrl, authors, title }) {
    return (
        <div className="relative">
            <img src={coverUrl} alt={title} />
            <h3 className="text-lg font-bold text-slate-800 mt-4">{title}</h3>
            <div className="space-x-2">
                {authors.map((author, index) => (
                    <span className="font-semibold text-slate-400" key={author}>
                        {(index ? ', ' : '') + author}
                    </span>
                ))}
            </div>
        </div>
    );
}

BookItem.propTypes = {
    coverUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BookItem;
