import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import PartnersCard from '../../../ReusableComponents/partners/PartnersCard';
import { useTranslation } from 'react-i18next';

const Calendar = () => {
  const { t } = useTranslation();
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs />
      <div style={{ display: "flex", gap: "25px", flexWrap: 'wrap' }}>
        <PartnersCard name={t('jan')} img={'https://www.nbi.org.za/wp-content/uploads/2020/07/SPAR-logo.jpg'} link={'jan'} />
        <PartnersCard name={t('feb')} img={'https://play-lh.googleusercontent.com/XAjt3ZFyNvfIXuK1MDD9Q9Bpoy6JerpJM1S1Ae-SEEPEkb7JTh_CkJDYw0-WxeIjpVA'} link={'feb'} />
        <PartnersCard name={t('mar')} img={'https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/336644755_617276933549041_4395470823678384315_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tFD1rjEs1-wAX9LZJcc&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfBhh5uGdaQPAUY5vvlbGvvwpuKGxruFN-zBQajlpg-nFQ&oe=64ED3BD1'} link={'mar'} />
      </div>
    </Container>
  )
}

export default Calendar  