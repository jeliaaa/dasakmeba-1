import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../../../ReusableComponents/breadcrumbs/Breadcrumbs'
import { Link } from 'react-router-dom'
import './inbox.scss'

const messages = [
  { id: 1, date: '10-01-2020', time: '11:01', heading: 'სადღეგრძელო', message: `გამოცხადდით ახლავე თორემ ეწვიეთ იხილეთ მეტი  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, perspiciatis enim temporibus ab facere sed earum dicta molestiae harum laborum voluptatum quibusdam rerum voluptatem nisi nihil perferendis ea accusantium deserunt repudiandae alias, itaque quas. Officia, eligendi excepturi accusamus placeat a expedita ea quidem omnis perferendis aspernatur! Eos quidem molestias laboriosam enim officiis modi, aut accusamus quaerat, voluptate reiciendis cumque alias perspiciatis harum ipsam facilis, amet eum porro saepe voluptatem quibusdam et animi. Repudiandae id ipsa dolores molestiae illo cupiditate? Omnis officia dolore distinctio. Omnis tenetur natus qui odio asperiores! Consequuntur dicta ipsum animi ex perspiciatis minima saepe inventore dolore! Assumenda.`, link: true, url: 'https://facebook.com', accept: false },
  { id: 2, date: '10-02-2020', time: '11:01', heading: 'შერჩევა', message: 'გამოცხადდით ახლავე თორემ ეწვიეთ იხილეთ მეტი', link: true, url: 'https://facebook.com', accept: false },
  { id: 3, date: '10-03-2020', time: '11:01', heading: 'პროგრამა', message: 'გამოცხადდით ახლავე თორემ ეწვიეთ იხილეთ მეტი', link: true, url: 'https://facebook.com', accept: false },
  {
    id: 4, date: '10-04-2020', time: '10:21', heading: 'ამის შესახებ', message: `გამოცხადდით ახლავე თორემ 
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae enim repellat similique natus ad architecto impedit in, ut maxime molestiae ipsum. Magni, a?`, link: false, accept: false
  },
  { id: 5, date: '10-05-2021', time: '15:07', heading: 'თქვენი უფლებები', message: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate excepturi minus in beatae rem officia alias assumenda asperiores facilis ullam tenetur natus aperiam hic nihil quos facere, odio voluptatem inventore odit repellendus. Iste est laborum asperiores praesentium nobis delectus laudantium architecto nostrum deleniti quasi, ex sunt aspernatur repudiandae ullam adipisci labore quis tempora sit? Quae aliquid exercitationem expedita, rem officia odit dolor eius quidem iusto autem sunt dolores tenetur omnis fugit incidunt quibusdam, quia eum. Aliquam officiis, animi natus cumque laborum incidunt molestias voluptatum assumenda molestiae quibusdam voluptate eveniet quam quae cum, ipsa asperiores. Quos esse illo aspernatur animi qui dolorum placeat, harum corporis maiores error quibusdam voluptates provident, repudiandae minima alias? Nemo esse alias iure consequuntur minus adipisci maxime consectetur? Recusandae ex eveniet commodi impedit obcaecati tempore provident culpa voluptas, ipsa sit delectus accusantium voluptatem tenetur, perferendis iure voluptates placeat molestias exercitationem, repellat eum. Commodi atque provident dolor explicabo sequi dolorem, facere, ipsum illo ullam eaque minima obcaecati blanditiis suscipit beatae aliquam vel quos quod at quaerat. Laudantium dicta totam expedita, exercitationem fugit illo qui quidem consequatur iusto eligendi error. Temporibus dicta cumque numquam distinctio sunt maiores, tempore nemo ut dolorum. Ipsam corrupti velit vero provident consectetur doloremque.`, link: true, url: 'https://facebook.com', accept: true },
  { id: 6, date: '10-06-2020', time: '11:01', heading: 'ვაკანსიაზე შერჩევა', message: 'გამოცხადდით ახლავე თორემ ეწვიეთ იხილეთ მეტი', link: true, url: 'https://facebook.com', accept: false }
]
const Inbox = () => {
  const [choosen, setChoosen] = useState(messages[messages.length - 1].id);
  const choosenForArray = choosen - 1;
  const handleActive = (id) => {
    setChoosen(id)
  }
  const messagesReversed = messages.slice().reverse();
  return (
    <Container style={{ backgroundColor: '#fff', padding: 20 }}>
      <div className="inbox_wrapper">
        <div className="inbox_left">
          {messagesReversed.map((item, _index) => (
            <div className={`message_left ${item.id === choosen ? 'active' : ''} ${item.id % 2 === 0 && 'choosen'}`} key={_index} onClick={() => { handleActive(item.id) }}>
              <p>{item.heading}</p>
              <p>{item.date}</p>
            </div>
          ))}

        </div>
        <div className="inbox_right">
          <div className="date_of_message">
            <p>{messagesReversed[choosenForArray].date}</p>
            <p>{messagesReversed[choosenForArray].time}</p>
          </div>
          <div className='inbox_right_message'>
            <p>{messagesReversed[choosenForArray].message}</p>
            {messagesReversed[choosenForArray].accept &&
              <div>
                <p>ჩვენ გვჭირდება თქვენი თანხმობა ვაკანსიაზე</p>
                <button>თანხმობა</button>
              </div>
            }
            {messagesReversed[choosenForArray].link &&
              <Link to={messagesReversed[choosenForArray].url} target='blank'>მიყევით ბმულს</Link>
            }
          </div>
        </div>
      </div>
    </Container>
  )
}

export default React.memo(Inbox);