import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        axios.get('/api/experiences')  // Adjust the API endpoint as necessary.
            .then(res => {
                setExperiences(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            {experiences.map((experience, idx) => (
                <div key={idx}>
                    <h2>{experience.title}</h2>
                    <p>{experience.description}</p>
                    <Link to={`/experience/${experience.id}`}>View More</Link>
                </div>
            ))}
        </div>
    );
}

export default Home;
