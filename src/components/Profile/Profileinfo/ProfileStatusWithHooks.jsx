import React, {useState, useEffect} from 'react';
import stylesForms from '../../common/FormsControls/FormsControls.module.css';
import styles from './ProfileInfo.module.css';

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
        <div className={styles.statusWrapper}>
            { !editMode &&
                <div>
                    Status: <span className={styles.status} onDoubleClick={activateEditMode}>{props.status || '------'}</span>
                </div>
            }
            { editMode && 
                <div className={styles.wrappInput}>
                    <input onChange={onStatusChange} 
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status} />
                </div>
            }
            <div>
                {props.errorStatus && <div className={stylesForms.formSummaryError}>{props.errorStatus}</div>}
            </div>
        </div>
    )    
}

export default ProfileStatusWithHooks;