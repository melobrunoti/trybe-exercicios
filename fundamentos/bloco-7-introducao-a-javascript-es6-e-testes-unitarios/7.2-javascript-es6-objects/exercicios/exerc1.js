const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customer = order.name;
  const phone = order.phoneNumber;
  const fullAdress = order.address
  const street = order.address.street;
  const houseNumber = order.address.number;
  const apartmentNumber = order.address.apartment

  return console.log(`Hello ${deliveryPerson}, delivery for ${customer}, Phone: ${phone} , Adress: ${street} , ${houseNumber} , ${apartmentNumber}`)
}


customerInfo(order);

console.log("---------------------------------")
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
const modifyedname = order.name = 'Luiz silva'
const modifiedPrice = order.payment.total = 50
const modifiedOrder = Object.keys(order.order.pizza);
const drinks = order.order.drinks.coke.type;



return console.log(`Hello ${modifyedname} the total of your order from ${modifiedOrder[0]} and ${modifiedOrder[1]} and ${drinks} is ${modifiedPrice},00 bucks`)
}

orderModifier(order);

/* Agora você vai fazer alguns exercícios de fixação.
Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
Note que o parâmetro da função já está sendo passado na chamada da função.
Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00. */

