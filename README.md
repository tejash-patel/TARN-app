# TARN-app

![Alt text](logo.png?raw=true "Title")

One of our team member had a thought that even after moving almost everything to mobile app why do walmart and all other stores gives you physical receipts. We have made an app to fix this. Basically, every client store such as walmart, subway will generate a QR code when your order is rung by the employee. Customers can just scan it on their phone and it will show them their receipt. This could be popular as we can maket it as reducing covid cases by reducing contact. (Other benefits: all your receipts in one place, would save environment as lots of paper is wasted in generating receipts.)

## Inspiration
The inspiration for the following project, Quick Receipts, came from the present day. As people everywhere continue to adjust to life after a global pandemic it is important to keep safe social distancing practices and there is no better way to demonstrate this philosophy by contact-free receipts. Over 37% of people worldwide do not save any of their receipts when it is given to them this generates nearly 700 million pounds of waste per year in the U.S alone. Wreaking havoc on our earth, this unnecessary number can be fixed with your very own digital wallet, Quick Receipts.

## What it does
This application scans QR codes given to the customer at checkout and stores the receipts for them virtually on their phone, with no wastage and no-frills. This receipt can always be accessed and is an arm's length away when you think of returning those shoes that didn't fit quite right. 

## How we built it
The app is built in React Native to run on mobile devices and interfaces with a Node.js API to store and retrieve data which was deployed to heroku at https://tarn-app-server-api.herokuapp.com/api-docs/

## Challenges we ran into
As with all application designing processes, there were quite a few problems that were encountered on the way. Firstly, the issue of how to incorporate a scanner into the app using react-native. It was a bit challenging to think of how the app would be able to redirect to a camera to scan and collect data concerning the receipt details. This was fixed luckily by the use of one of react native's many packages to allow for easy integration.

## What we learned
We all got to work with at least one new technology during this project, expanding our technical toolsets for the future. We also learned how to better integrate as a team and collaborate and code and designs efficiently.

## What's next for QuickReceipts
What's Next? Well for this application the next step would be to give the user the ability to store their receipts in categories. This would allow the user some flexibility and even more organization permitting them to know. exactly where the information they need to get is in contactless, and free way.
