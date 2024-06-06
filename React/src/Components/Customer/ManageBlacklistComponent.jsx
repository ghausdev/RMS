import React, { useState } from 'react';
import AddBlacklistCustomer from './AddBlacklistCustomer';
import ViewBlacklistCustomers from './ViewBlacklistCustomers';
import DeleteBlacklistCustomer from './DeleteBlacklistCustomer';

const ManageBlacklistCustomers = () => {
    const [currentAction, setCurrentAction] = useState(null);

    const renderActionComponent = () => {
        switch (currentAction) {
            case 'add':
                return <AddBlacklistCustomer />;
            case 'view':
                return <ViewBlacklistCustomers />;
            case 'delete':
                return <DeleteBlacklistCustomer />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Manage Blacklisted Customers</h1>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('add')}>
                    Add Blacklisted Customer
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('view')}>
                    View Blacklisted Customers
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('delete')}>
                    Delete Blacklisted Customer
                </div>
            </div>
            {renderActionComponent()}
        </div>
    );
};

export default ManageBlacklistCustomers;
