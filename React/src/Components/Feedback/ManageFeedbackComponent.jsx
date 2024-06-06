import React, { useState } from 'react';
import AddFeedback from './AddFeedback';
import ViewFeedback from './ViewFeedback';

const ManageFeedbackComponent = ({ view }) => {
    const [currentAction, setCurrentAction] = useState(null);

    const renderActionComponent = () => { console.log(view);
        if (view === 'admin') {
            switch (currentAction) {
                case 'view':
                    return <ViewFeedback />;
                default:
                    return null;
            }
        } else {
            switch (currentAction) {
                case 'add':
                    return <AddFeedback />;
                default:
                    return null;
            }
        }
    };

    return (
        <div>
            <h2>Manage Feedback</h2>
            <div>
                {view === 'admin' ? (
                    <button onClick={() => setCurrentAction('view')}>View Feedback</button>
                ) : (
                    <button onClick={() => setCurrentAction('add')}>Add Feedback</button>
                )}
            </div>
            {renderActionComponent()}
        </div>
    );
};

export default ManageFeedbackComponent;
