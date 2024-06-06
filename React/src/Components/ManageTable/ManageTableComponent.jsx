import React, { useState } from 'react';
import AddTable from './AddTable';
import DeleteTable from './DeleteTable';
import EditTable from './EditTable';
import ViewTable from './ViewTable';

const ManageTableComponent = () => {
    const [currentAction, setCurrentAction] = useState(null);

    const renderActionComponent = () => {
        switch (currentAction) {
            case 'add':
                return <AddTable />;
            case 'delete':
                return <DeleteTable />;
            case 'edit':
                return <EditTable />;
            case 'view':
                return <ViewTable />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Manage Tables</h1>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('add')}>
                    Add Table
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('delete')}>
                    Delete Table
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('edit')}>
                    Edit Table
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('view')}>
                    View Table
                </div>
            </div>
            {renderActionComponent()}
        </div>
    );
};

export default ManageTableComponent;
