import React, { useState } from 'react';
import AddReservation from './AddReservation';
import DeleteReservation from './DeleteReservation';
import ViewReservation from './ViewReservation';

const ManageReservationComponent = () => {
    const [currentAction, setCurrentAction] = useState(null);

    const renderActionComponent = () => {
        switch (currentAction) {
            case 'add':
                return <AddReservation />;
            case 'delete':
                return <DeleteReservation />;
            case 'view':
                return <ViewReservation />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Manage Reservations</h1>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('add')}>
                    Add Reservation
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('delete')}>
                    Delete Reservation
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('view')}>
                    View Reservations
                </div>
            </div>
            {renderActionComponent()}
        </div>
    );
};

export default ManageReservationComponent;
