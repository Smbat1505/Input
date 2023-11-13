import React from 'react';
import './Input.css';


type InputType = {
    value: string;
    onChange: ()=> void;
}
export const Input: React.FC<InputType> = ({value, onChange}) => {
    return (
        <div className={'input-group'}>
            <input onChange={onChange} value={value} className={'input'} required type="text" id={'username'}/>
            <label className={'label'} htmlFor="username">Username</label>
        </div>
    );
}


