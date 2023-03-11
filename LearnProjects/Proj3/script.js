Vue.createApp({
    data(){
        return {
            courseList : [
                {
                    id: 1,
                    courseName: 'Introduction to Programming',
                    subtitle: 'Learn the basics of programming',
                    price: '$100',
                    imgUrl: './assets/mongodb2.jpeg'
                },
                {
                    id: 2,
                    courseName: 'Advanced JavaScript',
                    subtitle: 'Master the JavaScript language',
                    price: '$150',
                    imgUrl: './assets/next-js.png'
                },
                {
                    id: 3,
                    courseName: 'Web Mobile with React Native',
                    subtitle: 'Build Mobile applications with React Native',
                    price: '$200',
                    imgUrl: './assets/react-native-preview.png'
                }
            ],

        }
    }
}).mount('#vapp')