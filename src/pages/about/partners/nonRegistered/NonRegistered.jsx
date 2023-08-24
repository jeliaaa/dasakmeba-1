import React from 'react'
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import PartnersCard from '../../../../ReusableComponents/partners/PartnersCard';

const NonRegistered = () => {
  return (
    <Container style={{ backgroundColor: '#fff', padding: '20px 20px', borderRadius: '8px' }}>
      <Breadcrumbs />
      <div style={{display: "flex", gap:"25px", flexWrap: 'wrap'}}>
        <PartnersCard name={'სპარი'} thumb={'https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/333198385_444155004537211_7436731210742236385_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=9UgXT_UEWVEAX_0dTq3&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCt9lFjt3HqCOtmJddacNhdAEro7O4ZT158OJJCbbVWEg&oe=64EBDB2B'} img={'https://www.nbi.org.za/wp-content/uploads/2020/07/SPAR-logo.jpg'} link={'https://spargeorgia.com/'} />
        <PartnersCard name={'2 ნაბიჯი'} thumb={'https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/326257179_901347921057343_4774559920630020829_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=iXe9zqHXTo0AX-9DZRp&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCPKTpWxM6PyraTieQQPXH7LYLWqFUq02e3rYykv63x-Q&oe=64ED11A6'} img={'https://play-lh.googleusercontent.com/XAjt3ZFyNvfIXuK1MDD9Q9Bpoy6JerpJM1S1Ae-SEEPEkb7JTh_CkJDYw0-WxeIjpVA'} link={'https://2nabiji.ge/ge'} />
        <PartnersCard name={'მაგნიტი'} thumb={'https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/298819273_3239880956286628_1881853742596918248_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=I4AHNSvtXOIAX-DBeW-&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfCpwLbUeKhsjZsTwrlSHJ1c6WkHIS4cldao-CAS4_11Ew&oe=64EC8ADB'} img={'https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/336644755_617276933549041_4395470823678384315_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tFD1rjEs1-wAX9LZJcc&_nc_ht=scontent.ftbs6-2.fna&oh=00_AfBhh5uGdaQPAUY5vvlbGvvwpuKGxruFN-zBQajlpg-nFQ&oe=64ED3BD1'} link={'http://magniti.ge/'} />
      </div>
    </Container>
  )
}

export default NonRegistered