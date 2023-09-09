import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import PartnersCard from '../../../ReusableComponents/partners/PartnersCard';
import { useTranslation } from 'react-i18next';
import jan from "../../../assets/months/jan.png"
import feb from "../../../assets/months/feb.png"
import mar from "../../../assets/months/mar.png"
import apr from "../../../assets/months/Apr.png"
import may from "../../../assets/months/may.png"

const Calendar = () => {
  const { t } = useTranslation();
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs />
      <div className='cards_wrap' >
        <PartnersCard name={t('იანვარი')} thumb={jan} img={jan} link={'jan'} />
        <PartnersCard name={t('თებერვალი')} thumb={feb} img={feb}  link={'feb'} />
        <PartnersCard name={t('მარტი')} thumb={mar} img={mar} link={'mar'} />
        <PartnersCard name={t('აპრილი')} thumb={apr} img={apr} link={'Apr'} />
        <PartnersCard name={t('მაისი')} thumb={may} img={may} link={'May'} />
        <PartnersCard name={t('ივნისი')} thumb={jan} img={jan} link={'June'} />
        <PartnersCard name={t('ივლისი')} thumb={feb} img={feb} link={'July'} />
        <PartnersCard name={t('აგვისტო')} thumb={mar} img={mar} link={'May'} />
        <PartnersCard name={t('სექტემბერი')} thumb={apr} img={apr} link={'May'} />
        <PartnersCard name={t('ოქტომბერი')} thumb={may} img={may} link={'May'} />
        <PartnersCard name={t('ნოემბერი')} thumb={may} img={may} link={'May'} />
        <PartnersCard name={t('დეკემბერი')} thumb={may} img={may} link={'May'} />
      </div>
    </Container>
  )
}

export default Calendar           