import React, { useState } from 'react';
import ViewCustomers from './ViewCustomers';
import DeleteCustomer from './DeleteCustomer';

const ManageCustomers = () => {
    const [currentAction, setCurrentAction] = useState(null);

    const renderActionComponent = () => {
        switch (currentAction) {
            case 'view':
                return <ViewCustomers />;
            case 'delete':
                return <DeleteCustomer />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Manage Customers</h1>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('view')}>
                    View Customers
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('delete')}>
                    Delete Customer
                </div>
            </div>
            {renderActionComponent()}
        </div>
    );
};

export default ManageCustomers;
