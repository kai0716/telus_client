import image0 from '../assets/images/image0.png'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import image5 from '../assets/images/image5.png'
import image6 from '../assets/images/image6.png'

export default function TVList() {
    const tv = [
        {
            id: "0",
            title: "The Lord of the Rings: The Rings of Power",
            description: "Epic drama set thousands of years before the events of J.R.R. Tolkien's 'The Hobbit' and 'The Lord of the Rings' follows an ensemble cast of characters, both familiar and new, as they confront the long-feared re-emergence of evil to Middle-earth.",
            genre: "Action",
            rating: "6.9",
            channel: "Amazon Prime",
            image: image0
        },
        {
            id: "1",
            title: "House of the Dragon",
            description: "House of the Dragon tells the story of an internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.",
            genre: "Adventure",
            rating: "8.8",
            channel: "HBO Max",
            image: image1
        },
        {
            id: "2",
            title: "She-Hulk: Attorney at Law",
            description: "Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered Hulk.",
            genre: "Action",
            rating: "5.0",
            channel: "Disnep+",
            image: image2
        },
        {
            id: "3",
            title: "Game of Thrones",
            description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
            genre: "Drama",
            rating: "9.2",
            channel: "HBO",
            image: image3
        },
        {
            id: "4",
            title: "Cobra Kai",
            description: "Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again.",
            genre: "Comedy",
            rating: "8.5",
            channel: "NETFLIX",
            image: image4
        },
        {
            id: "5",
            title: "The Sandman",
            description: "Upon escaping after decades of imprisonment by a mortal wizard, Dream, the personification of dreams, sets about to reclaim his lost equipment.",
            genre: "Fantasy",
            rating: "7.8",
            channel: "NETFLIX",
            image: image5
        },
        {
            id: "6",
            title: "Better Call Saul",
            description: "The trials and tribulations of criminal lawyer Jimmy McGill before his fateful run-in with Walter White and Jesse Pinkman.",
            genre: "Crime",
            rating: "8.9",
            channel: "AMC",
            image: image6
        }
    ]

    return tv;
}