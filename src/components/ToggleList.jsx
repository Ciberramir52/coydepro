function ToggleList({ header, list, cardID }) {
    return (
        <div className='my-10p w-50 mx-auto min-width-400'>
            <div className="card">
                <h5
                    className="card-header bg-primary text-light f-title fs-1 text-center py-4 cursor-pointer"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${cardID}`}
                    aria-expanded="false"
                    aria-controls={`${cardID}`}
                >
                    {header}
                </h5>
                <div className="collapse card-body border-top border-light border-3 bg-primary text-light py-4" id={`${cardID}`}>
                    <div className="container w-70 d-flex align-items-center min-width-400">
                        <ul className="list-unstyled star-list">
                            {
                                list.map((element, index) => (
                                    <li key={element} className={`fs-2 ${index !== 0 ? 'mt-2' : ''}`}>{element}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToggleList;