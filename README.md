# Take Home Challenges Solution

I don't get any callbacks even after sending my resume to various companies. I'm sad tbh, so i decided to solve take home challenges that is posted on github by companies. I'm stuck in my current company and want to make a career change. Please help me  🙇

# Solutions

 1. [Ambulnz](https://github.com/AmbulnzLLC/backend-challenge) 

Deployed on Heroku [here](https://ambulnz-pizzeria.herokuapp.com/)

## Project description

**Pizzeria**

The application serves the purpose of ordering pizza online.

The following entities should be created (including proper relations):

-   _pizza type_  - has a name and price (e.g. Margherita $5, Pepperoni $6, ...)
-   _order_  - has items
-   _order item_  - has a pizza type and quantity

On the homepage, list of orders with total prices should be shown.

On a "Create Order" screen, the user can select pizza types and amounts, add to the order, see current total, and place (save) the order.

Additionally, the following JSON API should be provided:

-   list of orders
-   details of an individual order

Optional features:

-   meaningful model validations (e.g. item amount > 0)
-   order bonuses (e.g. 5% cheaper when total over $50, 10% cheaper when total over ...)
-   authentication
-   tests
-   whatever interesting you'd like to do
