import PropTypes from 'prop-types';

function Pagination({ onNextPage, onPrevPage, page, totalSizePerPage, totalSize }) {
    return (
        <div className="w-full flex justify-center items-center space-x-2 mt-4">
            <button
                type="button"
                className="font-semibold bg-slate-800 text-white p-2 rounded"
                onClick={() => {
                    if (page !== 1) {
                        onPrevPage();
                    }
                }}
                disabled={page === 1}
            >
                Prev
            </button>
            <div className="text-slate-900">{page}</div>
            <button
                type="button"
                className="font-semibold bg-slate-800 text-white p-2 rounded"
                disabled={totalSizePerPage < totalSize}
                onClick={() => {
                    if (!totalSizePerPage < totalSize) {
                        onNextPage();
                    }
                }}
            >
                Next
            </button>
        </div>
    );
}

Pagination.propTypes = {
    onNextPage: PropTypes.func.isRequired,
    onPrevPage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    totalSizePerPage: PropTypes.number.isRequired,
    totalSize: PropTypes.number.isRequired,
};

export default Pagination;
