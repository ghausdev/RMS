import React, { useState } from 'react';
import AddStaff from './AddStaff';
import ViewStaff from './ViewStaff';
import EditStaff from './EditStaff';
import DeleteStaff from './DeleteStaff';

const ManageStaff = () => {
    const [currentAction, setCurrentAction] = useState(null);

    const renderActionComponent = () => {
        switch (currentAction) {
            case 'add':
                return <AddStaff />;
            case 'view':
                return <ViewStaff />;
            case 'edit':
                return <EditStaff />;
            case 'delete':
                return <DeleteStaff />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Manage Staff</h1>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('add')}>
                    Add Staff
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('view')}>
                    View Staff
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('edit')}>
                    Edit Staff
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('delete')}>
                    Delete Staff
                </div>
            </div>
            {renderActionComponent()}
        </div>
    );
};

export default ManageStaff;
