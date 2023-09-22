import React, { useState } from 'react'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import { Checkbox, FormControlLabel, InputLabel, NativeSelect, Select } from '@mui/material'
import './profile.scss'
const Profile = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    return (
        <div className="profile" >
            <Breadcrumbs />
            <div className='profile_wrapper'>
                <div className='sections'>
                    <div className="user">
                        <h3 className='label_of_sections'>მომხმარებელი</h3>
                        <h6>რეგისტრირებულია 19.02.2015</h6>
                    </div>
                    <hr />

                    <div className='profile_photo'>
                        {selectedFile ? (
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Selected File Preview"
                                style={{ maxWidth: '250px', maxHeight: '250px' }}
                            />
                        ) :
                            <img
                                src={'https://picsum.photos/250'}
                                alt="Selected File Preview"
                            />
                        }
                        <input className='button_of_profile' type="file" onChange={handleFileChange} />
                    </div>
                    <div className="information">
                        <div className='info'>
                            <InputLabel>მომხმარებელი</InputLabel>
                            <input placeholder='alekoaleko' disabled />
                        </div>
                        <div className='info'>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                პროფილის სტატუსი
                            </InputLabel>
                            <NativeSelect
                                defaultValue={0}
                                inputProps={{
                                    name: 'პროფილის სტატუსი',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={0}></option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </div>
                        <div className='info'>
                            <FormControlLabel control={<Checkbox />} label="ოჯახში დასაქმება" />
                        </div>
                        <div className='info'>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                მომხმარებლის სტატუსი
                            </InputLabel>
                            <NativeSelect
                                defaultValue={0}
                                inputProps={{
                                    name: 'მომხმარებლის სტატუსი',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={0}></option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
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
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                მუნიციპალიტეტი
                            </InputLabel>
                            <NativeSelect
                                defaultValue={0}
                                inputProps={{
                                    name: 'მუნიციპალიტეტი',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={0}></option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </div>
                        <div className='info'>
                            <InputLabel>სქესი</InputLabel>
                            <input placeholder='სქესი' disabled />
                        </div>
                        <div className='info'>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        ოჯახური მდგომარეობა
                            </InputLabel>
                            <NativeSelect
                                defaultValue={0}
                                inputProps={{
                                    name: 'ოჯახური მდგომარეობა',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={0}></option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
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