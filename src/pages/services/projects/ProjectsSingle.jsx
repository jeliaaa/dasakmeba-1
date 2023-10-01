import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import './pr.scss'
import Banner from '../../../assets/BannerAssets/Screenshot 2023-10-01 234601.png'
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react'
import { AppBar, Box, Tab, Tabs } from '@mui/material';
import IMGab from '../../../assets/programmes/Screenshot 2023-10-02 001111.png'
import IMGprofile from '../../../assets/programmes/profile-icon-png-899.png'
import './pr.scss'
import { Link } from 'react-router-dom';
import { QuestionMark } from '@mui/icons-material';
import FacebookShareButton from '../../../ReusableComponents/fbShare/FacebookSharingButton';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
function ProjectsSingle() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container style={{ backgroundColor: '#fff', padding: 20 }}>
      <Breadcrumbs />
      <div className='project_single_landing_wrapper'>
        <img className='w-100' src={Banner} alt='baner' />
        <div className='heading'>
          <h1>დასახელება</h1>
        </div>
        <AppBar position="static" className='wrapper AppBar'>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label={"მაძიებელს"} {...a11yProps(0)} />
            <Tab label={"ორგანიზაციას"} {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>

        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>

        </TabPanel>
        <div className="about">
          <h2>პროგრამის შესახებ</h2>
          <div>
            <img src={IMGab} alt="..." />
            <section>
              <p>Vitae, illo doloribus qui eligendi maiores illum, dolorum facilis omnis consequuntur ducimus, perspiciatis iure nam pariatur placeat. Architecto mollitia pariatur dolor quasi incidunt. Voluptate fuga corporis ullam similique ipsa, natus numquam, placeat debitis repellat minima nihil ex expedita praesentium dolorum excepturi, assumenda quas doloremque voluptas neque nostrum ipsum labore dicta minus soluta! Architecto placeat officiis doloribus! Dicta nobis est ex explicabo, numquam nostrum esse assumenda, alias laudantium cum autem dignissimos similique saepe vitae unde, id ratione nam ipsa quas quia minus. Veniam numquam ipsa doloremque minima ab. Eius commodi veniam, rem dignissimos numquam blanditiis ipsam atque?</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sit, numquam id non a voluptatibus reprehenderit dolore placeat odio, eos ipsam illum quisquam.</p>
            </section>
          </div>
        </div>
        <div className="advantages">
          <h2 className='w-100 mb-3'>უპირატესობები</h2>
          <div className='advantage'>
            <img src={IMGprofile} alt='...' />
            <div>
              <h4>გამოცდილება</h4>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className='advantage'>
            <img src={IMGprofile} alt='...' />
            <div>
              <h4>გამოცდილება</h4>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className='advantage'>
            <img src={IMGprofile} alt='...' />
            <div>
              <h4>გამოცდილება</h4>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className='advantage'>
            <img src={IMGprofile} alt='...' />
            <div>
              <h4>გამოცდილება</h4>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
        <div className="policy">
          <h2>ჩართის წესი და პირობები</h2>
          <div>
            <h5>მოთხოვნები</h5>
            <Accordion className='programme_accordion ' >
              <Accordion.Header>
                მოთხოვნები
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad, quod sunt, perspiciatis cupiditate sint placeat ex necessitatibus aliquid quae sequi totam. Pariatur beatae nam ipsam necessitatibus deserunt ea minus animi non dolores ipsum, expedita distinctio ratione quis quas dignissimos velit magnam quasi. Eum perspiciatis tempore obcaecati maiores inventore consequuntur maxime voluptas eligendi, eos quia aut doloremque reiciendis deleniti cum.
              </Accordion.Body>
            </Accordion>
          </div>
          <div>
            <h5>მონაწილეთა შერჩევა</h5>
            <Accordion className='programme_accordion ' >
              <Accordion.Header>
                მონაწილეთა შერჩევა
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad, quod sunt, perspiciatis cupiditate sint placeat ex necessitatibus aliquid quae sequi totam. Pariatur beatae nam ipsam necessitatibus deserunt ea minus animi non dolores ipsum, expedita distinctio ratione quis quas dignissimos velit magnam quasi. Eum perspiciatis tempore obcaecati maiores inventore consequuntur maxime voluptas eligendi, eos quia aut doloremque reiciendis deleniti cum.
              </Accordion.Body>
            </Accordion>
          </div>
          <div>
            <h5 className='mb-3'>ხანგრლივობა</h5>
            <section className='time'>
              <img src={IMGprofile} alt='...' />
              <div>
                <h4>გამოცდილება</h4>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </section>
          </div>
        </div>
        <div className="professions">
          <h2>პროფესიები/მიმართულებები</h2>
          <Accordion className='programme_accordion ' >
            <Accordion.Header>
              პროფესია/ტრენინგი/მიმართულება
            </Accordion.Header>
            <Accordion.Body>
              <img src="https://picsum.photos/70" alt="..." />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad, quod sunt, perspiciatis cupiditate sint placeat ex necessitatibus aliquid quae sequi totam. Pariatur beatae nam ipsam necessitatibus deserunt ea minus animi non dolores ipsum, expedita distinctio ratione quis quas dignissimos velit magnam quasi. Eum perspiciatis tempore obcaecati maiores inventore consequuntur maxime voluptas eligendi, eos quia aut doloremque reiciendis deleniti cum.
              </div>
              <Link download to={'./dummy.pdf'} target='_blank' className='fa-solid fa-file fa-xl' />
            </Accordion.Body>
          </Accordion>
        </div>
        <div className="call">
          <h1>CALL TO ACTION</h1>
        </div>
        <div className="partners">
          <h2>პროგრამის პარტნიორები</h2>
          <div>
            <img src="https://placehold.co/100" alt="..." />
            <img src="https://placehold.co/100" alt="..." />
            <img src="https://placehold.co/100" alt="..." />
            <img src="https://placehold.co/100" alt="..." />
          </div>
        </div>
        <div className="faq">
          <h2>ხშირად დასმული კითხვები</h2>
          <div className='inpGroup'>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header> <div className='q_wrap'><QuestionMark /></div>  რას წარმოადგენს აჭარის დასაქმების სააგენტო?</Accordion.Header>
                <Accordion.Body>
                  აჭარის ავტონომიური რესპუბლიკის დასაქმების სააგენტო არის საჯარო სამართლის იურიდიულ პირი,
                  რომელიც შეიქმნა აჭარის ავტონომიური რესპუბლიკის მთავრობის 2011 წლის N43 დადგენილების
                  საფუძველზე და შედის აჭარის ავტონომიური რესპუბლიკის ჯანმრთელობისა და სოციალური დაცვის
                  სამინისტროს სისტემაში.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header><div className='q_wrap'><QuestionMark /></div> როგორ მივიღოთ კონსულტაცია?</Accordion.Header>
                <Accordion.Body>
                  რავიცი აბა, მარტივად, ერთი ზარით.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header><div className='q_wrap'><QuestionMark /></div> როგორ გავაკეთოთ სალტო?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="formSubmit w-100">
          <Link to={'form'}><button>შეავსეთ ფორმა</button></Link>
        </div>
        <div className='w-100'>
          <FacebookShareButton />
        </div>
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr /><hr /><hr />
      <hr /><hr /><hr /><hr /><hr /><hr />
      <div className='project_single_landing_wrapper'>
        <img className='w-100' src={Banner} alt='baner' />
        <div className='heading'>
          <h1>დასახელება</h1>
        </div>
        <div className="about">
          <h2>პროგრამის შესახებ</h2>
          <div>
            <section>
              <p>Vitae, illo doloribus qui eligendi maiores illum, dolorum facilis omnis consequuntur ducimus, perspiciatis iure nam pariatur placeat. Architecto mollitia pariatur dolor quasi incidunt. Voluptate fuga corporis ullam similique ipsa, natus numquam, placeat debitis repellat minima nihil ex expedita praesentium dolorum excepturi, assumenda quas doloremque voluptas neque nostrum ipsum labore dicta minus soluta! Architecto placeat officiis doloribus! Dicta nobis est ex explicabo, numquam nostrum esse assumenda, alias laudantium cum autem dignissimos similique saepe vitae unde, id ratione nam ipsa quas quia minus. Veniam numquam ipsa doloremque minima ab. Eius commodi veniam, rem dignissimos numquam blanditiis ipsam atque?</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sit, numquam id non a voluptatibus reprehenderit dolore placeat odio, eos ipsam illum quisquam.</p>
            </section>
            <img src={IMGab} alt="..." />
          </div>
        </div>
        <AppBar position="static" className='wrapper secondAppBar'>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label={"მაძიებელს"} {...a11yProps(0)} />
            <Tab label={"ორგანიზაციას"} {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>

        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>

        </TabPanel>
        <div className="advantages secondAdvantages">
          <h2 className='w-100 mb-3'>უპირატესობები</h2>
          <div className='advantage'>
            <img src={IMGprofile} alt='...' />
            <div>
              <h4>გამოცდილება</h4>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className='advantage'>
            <img src={IMGprofile} alt='...' />
            <div>
              <h4>გამოცდილება</h4>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className='advantage'>
            <img src={IMGprofile} alt='...' />
            <div>
              <h4>გამოცდილება</h4>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className='advantage'>
            <img src={IMGprofile} alt='...' />
            <div>
              <h4>გამოცდილება</h4>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
        <div className="policy secondPolicies">
          <h2>ჩართის წესი და პირობები</h2>
          <div className="policiesSecond">
            <section>
              <h5>მოთხოვნები</h5>
              <Accordion className='programme_accordion ' >
                <Accordion.Header>
                  მოთხოვნები
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad, quod sunt, perspiciatis cupiditate sint placeat ex necessitatibus aliquid quae sequi totam. Pariatur beatae nam ipsam necessitatibus deserunt ea minus animi non dolores ipsum, expedita distinctio ratione quis quas dignissimos velit magnam quasi. Eum perspiciatis tempore obcaecati maiores inventore consequuntur maxime voluptas eligendi, eos quia aut doloremque reiciendis deleniti cum.
                </Accordion.Body>
              </Accordion>
            </section>
            <section>
              <h5>მონაწილეთა შერჩევა</h5>
              <Accordion className='programme_accordion ' >
                <Accordion.Header>
                  მონაწილეთა შერჩევა
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad, quod sunt, perspiciatis cupiditate sint placeat ex necessitatibus aliquid quae sequi totam. Pariatur beatae nam ipsam necessitatibus deserunt ea minus animi non dolores ipsum, expedita distinctio ratione quis quas dignissimos velit magnam quasi. Eum perspiciatis tempore obcaecati maiores inventore consequuntur maxime voluptas eligendi, eos quia aut doloremque reiciendis deleniti cum.
                </Accordion.Body>
              </Accordion>
            </section>
          </div>
          <div>
            <h5 className='mb-3'>ხანგრლივობა</h5>
            <section className='time'>
              <img src={IMGprofile} alt='...' />
              <div>
                <h4>გამოცდილება</h4>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </section>
          </div>
        </div>
        <div className="professions secondProfessions">
          <h2>პროფესიები/მიმართულებები</h2>
          <section>
            <img src="https://picsum.photos/200"  alt="..." />
            <div className='textOfProfession'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad, quod sunt, perspiciatis cupiditate sint placeat ex necessitatibus aliquid quae sequi totam. Pariatur beatae nam ipsam necessitatibus deserunt ea minus animi non dolores ipsum, expedita distinctio ratione quis quas dignissimos velit magnam quasi. Eum perspiciatis tempore obcaecati maiores inventore consequuntur maxime voluptas eligendi, eos quia aut doloremque reiciendis deleniti cum.
            </div>
          </section>
          <section>
            <img src="https://picsum.photos/200" alt="..." />
            <div className='textOfProfession'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad, quod sunt, perspiciatis cupiditate sint placeat ex necessitatibus aliquid quae sequi totam. Pariatur beatae nam ipsam necessitatibus deserunt ea minus animi non dolores ipsum, expedita distinctio ratione quis quas dignissimos velit magnam quasi. Eum perspiciatis tempore obcaecati maiores inventore consequuntur maxime voluptas eligendi, eos quia aut doloremque reiciendis deleniti cum.
            </div>
          </section>
        </div>
        <div className="call">
          <h1>CALL TO ACTION</h1>
        </div>
        <div className="partners partnersSecond">
          <h2>პროგრამის პარტნიორები</h2>
          <div>
            <img src="https://placehold.co/300" alt="..." />
            <img src="https://placehold.co/300" alt="..." />
            <img src="https://placehold.co/300" alt="..." />
            <img src="https://placehold.co/300" alt="..." />
          </div>
        </div>
        <div className="faq faqSecond">
          <h2>ხშირად დასმული კითხვები</h2>
          <div className='inpGroup'>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header> <div className='q_wrap'><QuestionMark /></div>  რას წარმოადგენს აჭარის დასაქმების სააგენტო?</Accordion.Header>
                <Accordion.Body>
                  აჭარის ავტონომიური რესპუბლიკის დასაქმების სააგენტო არის საჯარო სამართლის იურიდიულ პირი,
                  რომელიც შეიქმნა აჭარის ავტონომიური რესპუბლიკის მთავრობის 2011 წლის N43 დადგენილების
                  საფუძველზე და შედის აჭარის ავტონომიური რესპუბლიკის ჯანმრთელობისა და სოციალური დაცვის
                  სამინისტროს სისტემაში.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header><div className='q_wrap'><QuestionMark /></div> როგორ მივიღოთ კონსულტაცია?</Accordion.Header>
                <Accordion.Body>
                  რავიცი აბა, მარტივად, ერთი ზარით.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header><div className='q_wrap'><QuestionMark /></div> როგორ გავაკეთოთ სალტო?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="formSubmit secondFormSubmit w-100">
          <Link to={'form'}><button>შეავსეთ ფორმა</button></Link>
        </div>
        <div className='w-100'>
          <FacebookShareButton />
        </div>
      </div>
    </Container>
  );
}

export default ProjectsSingle;
