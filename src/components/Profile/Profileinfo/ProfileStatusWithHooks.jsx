import React, {useState, useEffect} from 'react';
import styles from '../../common/FormsControls/FormsControls.module.css';

const ProfileStatusWithHooks = (props) => {
    
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            { !editMode &&
                <div>
                    Status: <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
                </div>
            }
            { editMode && 
                <div>
                    <input onChange={onStatusChange} 
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status} />
                </div>
            }
            <div>
                {props.errorStatus && <div className={styles.formSummaryError}>{props.errorStatus}</div>}
            </div>
        </div>
    )    
}

export default ProfileStatusWithHooks;