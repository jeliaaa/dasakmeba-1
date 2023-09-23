import React, { useRef, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import './cv.scss'


const CV = () => {
    const form = useRef(null);

    // Initialize arrayOfCvForm with an array of empty objects
    const [arrayOfCvForm, setArrayOfCvForm] = useState([[], [], [], [], [], []]);

    const handleFormSubmit = (event, id) => {
        event.preventDefault();

        // Access the form element using the ref
        let formElement = event.target;

        // Map through the form's children (inputs) and retrieve their values
        const inputValues = Array.from(formElement.children)
            .filter((child) => child.tagName === 'INPUT' || 'SELECT')
            .reduce((values, input) => {
                values[input.name] = input.value;
                return values;
            }, {});

        // Update the specific element in arrayOfCvForm
        setArrayOfCvForm((prevArray) => {
            const newArray = [...prevArray];
            newArray[id] = [...newArray[id], inputValues];
            return newArray;
        });
    };
    const handleRemove = (id, index) => {
        setArrayOfCvForm((prevArray) => {
            const newArray = [...prevArray]; // Create a shallow copy
            newArray[id] = newArray[id].filter((_item, _index) => _index !== index); // Filter out the item at the specified index
            return newArray;
        });
    }
    useEffect(() => {
        // Log the updated arrayOfCvForm
        console.log('Updated arrayOfCvForm:', arrayOfCvForm);
    }, [arrayOfCvForm]);

    const CvBox = ({ inputs, select, id, inputsVal1, inputsVal2, inputsVal3, selectVal1, selectVal2, inputVal }) => {
        return (
            arrayOfCvForm[id].map((item, _index) => (
                select ? <div className='cvBox'>
                    <div>
                        <p>{selectVal1}{item.field1}</p>
                        <p>{selectVal2}{item.field2}</p>
                    </div>
                    <button className='fa-solid fa-remove' onClick={() => handleRemove(id, _index)}></button>
                </div> : inputs ? <div className='cvBox'>
                    <div>
                        <p>{inputsVal1}{item.field1}</p>
                        <p>{inputsVal2}{item.field2}</p>
                        <p>{inputsVal3}{item.field3}</p>
                    </div>
                    <button className='fa-solid fa-remove' onClick={() => handleRemove(id, _index)}></button>
                </div> : <div className='cvBox'>
                    <p>{inputVal}{item.field1}</p>
                    <button className='fa-solid fa-remove' onClick={() => handleRemove(id, _index)}></button>
                </div>
            ))

        )
    }
    return (
        <Container style={{ backgroundColor: '#fff', padding: 20 }}>
            <Breadcrumbs />
            <div className="cv_wrapper">
                <h4>განათლება</h4>
                <div className=" cv_wrap education">
                    <CvBox id={0} inputs={true} inputsVal1={"სასწავლებელი :"} inputsVal2={"ფაკულტეტი :"} inputsVal3={"პერიოდი :"} />
                    <form action="POST" ref={form} onSubmit={(e) => handleFormSubmit(e, 0)}>
                        <input required name="field1" type="text" placeholder="სასწავლებელი" />
                        <input required name="field2" type="text" placeholder="ფაკულტეტი" />
                        <input required name="field3" type="text" placeholder="პერიოდი" />
                        <button type="submit">შენახვა</button>
                    </form>
                </div>
                <h4>გამოცდილება</h4>
                <div className="cv_wrap experience">
                    <CvBox id={1} inputs={true} inputsVal1={"ობიექტი :"} inputsVal2={"პოზიცია :"} inputsVal3={"პერიოდი :"} />
                    <form action="POST" ref={form} onSubmit={(e) => handleFormSubmit(e, 1)}>
                        <input required name="field1" type="text" placeholder="ობიექტი(კომპანია)" />
                        <input required name="field2" type="text" placeholder="პოზიცია" />
                        <input required name="field3" type="text" placeholder="პერიოდი" />
                        <button type="submit">შენახვა</button>
                    </form>
                </div>
                <div className="cv_wrap languages">
                    <CvBox id={2} select={true} selectVal1={"ენა :"} selectVal2={"დონე :"} />
                    <form action="POST" ref={form} onSubmit={(e) => handleFormSubmit(e, 2)}>
                        <select name="field1" defaultValue={0} required placeholder='ენა'>
                            <option value={''}>ენა</option>
                            <option value={"რუსული"}>რუსული</option>
                            <option value={"ინგლისური"}>ინგლისური</option>
                            <option value={"ფრანგული"}>ფრანგული</option>
                        </select>
                        <select name="field2" defaultValue={0} required placeholder='დონე'>
                            <option value={''}>დონე</option>
                            <option value={"ძალიან კარგად"}>ძალიან კარგად</option>
                            <option value={"კარგად"}>კარგად</option>
                            <option value={"საშუალოდ"}>საშუალოდ</option>
                        </select>

                        <button type="submit">შენახვა</button>
                    </form>
                </div>
                <h4>პირადი მონაცემები</h4>
                <div className="cv_wrap positives">
                    <CvBox id={3} />
                    <form action="POST" ref={form} onSubmit={(e) => handleFormSubmit(e, 3)}>
                        <input type="text" placeholder='უნარი' required name='field1' />
                        <button type="submit">შენახვა</button>
                    </form>
                </div>
                <div className="cv_wrap license">
                    <CvBox id={4} select={true} selectVal1={"მოწმობა :"} />
                    <form action="POST" ref={form} onSubmit={(e) => handleFormSubmit(e, 4)}>
                        <select name="field1" defaultValue={0} required placeholder='მოწმობა'>
                            <option value={''}>მოწმობა</option>
                            <option value={"A"}>A</option>
                            <option value={"B"}>B</option>
                            <option value={"C"}>C</option>
                        </select>
                        <button type='submit'>შენახვა</button>
                    </form>
                </div>
                <div className="cv_wrap height">
                    <CvBox id={5} inputVal={"სიმაღლე :"} />
                    <form action="POST" ref={form} onSubmit={(e) => handleFormSubmit(e, 5)}>
                        <input type="number" placeholder='სიმაღლე' required name='field1' />
                        <button type="submit">შენახვა</button>
                    </form>
                </div>

            </div>
        </Container >
    );
};

export default CV;
