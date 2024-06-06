import React, { useState } from 'react';
import AddItem from './AddItem';
import ViewItems from './ViewItems';
import EditItem from './EditItem';
import DeleteItem from './DeleteItem';

const ManageItems = () => {
    const [currentAction, setCurrentAction] = useState(null);

    const renderActionComponent = () => {
        switch (currentAction) {
            case 'add':
                return <AddItem />;
            case 'view':
                return <ViewItems />;
            case 'edit':
                return <EditItem />;
            case 'delete':
                return <DeleteItem />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Manage Items</h1>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('add')}>
                    Add Item
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('view')}>
                    View Items
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('edit')}>
                    Edit Item
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('delete')}>
                    Delete Item
                </div>
            </div>
            {renderActionComponent()}
        </div>
    );
};

export default ManageItems;
