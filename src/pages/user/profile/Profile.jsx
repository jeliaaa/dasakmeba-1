import React from 'react'
import { Card, Container, Form } from 'react-bootstrap'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import { Checkbox, FormControlLabel, Input, InputLabel, Select } from '@mui/material'
import './profile.scss'
const Profile = () => {
    return (
        <div className="profile" >
            <Breadcrumbs />
            <div className='profile_wrapper'>
                <div className='sections'>
                    <h3 className='label_of_sections'>მომხმარებელი</h3>
                    <hr />
                    <div className='profile_photo'>
                        <img src="https://picsum.photos/250" alt="profile" />
                        <div>
                            <button>ატვირთვა</button>
                            <p>ფოტოს რეზოლუცია სასურველია იყოს 250px (1:1) </p>
                        </div>
                    </div>
                    <div className="information">
                        <div className='info'>
                            <InputLabel>მომხმარებელი</InputLabel>
                            <input placeholder='alekoaleko' disabled />
                        </div>
                        <div className='info'>
                            <InputLabel>პროფილის სტატუსი</InputLabel>
                            <Select defaultValue={0}>
                                <option value={0}>a</option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </Select>
                        </div>
                        <div className='info'>
                            <FormControlLabel control={<Checkbox />} label="ოჯახში დასაქმება" />
                        </div>
                        <div className='info'>
                            <InputLabel>მომხმარებლის სტატუსი</InputLabel>
                            <Select defaultValue={0}>
                                <option value={0}>a</option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className='sections'>
                    <h3 className='label_of_sections'>პირადი ინფორმაცია</h3>
                    <hr />
                    <div className="information">
                        <div className='info'>
                            <InputLabel>სახელი</InputLabel>
                            <input placeholder='სახელი' disabled />
                        </div>
                        <div className='info'>
                            <InputLabel>გვარი</InputLabel>
                            <input placeholder='გვარი' disabled />
                        </div>
                        <div className='info'>
                            <InputLabel>პირადი ნომერი</InputLabel>
                            <input placeholder='პირადი ნომერი' disabled />
                        </div>
                        <div className='info'>
                            <InputLabel>დაბადების თარიღი</InputLabel>
                            <input placeholder='დაბადების თარიღი' disabled />
                        </div>
                        <div className='info'>
                            <InputLabel>მუნიციპალიტეტი</InputLabel>
                            <Select defaultValue={0}>
                                <option value={0}>a</option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </Select>
                        </div>
                        <div className='info'>
                            <InputLabel>სქესი</InputLabel>
                            <input placeholder='სქესი' disabled />
                        </div>
                        <div className='info'>
                            <InputLabel>ოჯახური მდგომარეობა</InputLabel>
                            <Select defaultValue={0}>
                                <option value={0}>a</option>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className='sections'>
                    <h3 className='label_of_sections'>მისამართი</h3>
                    <hr />
                    <div className="information">
                        <div className='info'>
                            <InputLabel>რეგისტრირებული მისამართი</InputLabel>
                            <input placeholder='რეგისტრირებული მისამართი' disabled />
                        </div>
                        <div className='info'>
                            <InputLabel>ფაქტობრივი მისამართი</InputLabel>
                            <input placeholder='ფაქტობრივი მისამართი' />
                        </div>
                        <div className='info'>
                            <InputLabel>საფოსტო ინდექსი</InputLabel>
                            <input placeholder='საფოსტო ინდექსი' disabled />
                        </div>
                    </div>
                </div>
                <div className='sections'>
                    <h3 className='label_of_sections'>კონტაქტი</h3>
                    <hr />
                    <div className="information">
                        <div className='info'>
                            <InputLabel>ელ.ფოსტა</InputLabel>
                            <input placeholder='ელ.ფოსტა' disabled />
                        </div>
                        <div className='info'>
                            <InputLabel>ტელ.ნომერი</InputLabel>
                            <input placeholder='ნომერი' disabled />
                        </div>
                        <div className='info'>
                            <InputLabel>სახლის ნომერი</InputLabel>
                            <input placeholder='სახლის ნომერი' />
                        </div>
                        <div className='info'>
                            <InputLabel>სათადარიგო ნომერი</InputLabel>
                            <input placeholder='ნომერი' />
                        </div>
                        <div className='info'>
                            <InputLabel>სოც.ქსელი</InputLabel>
                            <input type='url' placeholder='სოც.ქსელი' />
                        </div>
                        <div className='info'>
                            <InputLabel>linkedIn</InputLabel>
                            <input placeholder='linkedIn' />
                        </div>

                    </div>
                </div>
                <button>შენახვა</button>
            </div>
        </div>
    )
}

export default Profile