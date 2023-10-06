import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import PartnersCard from '../../../../ReusableComponents/partners/PartnersCard';
import LogoPlace from '../../../../assets/logos/logo-placeholder.jpg';
import NonPaginated from '../../../../ReusableComponents/CardsWrap/NonPaginated';

import SparLogo from '../../../../assets/PartnerLogos/Spar.jpg'
import NabijiLogo from '../../../../assets/PartnerLogos/2Nabiji.png'
import MagnitiLogo from '../../../../assets/PartnerLogos/Magniti.jpg'



const NonRegistered = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs />
      <NonPaginated >
        <PartnersCard name={'სპარი'} thumb={SparLogo} img={'https://www.nbi.org.za/wp-content/uploads/2020/07/SPAR-logo.jpg'} link={'1'} />
        <PartnersCard name={'2 ნაბიჯი'}  thumb={NabijiLogo}img={LogoPlace} link={'2'} />
        <PartnersCard name={'მაგნიტი'} thumb={MagnitiLogo} img={'https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/336644755_617276933549041_4395470823678384315_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tFD1rjEs1-wAX9LZJcc&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfBhh5uGdaQPAUY5vvlbGvvwpuKGxruFN-zBQajlpg-nFQ&oe=64ED3BD1'} link={'3'} />
      </NonPaginated>
    </Container>
  )
}

export default NonRegistered