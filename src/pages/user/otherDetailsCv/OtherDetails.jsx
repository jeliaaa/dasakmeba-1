import React, { useRef, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import '../cv/cv.scss'
import { InputLabel, NativeSelect } from '@mui/material';
import { Element } from 'react-scroll';


const OtherDetails = () => {
    var Scroll = require("react-scroll");
    var scroller = Scroll.scroller;
    const form = useRef(null);
    const [add, setAdd] = useState(false);
    const [add2, setAdd2] = useState(false);

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
        setAdd(prev => !prev)
        setAdd2(prev => !prev)
    };
    const handleRemove = (id, index) => {
        setArrayOfCvForm((prevArray) => {
            const newArray = [...prevArray]; // Create a shallow copy
            newArray[id] = newArray[id].filter((_item, _index) => _index !== index); // Filter out the item at the specified index
            return newArray;
        });
    }
    const handleNav = (e) => {
        scroller.scrollTo(e.target.value)
        console.log(e.target.value, typeof e.target.value);
    }


    useEffect(() => {
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
                <div className="navigation">
                    <div className='amount_wrapper'>
                        <InputLabel>
                            ნავიგაცია
                        </InputLabel>
                        <NativeSelect
                            defaultValue={10}
                            inputProps={{
                                name: 'filterAmount',
                                id: 'uncontrolled-native',
                            }}
                            onChange={(e) => handleNav(e)}
                        >
                            <option value={'a'}>განათლება</option>
                            <option value={'b'}>გამოცდილება</option>
                        </NativeSelect>
                    </div>
                </div>
                <h4>განათლება</h4>
                <Element name="a" className=" cv_wrap education">
                    <CvBox id={0} inputs={true} inputsVal1={"სასწავლებელი :"} inputsVal2={"ფაკულტეტი :"} inputsVal3={"პერიოდი :"} />
                    {add && <form action="POST" ref={form} onSubmit={(e) => handleFormSubmit(e, 0)}>
                        <input required name="field1" type="text" placeholder="სასწავლებელი" />
                        <input required name="field2" type="text" placeholder="ფაკულტეტი" />
                        <input required name="field3" type="text" placeholder="პერიოდი" />
                        <button type="submit">შენახვა</button>
                    </form>}
                    <button onClick={() => setAdd((prev) => !prev)}>დამატება +</button>
                </Element>
                <h4>გამოცდილება</h4>
                <Element name="b" className="cv_wrap experience" >
                    <CvBox id={1} inputs={true} inputsVal1={"ობიექტი :"} inputsVal2={"პოზიცია :"} inputsVal3={"პერიოდი :"} />
                    {add2 && <form action="POST" ref={form} onSubmit={(e) => handleFormSubmit(e, 1)}>
                        <input required name="field1" type="text" placeholder="ობიექტი(კომპანია)" />
                        <input required name="field2" type="text" placeholder="პოზიცია" />
                        <input required name="field3" type="text" placeholder="პერიოდი" />
                        <button type="submit">შენახვა</button>
                    </form>}
                    <button onClick={() => setAdd2((prev) => !prev)}>დამატება +</button>
                </Element>
            </div>
        </Container >
    );
};

export default OtherDetails;
