function Footer({ currentPage, totalPages, onNextPage, onPreviousPage }) {
    return (
        <div className="Footer">
            <button onClick={onPreviousPage}>Prev</button>
            <p>{currentPage} of {totalPages}</p>
            <button onClick={onNextPage}>Next</button>
        </div>
    );
}

export default Footer;