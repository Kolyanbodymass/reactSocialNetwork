import React from'react';
import { createField, Input, Textarea } from './../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import styles from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
            <div><button onClick={() => {}}>save</button></div>
            <div>{error && <div className={styles.formSummaryError}>{error}</div>}</div>
            <div>
                Full Name: {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                Looking for a job? {createField("", "lookingForAJob", [], Input, {type: "checkbox"} ) }
            </div>
            <div>
                My professional skills:
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea ) }
            </div>
            <div>
                About me: 
                {createField("aboutMe", "aboutMe", [], Textarea ) }
            </div>
            <div>
                Contacts: {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        {key}: {createField(key, "contacts." + key, [], Input)}
                    </div>
                })}
            </div>
        </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;