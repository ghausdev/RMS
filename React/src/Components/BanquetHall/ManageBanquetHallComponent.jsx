import React, { useState } from 'react';
import AddBanquetHall from './AddBanquetHall';
import ViewBanquetHalls from './ViewBanquetHalls';
import DeleteBanquetHall from './DeleteBanquetHall';
import EditBanquetHall from './EditBanquetHall';

const ManageBanquetHallComponent = () => {
    const [currentAction, setCurrentAction] = useState(null);

    const renderActionComponent = () => {
        switch (currentAction) {
            case 'add':
                return <AddBanquetHall />;
            case 'view':
                return <ViewBanquetHalls />;
            case 'delete':
                return <DeleteBanquetHall />;
            case 'edit':
                return <EditBanquetHall />;
            default:
                return null;
        }
    };


    return (
        <div>

           
            <h1>Manage Banquet Halls</h1>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('add')}>
                    Add Banquet Hall
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('view')}>
                    View Banquet Halls
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('delete')}>
                    Delete Banquet Hall
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('edit')}>
                    Edit Banquet Hall
                </div>
            </div>
            {renderActionComponent()}
        </div>
    );
};

export default ManageBanquetHallComponent;
