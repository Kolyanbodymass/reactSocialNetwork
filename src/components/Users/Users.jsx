import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={`${styles.selectedPage} ${props.currentPage === p && styles.selectedPageActive}`} onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="avatar" />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disable={props.followingInProgress.some(id => id === u.id)} onClick={() => { 
                                props.toggleFollowingProgress(true, u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "da5df115-2b84-47f0-b70d-e4f27c164b10"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });

                            }}>Unfollow</button>
                            : <button disable={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "da5df115-2b84-47f0-b70d-e4f27c164b10"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id) 
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });                               
                                
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;