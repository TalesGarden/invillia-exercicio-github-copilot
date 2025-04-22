import React, { useEffect, useState } from 'react';

const ActivityList = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('/api/activities')
            .then(response => response.json())
            .then(data => setActivities(data));
    }, []);

    return (
        <div>
            {activities.map(activity => (
                <div key={activity.id} className="activity">
                    <h3>{activity.name}</h3>
                    <p>Participantes:</p>
                    <ul>
                        {activity.participants.map((participant, index) => (
                            <li key={index}>{participant}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ActivityList;
