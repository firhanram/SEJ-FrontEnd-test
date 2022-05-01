import PropTypes from 'prop-types';

function SearchBooksInput({ onChange }) {
    return (
        <div className="px-4">
            <div className="w-full max-w-xl mx-auto transform -translate-y-1/2 ">
                <input
                    className="w-full border-transparent shadow-md p-6 rounded-md focus:outline-none"
                    placeholder="Search Books by Author or Title..."
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

SearchBooksInput.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default SearchBooksInput;
