import React, { Component } from 'react'
import '../CardsComponent.css'

// creating an array to contain each card menue be destructured in the jsx of the cards component
const cards = [
  {
    coffee: 'Expresso',
    price: 'N250',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRt5V6PJAENO2L2zCzs7SW4b1DA5drDXQNj4wTY5DZr-M5YJi-H5c5Wsig3Dx-f6szpNM&usqp=CAU',
  },
  {
    coffee: 'Latte',
    price: 'N200',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySpgdtXwRS5f8QMPqQPa1o8EinpQ9nSPXDoEvo5JhCs3fzAwHRwRADZ9I6IqK9pF25Ks&usqp=CAU',
  },
  {
    coffee: 'Cappuccino',
    price: 'N200',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnAny1x2IzX8asZ61Sv6nfQ3BEdE4GeQeLrskG6HkqOVCx-F3m409ADn09-WL87WfXVc8&usqp=CAU',
  },
  {
    coffee: 'Macchiato',
    price: 'N300',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzb3ODfaNWRfv-UjDhpstdcTKNjnL9APtW30Y4AtsUlmXitrfIbobc4Z1ssj9yMDT0RU&usqp=CAU',
  },
  {
    coffee: 'Americano',
    price: 'N400',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLqeS1RrXqg_cEjRwxBiIqYOSyjZUHDqfVjugAai0axcpRBRoTl5FU_JahItSgvjdpyq8&usqp=CAU',
  },
  {
    coffee: 'Cortado',
    price: 'N250',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Yc3yw4MfR8Iclh6Nzxaj5Za4AjRmvP6uw5OxcjerMSZnff7WyWiXRwHiCdVW1CqsiKc&usqp=CAU',
  },
  {
    coffee: 'Breve',
    price: 'N400',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Yc3yw4MfR8Iclh6Nzxaj5Za4AjRmvP6uw5OxcjerMSZnff7WyWiXRwHiCdVW1CqsiKc&usqp=CAU',
  },
  {
    coffee: 'Flat White',
    price: 'N400',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQczCIY9VcyrvsE9XLs83H8mYpEOFl097eUPMPslCe4-rEhMXJlbgUjPRC04X56WlH6bPA&usqp=CAU',
  },
  {
    coffee: 'Latte Machiato',
    price: 'N500',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-KD0cSufe9cCMKu7bkummNIZOsZQQyESDvC0JES_dauorf76sfFQVYLHzodRYjKllY8&usqp=CAU',
  },
]

export default class CardsComponent extends Component {
  render() {
    return (
      <section className='menu'>
        {cards.map((card) => {
          const { img, price, coffee } = card
          return <CardComponent img={img} price={price} coffee={coffee} />
        })}
      </section>
    )
  }
}

const CardComponent = (props) => {
  const { img, price, coffee } = props
  console.log(props)
  return (
    <article className='card'>
      <img src={img} alt='' />
      <h1>{price}</h1>
      <h4>{coffee}</h4>
    </article>
  )
}
