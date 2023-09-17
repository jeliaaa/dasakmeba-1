import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../../ReusableComponents/breadcrumbs/Breadcrumbs';
import { Container } from 'react-bootstrap';

const ProfesiogramaSingle = () => {
  const { id } = useParams();
  return (
    <Container style={{ backgroundColor: '#fff', padding: 30 }}>
      <Breadcrumbs />
      <div className='profesiograma_single_wrapper'>
        <div className='upper'>
          <img src="https://picsum.photos/400/300" alt="" />
          <div>
            <h4>დასახელება პროფესიოგრამისა</h4>
            <p>პროფესიოგრამის აღწერა, პრეზენტაცია აცაოცკმლაკდვნლსნვლსნფლნსბნნლდნფსდლვ სლ სდლდვნს</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam quaerat mollitia voluptates similique ipsam voluptatum, laborum at omnis quia, veniam magni alias fugiat ut repellendus iste minima obcaecati tempore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad iusto nesciunt sapiente eveniet ducimus, obcaecati repudiandae est delectus eius! Cum repellendus harum accusamus quidem ducimus delectus voluptatibus consequuntur assumenda!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex fugit dolor illum sed placeat neque, error deserunt quia provident. Eius vel quod quisquam minus, qui quaerat assumenda et vitae sed.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatem porro, veniam dolore consequatur dolorum eius soluta dicta nostrum est obcaecati adipisci tempore ipsam ab? At, molestiae perferendis. Id, placeat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, voluptates. Recusandae repellat quasi, fugit ipsa ducimus aperiam harum voluptate facere est molestiae odit voluptates sunt saepe assumenda similique adipisci sit!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ipsam accusantium maiores quam quia impedit, corporis totam tenetur architecto ea at repudiandae deleniti odit hic quis necessitatibus tempore blanditiis.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia nemo, alias ut natus ipsam cum laborum voluptatem? Tempora, magnam nulla enim at animi praesentium odio eligendi, perferendis iure accusantium delectus.
        </p>
      </div>
    </Container>
  )
}

export default ProfesiogramaSingle