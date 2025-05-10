import ToggleCard from './ToggleCard';

function ToogleSection({ title, elements }) {
    return (
        <div className='my-10p w-65 mx-auto min-width-400'>
            <div className='container-fluid text-center'>
                <h3 className='fs-1 f-title text-primary mb-5p'>{title}</h3>

                <div className='container-fluid text-center mt-10p'>
                    <div className='row gx-5 gy-5 align-items-start'>
                        {
                            elements.map(element => (
                                <ToggleCard key={element.title} {...element} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToogleSection;