import PropTypes from 'prop-types';

function BookItem({ coverUrl, authors, title, onClick }) {
    return (
        <div className="relative">
            <div
                role="presentation"
                className="cursor-pointer transition-opacity duration-150 hover:opacity-70"
                onClick={onClick}
            >
                <img src={coverUrl} alt={title} />
            </div>
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

BookItem.defaultProps = {
    onClick: () => {},
};

BookItem.propTypes = {
    coverUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func,
};

export default BookItem;
