import gallery1 from '../assets/Arberdarenational.png'
import gallery2 from '../assets/Diani.png'
import gallery3 from '../assets/Samburu.png'
import gallery4 from '../assets/Nairobin.png'
import gallery5 from '../assets/LakeNakuru.png'
import gallery6 from '../assets/Flamingoes.png'
import gallery7 from '../assets/Hellsgate.png'
import gallery8 from '../assets/Tsavowestpark.png'
import gallery9 from '../assets/KaruraForest.png'
import gallery10 from '../assets/Ol pejeta Conservancy.png'
import gallery11 from '../assets/NationalMuseum.png'
import gallery12 from '../assets/Girraffecenter.png'
import gallery13 from '../assets/karenblixen.png'
import gallery14 from '../assets/MountKenya.png'

type Tour= {
    img:string,
    name:string,
    location: string,
    phone: number
} 
export const Tourphoto: Array<Tour>= [
    { img: gallery1, name: 'Aberdare National Park', location: 'Nyeri County', phone:111111 },
    { img: gallery7, name: 'Hells gate', location: 'Nyahururu',  phone:111111 },
    { img: gallery2, name: 'The Diani Beach', location: 'Mombasa',  phone:111111 },
    { img: gallery3, name: 'Samburu game reserve', location: 'Samburu county', phone:111111 },
    { img: gallery5, name: 'Lake Naivasha', location: 'Naivasha',  phone:111111 },
    { img: gallery6, name: 'Flamingoes at lake Nakuru', location: 'Nakuru',  phone:111111 },
    { img: gallery4, name: 'Nairobi National Park', location: 'Nairobi',  phone:111111 },
    { img: gallery14, name: 'Mount Kenya', location: 'Kirinyaga',  phone:111111 },
    { img: gallery12, name: 'The Girraffe center', location: 'Eldoret',  phone:111111 },
    { img: gallery13, name: 'Karen Blixen Museum', location: 'Karen',  phone:111111 },
    { img: gallery11, name: 'Kenya National Museum', location: 'Nairobi',  phone:111111 },
    { img: gallery10, name: 'Ol Pejeta conservancy', location: 'Marsabit',  phone:111111 },
    { img: gallery9, name: 'Karura Forest', location: 'Nairobi',  phone:111111 },
    { img: gallery8, name: 'Tsavo West national Park', location: 'Taita Taveta',  phone:111111 },

]

console.log(Tourphoto)