import PropTypes from 'prop-types';

function SearchBooksInput({ onChange }) {
    return (
        <div className="px-4">
            <div className="w-full max-w-xl mx-auto transform -translate-y-1/2 ">
                <input
                    className="w-full border-transparent shadow-md p-6 rounded-md focus:outline-none t focus:border-slate-900"
                    placeholder="Search Books..."
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
