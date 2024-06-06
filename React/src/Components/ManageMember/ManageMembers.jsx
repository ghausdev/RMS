import React, { useState } from 'react';
import AddMember from './AddMember';
import ViewMembers from './ViewMembers';
import EditMember from './EditMember';
import DeleteMember from './DeleteMember';

const ManageMembers = () => {
    const [currentAction, setCurrentAction] = useState(null);

    const renderActionComponent = () => {
        switch (currentAction) {
            case 'add':
                return <AddMember />;
            case 'view':
                return <ViewMembers />;
            case 'edit':
                return <EditMember />;
            case 'delete':
                return <DeleteMember />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Manage Members</h1>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('add')}>
                    Add Member
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('view')}>
                    View Members
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('edit')}>
                    Edit Member
                </div>
                <div style={{ border: '1px solid black', padding: '10px', cursor: 'pointer' }} onClick={() => setCurrentAction('delete')}>
                    Delete Member
                </div>
            </div>
            {renderActionComponent()}
        </div>
    );
};

export default ManageMembers;
