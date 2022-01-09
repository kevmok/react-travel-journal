import React from 'react';

const Main = (props) => {
    console.log(props);
    return (
        <section>
            <div className='main'>
                <img src={props.imageUrl} alt='card' className='main--image' />
                <div className='main--info'>
                    <div className='main--location'>
                        <img
                            src='./location-icon.svg'
                            alt='location-icon'
                            className='main--location-icon'
                        />
                        <span className='main--location-country'>
                            {props.location}
                        </span>
                        <a
                            href={props.googleMapsUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='main--location-url'
                        >
                            View on Google Maps
                        </a>
                    </div>
                    <h2 className='main--title'>{props.title}</h2>
                    <p className='main--date'>
                        {props.startDate} - {props.endDate}
                    </p>
                    <p className='main--description'>{props.description}</p>
                </div>
            </div>
            <hr />
        </section>
    );
};

export default Main;
