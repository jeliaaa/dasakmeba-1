import React from 'react'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'



import banner from "../../../assets/Marketing.png"

const Article = () => {
  const { id } = useParams();
  return (
    <Container className='newsSingle_wrapper' style={{ backgroundColor: '#fff', padding: 30 }}>
      <Breadcrumbs />
      <div className='news_head'>
        <img src={banner} alt="" />
        <div>
          <h2>რა არის რეკლამა?</h2>
          <h6>21.05.2023</h6>
        </div>
      </div>
      <div>
        <p>
          ჩვენ და ყველა ჩვენგანს ყოველდღიურად უწევს რეკლამის ნახვა, ანუ როგორც სპეციალისტები იტყვიან განვიცდით განუწყვეტელ სარეკლამო დასხივებას შინ და გარეთ, რადიოს, ტელევიზიის მეშვეობით, ტრანსპორტში, სუპერმარკეტებში, ბაზრობებზე, ქუჩაში და ყველგან.
        </p>
        <p>
          რეკლამა არის კომუნიკაცია მწარმოებელსა და მომხმარებელს შორის.
        </p>
        <h4>რეკლამის სტანდარტული განმარტება შეიცავს ექვს კომპონენტს:</h4>
        <ul>
          <li>რეკლამა - ესაა კომუნიკაციის მატერიალურად ანაზღაურებული ფორმა;</li>
          <li>რეკლამაში მოტანილ ინფორმაციაში იდენტიფიცირებულია სპონსორის ვინაობა;</li>
          <li>რეკლამა, ცდილობს იმოქმედოს მომხმარებელზე, აიძულოს იგი განახორციელოს გარკვეული ქმედება(შეიძინოს საქონელი).</li>
          <li>სარეკლამო მიმართვა განთავსებული უნდა იყოს მასობრივი ინფორმაციის ამა თუ იმ საშუალებაში;</li>
          <li>რეკლამამ უნდა მიაღწიოს პოტენციური მომხმარებლის მაქსიმალურ აუდიტორიამდე;</li>
          <li>რეკლამა არის მასობრივი კომუნიკაციის ერთ - ერთი ფორმა, ამიტომ იგი არაპერსონიფიცირებულია.</li>
        </ul>

        <h4>რა არის გრანდიოზული რეკლამა?</h4>
        <p>
          რეკლამა, რომელსაც მოაქვს გარკვეული კომერციული შეტყობინება, იზიდავს მომხმარებლის ყურადღებას, ხელს უწყობს პროდუქციის გასაღებას და დიდი ხნით ამახსოვრდება მომხმარებელს. გრანდიოზულმა რეკლამამ უნდა გაუძლოს დროს. მაგალითად ათეული წლის განმავლობაში მუშაობს მარლბოროს კოვბოის სახე მომხმარებელზე და მისი მეშვეობით მარლბორო დღესაც ყველაზე კარგად იყიდება მსოფლიოში, ასევე, ათეული წლები შემორჩა ფოლკსვაგენის  რეკლამა;
        </p>
        <p>იმისთვის, რომ მაყურებელს კარგად დაამახსოვრდეს რეკლამა, გრანდიოზულ რეკლამაში გამოიყენება მრავალი შემოქმედებითი ხერხი: იუმორი, სექსუალური მოტივები, საზოგადოებისთვის ცნობილი პიროვნებები (სელებრითი), ცხოველები ან გამოგონილი პერსონალები, ასევე ანიმაციური პერსონაჟები.</p>

        <h4>სამი ვეშაპი, რომელზედაც დგას გრანდიოზული რეკლამა.</h4>
        <p>რა ხდის რეკლამას გრანდიოზულს?<br></br>
          რატომ ხდება რეკლამა კლასიკა?<br></br>
          როგორ ჩაიბეჭდება რეკლამა მომხმარებლის შემოქმედებაში ?<br></br>
          რატომ გრძელდება  სარეკლამო კამპანია წლების განმავლობაში ? ზოგი კი მალე ქრება ?<br></br></p>
        <p>გრანდიოზული რეკლამის შესაქმნელად ყველა ფაქტორი ერთიანდება სამ ძირითად კატეგორიად-სტრატეგია</p>

        <h4>შემოქმედებითი საწყისი და შესრულების კულტურა</h4>
        <p>სტრატეგია, ანუ რა გინდა რომ თქვა? ყველა  გრანდიოზული რეკლამა უნდა იყოს სტრატეგიულად ჟღერადი, ის უნდა იყოს ორიენტირებული გარკვეულ აუდიტორიაზე, ემსახურებოდეს სპეციფიკურ მიზნებს, უნდა ემყარებოდეს გენიალურ იდეას! ეხებოდეს მომხმარებლის მნიშვნელოვან ინტერესებს და განთავსებული  იყოს მედიის იმ საშუალებაში, რომელიც ყველაზე ეფექტურია ამ აუდიტორიასთან სასაუბროდ. რეკლამის წარმატების საზომია, თუ რამდენად ეფექტურად აღწევს რეკლამა დასახულ მიზნებს: იქნება ეს გაყიდვების გაზრდა, რეკლამის შინაარსის დამახსოვრება, თუ მომხმარებლების დამოკიდებულების შეცვლა რეკლამირებულ პროდუქტზე.</p>
        <p>
          შემოქმედებითი საწყისი, ანუ როგორ უნდა თქვა? (ტაქტიკა)  ესაა ცენტრალური იდეა იმისა რა გზით უნდა მიიპყროს რეკლამამ თქვენი ყურადღება მომხმარებლის მეხსიერებაში რა ხერხებს გამოიყენებ, როგორ მიიტან სარეკლამო მიმართვას მიზნობრივ აუდიტორიამდე არანაკლებ მნიშვნელოვანია, ვიდრე ის, რაც უნდა თქვა.<br></br>
          შესრულების კულტურა_ გრანდიოზული რეკლამის მესამე მნიშვნელოვანი კომპონენტია რა გინდ კარგი იდეა ედოს საფუძვლად რეკლამას, ის ვერ გახდება გრანზიოზული ცუდად შესრულების შემთხვევაში.
        </p>

      </div>
    </Container>
  )
}

export default Article






