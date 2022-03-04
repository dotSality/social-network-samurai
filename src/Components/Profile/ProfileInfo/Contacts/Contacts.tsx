import {ContactsType} from '../../Profile';
import React from 'react';
import s from './Contacts.module.css';

export const Contacts = (props: ContactsType) => {

    let keys = Object.keys(props)
    let values = Object.values(props)
    let isRendering = values.some(value => value !== null)

    let contacts = keys.map((key, i) => {
        return <div key={key}>
            {values[i] && <div className={s.link}><b>{key}</b>:
                {<a target={'_blank'} rel={'noreferrer'} href={values[i]!}> {values[i]}</a>}</div>}
        </div>
    })

    return (
        <div className={s.main}>
        {isRendering && <div className={s.container}>
            <b>Contacts: </b>{contacts}
        </div>}
    </div>
    )
}