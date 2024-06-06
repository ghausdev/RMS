import React, { useState } from 'react';
import AddEventReservation from './AddEventReservation';
import ViewEventReservations from './ViewEventReservations';
import DeleteEventReservation from './DeleteEventReservation';

const ManageEventReservations = () => {
    const [currentAction, setCurrentAction] = useState(null);

    const renderActionComponent = () => {
        switch (currentAction) {
            case 'add':
                return <AddEventReservation />;
            case 'view':
                return <ViewEventReservations />;
            case 'delete':
                return <DeleteEventReservation />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Manage Event Reservations</h1>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('add')}>
                    Book Event Reservation
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('view')}>
                    View Event Reservations
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('delete')}>
                    Cancel Event Reservation
                </div>
            </div>
            {renderActionComponent()}
        </div>
    );
};

export default ManageEventReservations;
