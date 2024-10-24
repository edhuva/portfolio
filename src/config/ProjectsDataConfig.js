import kgtechv2_1 from '../assets/kgtech-v2-1.png';
import kgtechv2_2 from '../assets/kgtech-v2-2.png';
import kgtechv2_3 from '../assets/kgtech-v2-3.png';
import kgtechv2_4 from '../assets/kgtech-v2-4.png';
import kgtechv2_5 from '../assets/kgtech-v2-5.png';
import kgtechv2_6 from '../assets/kgtech-v2-6.png';
import kgtechv2_7 from '../assets/kgtech-v2-7.png';
import kgtechv2_8 from '../assets/kgtech-v2-8.png';
import kgtechv1_1 from '../assets/kgtech-v1-1.png';
import kgtechv1_2 from '../assets/kgtech-v1-2.png';
import kgtechv1_3 from '../assets/kgtech-v1-3.png';
import kgtechv1_4 from '../assets/kgtech-v1-4.png';
import kgtechv1_5 from '../assets/kgtech-v1-5.png';
import kgtechv1_6 from '../assets/kgtech-v1-6.png';
import mealmover_1 from '../assets/mealmover-1.png';
import mealmover_2 from '../assets/mealmover-2.png';
import mealmover_3 from '../assets/mealmover-3.png';
import mealmover_4 from '../assets/mealmover-4.png';
import mealmover_5 from '../assets/mealmover-5.png';
import mealmover_6 from '../assets/mealmover-6.png';
import mealmover_7 from '../assets/mealmover-7.png';
import mealmover_8 from '../assets/mealmover-8.png';
import mealmover_9 from '../assets/mealmover-9.png';
import portfolio_1 from '../assets/portfolio-1.png';
import portfolio_2 from '../assets/portfolio-2.png';
import portfolio_3 from '../assets/portfolio-3.png';
import portfolio_4 from '../assets/portfolio-4.png';
import portfolio_5 from '../assets/portfolio-5.png';
import portfolio_6 from '../assets/portfolio-6.png';
import portfolio_7 from '../assets/portfolio-7.png';
import portfolio_8 from '../assets/portfolio-8.png';
import portfolio_9 from '../assets/portfolio-9.png';
import portfolio_10 from '../assets/portfolio-10.png';

const Project_Data = [
    {
        title: 'KGTech Repair Version 1',
        project_images: [
            kgtechv1_1, kgtechv1_2, kgtechv1_3, kgtechv1_4, kgtechv1_5, kgtechv1_6 
        ],
        subTitle: 'A web application which provides business management repair note system for KGTech company, mainly improving its business functionaly by replacing the current manually sticky note system.',
        techStack: [ 'REACT', 'REDUX', 'NODE', 'EXPRESS', 'MONGODB', 'JWT', 'CSS', 'RKT QUERY' ],
        github:'https://github.com/edhuva/kgtechrepairs',
        site:'https://kgtechrepairs.onrender.com/'
    },
    {
        title: 'KGTech Repair Version 2',
        project_images: [
            kgtechv2_1, kgtechv2_2, kgtechv2_3, kgtechv2_4, kgtechv2_5, kgtechv2_6, kgtechv2_7, kgtechv2_8
        ],
        subTitle: 'A web application which provides business management repair orders system for KGTech company, mainly improving kgtech repair version 1, adding more functionality and features.',
        techStack: [ 'REACT', 'REDUX', 'NODE', 'EXPRESS', 'MONGODB','CSS', 'JWT', 'AWS S3', 'RKT QUERY' ],
        github:'https://github.com/edhuva/kgtechrepairs-v2',
        site:'https://kgtechrepairs-v2.onrender.com/'
    },
    {
        title: 'MealMover Application',
        project_images: [
            mealmover_1, mealmover_2, mealmover_3, mealmover_4, mealmover_5, mealmover_6, mealmover_7, mealmover_8, mealmover_9
        ],
        subTitle: 'A web application which provides marketing platform for local restaurants businesses to market their products, and provides Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly',
        techStack: [ 'REACT','REDUX', 'NODE', 'EXPRESS', 'MONGODB','TAILWIND', 'RKT QUERY' ],
        techStack: [ 'REACT', 'REDUX', 'NODE', 'EXPRESS', 'MONGODB','TAILWIND', 'JWT', 'RKT QUERY' ],
        github:'https://github.com/edhuva/MealMover',
        site:'https://mealmover.onrender.com/'
    },
    {
        title: 'My Portfolio',
        project_images: [
            portfolio_1, portfolio_2, portfolio_3, portfolio_4, portfolio_5, portfolio_6, portfolio_7, portfolio_8, portfolio_9, portfolio_10
        ],
        subTitle: 'Not much to say here! This project just gave me a good excuse to spend a weekend practicing with MERN Stack and Tailwind',

        github:'https://github.com/edhuva/portfolio',
        site:'https://edwin-portfolio.onrender.com/'
    }
]

export default Project_Data