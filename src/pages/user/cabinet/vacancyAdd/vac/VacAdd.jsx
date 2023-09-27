import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import Breadcrumbs from '../../../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import ProgressComponent from '../../../../../ReusableComponents/progress/ProgressComponent';
import { Checkbox, FormControl, FormControlLabel, Input, InputLabel, NativeSelect, TextareaAutosize } from '@mui/material';
const VacAdd = () => {
  const Scroll = require('react-scroll');
  const scroll = Scroll.animateScroll;
  const [currentStep, setCurrentStep] = useState(1);
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
    if(currentStep > 3){
      window.location.href = '/user/cabinet/'
    }
  })
  return (
    <Container style={{ backgroundColor: '#fff', padding: 20 }}>
      <Breadcrumbs />
      <ProgressComponent currentStep={currentStep} />
      {currentStep === 1 ? <div className='page first'>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', rowGap: 30 }}>
          <FormControl className='col-md-5'>
            <InputLabel>
              პოზიციის დასახელება
            </InputLabel>
            <Input placeholder='პოზიციის დასახელება' />
          </FormControl>
          <FormControl className='col-md-3'>
            <InputLabel>
              ვაკანსიის ტიპი
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
          <FormControl className='col-md-3'>
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
              <Input className='col-md-12' disabled placeholder='dgevandeli' />
            </FormControl>
            <FormControl className='col-md-6'>
              <Input className='col-md-12' type='date' />
            </FormControl>
          </div>

          <FormControl className='col-md-3'>
            <InputLabel>
              განაკვეთი
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
          <div className='col-md-12'>
            <InputLabel>ანაზღაურება</InputLabel>
            <Input style={{ width: 'fit-content', marginRight: 20 }} placeholder='დან' type='number' />
            <Input style={{ width: 'fit-content' }} placeholder='მდე' type='number' />
          </div>
          <div className='col-md-5'>
            <InputLabel>სამუშაოს პერიოდი</InputLabel>
            <FormControl className='col-md-5' style={{ marginRight: 15 }}>
              <Input className='col-md-12' type='date' />
            </FormControl>
            <FormControl className='col-md-6'>
              <Input className='col-md-12' type='date' />
            </FormControl>
          </div>
          <div className='col-md-3'>
            <InputLabel>ხანგრძლივობა</InputLabel>
            <FormControl className='col-md-12'><Input disabled placeholder='რაღაც' /></FormControl>
          </div>
          <FormControl className='col-md-3'>
            <InputLabel>ვაკანტური ადგილი</InputLabel>
            <Input type='number' />
          </FormControl>
          <div className="col-md-6">
            <FormControl>
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label={'ანონიმურად'}
              />
            </FormControl>
            <FormControl>
              <FormControlLabel
                value="start"
                control={<Checkbox />}
                label={'სტუდენტების ხელშეწყობა'}
              />
            </FormControl>
          </div>
          <FormControl className="col-md-12">
            <InputLabel>
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
          <FormControl className="col-md-12">
            <label>პოზიციის აღწერა</label>
            <textarea disabled cols="30" rows="7"></textarea>
            <NativeSelect
              style={{ marginTop: 20 }}
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
          <FormControl className="col-md-12">
            <label>უფლება-მოვალეობები</label>
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
            <div className='col-md-12'>
              <h2>უნარჩვევები</h2>
              <hr />
              <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: 25 }}>
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='blablablbabla1' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='blablablbabla12' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='blablablbabla3' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='blablablbabla4' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='blablablbabla5' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='blablablbabla6' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='blablablbabla7' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='blablablbabla8' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='blablablbabla9' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='blablablbabla0' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='blablablbabla111' />
              </div>
            </div>
            <div className='col-md-12'>
              <h2>მოწმობა</h2>
              <hr />
              <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: 25 }}>
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='A' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='A' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='A' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='A' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='A' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='A' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='A' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='A' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='A' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='A' />
                <FormControlLabel className='col-md-5' control={<Checkbox />} label='B' />
              </div>
            </div>
            <textarea className='col-md-12' cols="30" rows="10" placeholder='დამატებითი მოთხოვნები' />
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
    </Container >
  )
}

export default VacAdd