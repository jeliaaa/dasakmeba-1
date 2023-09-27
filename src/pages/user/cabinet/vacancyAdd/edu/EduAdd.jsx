import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import Breadcrumbs from '../../../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import ProgressComponent from '../../../../../ReusableComponents/progress/ProgressComponent';
import { Checkbox, FormControl, FormControlLabel, Input, InputLabel, NativeSelect, TextareaAutosize } from '@mui/material';
import ReactSelect from 'react-select';
import '../vac/vac.scss'
const EduAdd = () => {
  const Scroll = require('react-scroll');
  const scroll = Scroll.animateScroll;
  const [currentStep, setCurrentStep] = useState(1);
  const [check, setCheck] = useState(false)
  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
    scroll.scrollToTop();
  };
  const stepBack = () => {
    setCurrentStep(prevStep => prevStep - 1);
    scroll.scrollToTop();
  }
  const [langArr, setLangArr] = useState([]);
  const handleAddLang = () => {
    setLangArr(prev => [...prev, langArr.length + 1])
  }
  const handleRemoveLang = (id) => {
    setLangArr(prev => prev.filter(lang => lang !== id))
  }
  const [programmeArr, setProgrammeArr] = useState([]);
  const handleProgrammeAdd = () => {
    setProgrammeArr(prev => [...prev, programmeArr.length + 1])
  }
  const handleRemoveProgramme = (id) => {
    setProgrammeArr(prev => prev.filter(lang => lang !== id))
  }
  useEffect(() => {
    if (currentStep > 3) {
      window.location.href = '/user/cabinet/'
    }
  })
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <Container style={{ backgroundColor: '#fff', padding: 20 }}>
      <Breadcrumbs />
      <ProgressComponent currentStep={currentStep} />
      {currentStep === 1 ? <div className='page first'>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', rowGap: 30 }}>
          <FormControl className='col-md-7'>
            <InputLabel>
              თემა/დასახელება
            </InputLabel>
            <Input placeholder='პოზიციის დასახელება' />
          </FormControl>
          <FormControl className='col-md-4'>
            <InputLabel>
              ტიპი
            </InputLabel>
            <NativeSelect
              defaultValue={0}
              inputProps={{
                name: 'filterAmount',
                id: 'uncontrolled-native',
              }}
            >
              <option value={'a'}>განათლება</option>
              <option value={'b'}>გამოცდილება</option>
              <option value={'c'}>ენები</option>
              <option value={'d'}>უნარები</option>
              <option value={'e'}>მოწმობა</option>
              <option value={'f'}>სიმაღლე</option>
            </NativeSelect>
          </FormControl>
          <FormControlLabel className='col-md-4' control={<Checkbox />} label='ანონიმური' />
          <FormControl className='col-md-12'>
            <ReactSelect
              isMulti
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="სოციალური ჯგუფი"
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <ReactSelect
              isMulti
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="სოციალური ჯგუფი"
            />
          </FormControl>
          <FormControl className='col-md-12'>
            <InputLabel style={{ zIndex: 1 }}>
              პოზიცია
            </InputLabel>
            <NativeSelect
              defaultValue={0}
              inputProps={{
                name: 'filterAmount',
                id: 'uncontrolled-native',
              }}
            >
              <option value={'a'}>განათლება</option>
              <option value={'b'}>გამოცდილება</option>
              <option value={'c'}>ენები</option>
              <option value={'d'}>უნარები</option>
              <option value={'e'}>მოწმობა</option>
              <option value={'f'}>სიმაღლე</option>
            </NativeSelect>
          </FormControl>
          <FormControl className='col-md-4'>
            <InputLabel>
              ქვეყანა
            </InputLabel>
            <NativeSelect
              defaultValue={0}
              inputProps={{
                name: 'filterAmount',
                id: 'uncontrolled-native',
              }}
            >
              <option value={'a'}>განათლება</option>
              <option value={'b'}>გამოცდილება</option>
              <option value={'c'}>ენები</option>
              <option value={'d'}>უნარები</option>
              <option value={'e'}>მოწმობა</option>
              <option value={'f'}>სიმაღლე</option>
            </NativeSelect>
          </FormControl>
          <FormControl className='col-md-5'>
            <InputLabel>
              მუნიციპალიტეტი
            </InputLabel>
            <NativeSelect
              defaultValue={0}
              inputProps={{
                name: 'filterAmount',
                id: 'uncontrolled-native',
              }}
            >
              <option value={'a'}>განათლება</option>
              <option value={'b'}>გამოცდილება</option>
              <option value={'c'}>ენები</option>
              <option value={'d'}>უნარები</option>
              <option value={'e'}>მოწმობა</option>
              <option value={'f'}>სიმაღლე</option>
            </NativeSelect>
          </FormControl>
          <div className='col-md-5'>
            <InputLabel>განცხადების პერიოდი</InputLabel>
            <FormControl className='col-md-5' style={{ marginRight: 15 }}>
              <Input className='col-md-12' type='date' />
            </FormControl>
            <FormControl className='col-md-6'>
              <Input className='col-md-12' type='date' />
            </FormControl>
          </div>
          <div className='col-md-3'>
            <FormControlLabel control={<Checkbox style={{ height: 10 }} checked={check} />} onClick={() => setCheck(prev => !prev)} label='ფასიანი' />
            <FormControl className='col-md-12'><Input disabled={!check} placeholder='ფასი' /></FormControl>
          </div>
          <div className='col-md-5'>
            <InputLabel>სწავლების პერიოდი</InputLabel>
            <FormControl className='col-md-5' style={{ marginRight: 15 }}>
              <Input className='col-md-12' type='date' />
            </FormControl>
            <FormControl className='col-md-6'>
              <Input className='col-md-12' type='date' />
            </FormControl>
          </div>
          <FormControl className='col-md-6'>
            <InputLabel>ხანგრძლივობა</InputLabel>
            <Input disabled type='number' />
          </FormControl>
          <FormControl className="col-md-12">
            <label>პროგრამის აღწერა</label>
            <TextareaAutosize cols={30} minRows={8} />
          </FormControl>
          <FormControl className="col-md-12">
            <label>მსმენელთა კატეგორია</label>
            <TextareaAutosize cols={30} minRows={8} />
          </FormControl>
          <FormControl className="col-md-12">
            <label>წარსადგენი დოკუმენტაცია</label>
            <TextareaAutosize cols={30} minRows={8} />
          </FormControl>
        </form>
      </div>
        : currentStep === 2 ? <div className='page second'>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', rowGap: 30 }}>
            <div className='col-md-3'>
              <InputLabel>
                ასაკი
              </InputLabel>
              <FormControl className='col-md-5' style={{ marginRight: 15 }}><Input placeholder='დან' type='number' /></FormControl>
              <FormControl className='col-md-5'><Input placeholder='მდე' type='number' /></FormControl>
            </div>
            <FormControl className='col-md-2'>
              <InputLabel>
                სქესი
              </InputLabel>
              <NativeSelect
                defaultValue={0}
                inputProps={{
                  name: 'filterAmount',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={'a'}>განათლება</option>
                <option value={'b'}>გამოცდილება</option>
                <option value={'c'}>ენები</option>
                <option value={'d'}>უნარები</option>
                <option value={'e'}>მოწმობა</option>
                <option value={'f'}>სიმაღლე</option>
              </NativeSelect>
            </FormControl>
            <FormControl className='col-md-3'>
              <InputLabel>
                განათლება
              </InputLabel>
              <NativeSelect
                defaultValue={0}
                inputProps={{
                  name: 'filterAmount',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={'a'}>განათლება</option>
                <option value={'b'}>გამოცდილება</option>
                <option value={'c'}>ენები</option>
                <option value={'d'}>უნარები</option>
                <option value={'e'}>მოწმობა</option>
                <option value={'f'}>სიმაღლე</option>
              </NativeSelect>
            </FormControl>
            <FormControl className='col-md-3'>
              <InputLabel>
                სამუშაო გამოცდილება (თვე)
              </InputLabel>
              <Input type='number' />
            </FormControl>
            <div className='languages col-md-12'>
              <h2>ენები</h2>
              <hr />
              <div className='col-md-12'>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>ენა</th>
                      <th>დონე</th>
                    </tr>
                  </thead>
                  <tbody>
                    {langArr.map((lang) => (
                      <tr>
                        <td>
                          <FormControl style={{ width: "80%" }}>
                            <NativeSelect
                              defaultValue={0}
                              inputProps={{
                                name: 'filterAmount',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={'a'}>ქართ</option>
                              <option value={'b'}>რუსული</option>
                              <option value={'c'}>ინგლისური</option>
                              <option value={'d'}>გერმანული</option>
                            </NativeSelect>
                          </FormControl>
                        </td>
                        <td>
                          <FormControl style={{ width: "80%" }}>
                            <NativeSelect
                              defaultValue={0}
                              inputProps={{
                                name: 'filterAmount',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={'a'}>კარგად</option>
                              <option value={'b'}>არც ისე</option>
                              <option value={'c'}>ისე</option>
                            </NativeSelect>
                          </FormControl>
                        </td>
                        <button onClick={() => handleRemoveLang(lang)} className='fa-solid fa-trash' style={{ border: "none" }}></button>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <button onClick={() => handleAddLang()} style={{ border: 'none', padding: 5 }}>დამატება + </button>
              </div>
            </div><div className='programmes col-md-12'>
              <h2>კომპიუტერული პროგრამები</h2>
              <hr />
              <div className='col-md-12'>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>პროგრამა</th>
                      <th>დონე</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programmeArr.map((programme) => (
                      <tr>
                        <td>
                          <FormControl style={{ width: "80%" }}>
                            <NativeSelect
                              defaultValue={0}
                              inputProps={{
                                name: 'filterAmount',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={'a'}>ქართ</option>
                              <option value={'b'}>რუსული</option>
                              <option value={'c'}>ინგლისური</option>
                              <option value={'d'}>გერმანული</option>
                            </NativeSelect>
                          </FormControl>
                        </td>
                        <td>
                          <FormControl style={{ width: "80%" }}>
                            <NativeSelect
                              defaultValue={0}
                              inputProps={{
                                name: 'filterAmount',
                                id: 'uncontrolled-native',
                              }}
                            >
                              <option value={'a'}>კარგად</option>
                              <option value={'b'}>არც ისე</option>
                              <option value={'c'}>ისე</option>
                            </NativeSelect>
                          </FormControl>
                        </td>
                        <button onClick={() => handleRemoveProgramme(programme)} className='fa-solid fa-trash' style={{ border: "none" }}></button>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <button onClick={() => handleProgrammeAdd()} style={{ border: 'none', padding: 5 }}>დამატება + </button>
              </div>
            </div>

          </form>
        </div>
          : <div className='page first'>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', rowGap: 30 }}>
              <FormControl className='col-md-2'>
                <InputLabel>
                  სახელი
                </InputLabel>
                <Input placeholder='' />
              </FormControl>
              <FormControl className='col-md-3'>
                <InputLabel>
                  გვარი
                </InputLabel>
                <Input placeholder='' />
              </FormControl>
              <FormControl className='col-md-3'>
                <InputLabel>
                  ტელეფონი
                </InputLabel>
                <Input type='number' placeholder='' />
              </FormControl>
              <FormControl className='col-md-3'>
                <InputLabel>
                  ელ.ფოსტა
                </InputLabel>
                <Input type='email' placeholder='' />
              </FormControl>
              <FormControl className='col-md-12'>
                <InputLabel>
                  მისამართი
                </InputLabel>
                <Input placeholder='' />
              </FormControl>
              <FormControl className='col-md-12'>
                <label>
                  ორგანიზაციის შესახებ
                </label>
                <textarea cols={30} rows={10} />
              </FormControl>
            </form>
          </div>
      }
      <div className='mt-5'>
        <button className='btn btn-success' onClick={stepBack} disabled={currentStep === 1} style={{ marginRight: 10 }}>უკან</button>
        <button className='btn btn-success' type='submit' onClick={nextStep}>{currentStep === 3 ? 'დასრულება' : "შემდეგი"}</button>
      </div>
    </Container>
  )
}

export default EduAdd