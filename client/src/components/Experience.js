import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Experience() {
    const { id } = useParams();
    const [experience, setExperience] = useState(null);

    useEffect(() => {
        axios.get(`/api/experiences/${id}`)  // Adjust the API endpoint as necessary.
            .then(res => {
                setExperience(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, [id]);

    return (
        <div>
            {experience && (
                <>
                    <h1>{experience.title}</h1>
                    <p>{experience.description}</p>
                    {/* Add any other fields you want to display here */}
                </>
            )}
        </div>
    );
}

export default Experience;
