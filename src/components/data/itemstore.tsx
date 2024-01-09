import f1 from '@/assets/images/f1.png'
import f2 from '@/assets/images/f2.png'
import f3 from '@/assets/images/f3.png'
import f4 from '@/assets/images/f4.png'
import f5 from '@/assets/images/f5.png'
import f6 from '@/assets/images/f6.png'
import f7 from '@/assets/images/f77.png'
import f8 from '@/assets/images/f7.png'
import m1 from '@/assets/images/m2.png'
import m2 from '@/assets/images/m1.png'
import f9 from '@/assets/images/f9.png'
import s1 from '@/assets/images/runningbreaker.png'
import s2 from '@/assets/images/leggings.png'
import s3 from '@/assets/images/footwear.png'
import s4 from '@/assets/images/tshirt.png'
import s5 from '@/assets/images/socks.png'
import {StaticImageData} from 'next/image';

export interface ItemStore {
    id: number;
    name: string;
    category: string;
    itemcategoryname: string;
    price: number;
    images: StaticImageData[];
    productDetails: string;
    productCare: string[];
}

export const itemstore: ItemStore[] = [{
    "id": 1,
    "name": "Brushed Raglan Sweatshirt",
    "category": "female",
    'itemcategoryname': 'Sweater',
    "price": 195,
    "images": [f1, f1, f1, f1, f1],
    "productDetails": "Indulge in the warmth and comfort of our Brushed Raglan Sweatshirt. This classic crewneck sweater features a timeless cable knit pattern that adds a touch of sophistication to your winter wardrobe. Crafted from a soft and breathable cotton blend, it's perfect for chilly days and cozy nights by the fireplace. The versatile design makes it easy to pair with your favorite jeans or leggings for a casual look, or dress it up with tailored trousers for a more polished ensemble. Stay fashion-forward and snug all season long with this must-have wardrobe staple.",
    "productCare": ["Hand wash using cold water.",
        "Do not using bleach.",
        "Hang it to dry.",
        " Iron on low temperature."]
}
    ,
    {
        "id": 2,
        "name": "Cameryn Sash Tie Dress",
        "category": "female",
        'itemcategoryname': 'Dress',
        "price": 545,
        "images": [f2, f2, f2, f2, f2],
        "productDetails": "Elevate your style with the Cameryn Sash Tie Dress. This elegant piece boasts a waist-accentuating sash tie, intricate lace detailing, and a breathable blend for comfort. Versatile and timeless, it's perfect for any occasion, seamlessly combining sophistication and style.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {
        "id": 3,
        "name": "Flex Sweatshirt",
        "category": "female",
        'itemcategoryname': 'Sweater',
        "price": 175,
        "images": [f3, f3, f3, f3, f3],
        "productDetails": "Indulge in the comfort of our Flex Sweatshirt. This cozy sweater is designed for versatility and style. Its soft fabric and relaxed fit make it perfect for casual days or lounging at home. The timeless design ensures you stay fashionable and comfortable.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {
        "id": 4,
        "name": "Flex Sweatpants",
        "category": "female",
        'itemcategoryname': 'Pants',
        "price": 175,
        "images": [f4, f4, f4, f4, f4],
        "productDetails": "Elevate your casual style with our Flex Sweatpants. These comfortable and stylish pants are perfect for an active lifestyle. The flexible fabric allows for ease of movement, making them ideal for workouts or casual outings.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {
        "id": 5,
        "name": "Pink Fleece Sweatpants",
        "category": "female",
        'itemcategoryname': 'Pants',
        "price": 195,
        "images": [f5, f5, f5, f5, f5],
        "productDetails": "Embrace the ultimate comfort with our Pink Fleece Sweatpants. Designed for relaxation, these sweatpants are crafted from soft fleece fabric that provides warmth and a cozy feel during colder days. The stylish pink color adds a playful and trendy touch to your loungewear collection, making them perfect for both lazy days at home and casual outings.The elastic waistband ensures a comfortable fit, and the relaxed silhouette allows for ease of movement. Whether you're lounging on the couch or stepping out for a quick errand, these sweatpants effortlessly combine style and comfort.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    }, {
        "id": 6,
        "name": "Lite Sweatpants",
        "category": "female",
        'itemcategoryname': 'Pants',
        "price": 150,
        "images": [f6, f6, f6, f6, f6],
        "productDetails": "Elevate your comfort with our Lite Sweatpants. Crafted from lightweight and breathable fabric, these sweatpants are perfect for casual wear and workouts. The relaxed fit and versatile design make them a go-to choice for both lounging at home and running errands.\n" +
            "\n" +
            "The elastic waistband ensures a comfortable fit, and the drawstring allows you to customize the fit to your liking. Stay comfortable and stylish with these essential Lite Sweatpants.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    }
    ,
    {
        "id": 7,
        "name": "Imperial Alpace Hoodie",
        "category": "female",
        'itemcategoryname': 'Jackets',
        "price": 525,
        "images": [f7, f7, f7, f7, f7],
        "productDetails": "Experience casual comfort with our Lite Sweatpants. Crafted from lightweight and breathable fabric, these sweatpants are perfect for your active lifestyle. The versatile design allows you to effortlessly transition from lounging at home to running errands. The elastic waistband and relaxed fit provide maximum comfort, making them a go-to choice for everyday wear.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {
        "id": 8,
        "name": "Flex Push Button Bomber",
        "category": "male",
        'itemcategoryname': 'Jackets',
        "price": 225,
        "images": [m1, m1, m1, m1, m1],
        "productDetails": "Make a bold statement with our Flex Push Button Bomber. This sleek and stylish jacket is designed for the modern man who appreciates both fashion and functionality. The push-button closure and ribbed cuffs add a contemporary touch.\n" +
            "\n" +
            "Crafted from durable materials, the Flex Push Button Bomber is perfect for cool weather. Pair it with jeans or chinos for a casual yet refined look.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {
        "id": 9,
        "name": "Muscle Tank",
        "category": "female",
        'itemcategoryname': 'T Shirt',
        "price": 75,
        "images": [f8, f8, f8, f8, f8],
        "productDetails": "Stay cool and stylish with our Muscle Tank. Whether you're hitting the gym or enjoying a casual day out, this tank top offers comfort and a flattering fit. The sleeveless design allows for unrestricted movement.\n" +
            "\n" +
            "The Muscle Tank is versatile and easy to layer, making it a wardrobe essential. Pair it with leggings or shorts for a laid-back look.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."],
    },
    {


        "id": 10,
        "name": "Brushed Bomber",
        "category": "female",
        'itemcategoryname': 'Jackets',
        "price": 225,
        "images": [f9, f9, f9, f9, f9],
        "productDetails": "Elevate your outerwear collection with our Brushed Bomber. The brushed fabric adds a touch of luxury to this classic bomber jacket. The versatile design makes it a perfect choice for various occasions.\n" +
            "\n" +
            "The Brushed Bomber is both stylish and functional, offering warmth and comfort during cooler seasons. Pair it with jeans or a skirt for a chic and trendy look.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {


        "id": 11,
        "name": "Raglan Sweatshirt",
        "category": "male",
        'itemcategoryname': 'Sweater',
        "price": 225,
        "images": [m2, m2, m2, m2, m2],
        "productDetails": "Embrace casual sophistication with our Raglan Sweatshirt. The classic raglan sleeves and comfortable fit make it a timeless choice for every man's wardrobe. Crafted from high-quality fabric, this sweatshirt provides both style and comfort.\n" +
            "\n" +
            "Whether you're relaxing at home or heading out for a casual day, the Raglan Sweatshirt effortlessly combines versatility and fashion.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {
        "id": 12,
        "name": "Running Windbreaker",
        "category": "sports",
        'itemcategoryname': 'Jacket',
        "price": 120,
        "images": [s1,s1,s1,s1,s1],
        "productDetails": "Stay ahead in your runs with our Running Windbreaker. Designed for optimum performance, this windbreaker provides protection against the elements without compromising breathability. Whether you're a seasoned runner or just hitting the track, this jacket is your perfect companion.",
        "productCare": ["Machine wash cold.", "Tumble dry low.", "Do not bleach.", "Do not iron."]
    }
     , {
         "id": 13,
         "name": "Compression Leggings",
         "category": "sports",
         'itemcategoryname':'Leggings',
         "price": 40,
         "images": [s2,s2,s2,s2,s2],
         "productDetails": "Maximize your workout with our Compression Leggings. These leggings offer excellent support and flexibility, making them ideal for various sports activities. The compression technology enhances performance and reduces muscle fatigue, ensuring you stay comfortable throughout your workout.",
         "productCare":  ["Machine wash cold with like colors.",
             "Tumble dry low.",
            "Do not bleach.",
             "Do not dry clean."]
     }
     , {
         "id": 14,
         "name": "High-Performance Sneakers",
         "category": "sports",
         'itemcategoryname':'Footwear',
         "price": 80,
         "images": [s3,s3,s3,s3,s3],
         "productDetails": "Step up your game with our High-Performance Sneakers. Engineered for sports enthusiasts, these sneakers provide excellent traction and support. Whether you're hitting the gym or the basketball court, these sneakers deliver comfort and style.",
         "productCare":  ["Wipe clean with a damp cloth.",
             "Air dry.",
             "Do not machine wash.",
             "Avoid prolonged exposure to direct sunlight."]
     }
     , {
         "id": 15,
         "name": "Moisture-Wicking T-Shirt",
         "category": "sports",
         'itemcategoryname':'T-Shirt',
         "price": 25,
         "images": [s4,s4,s4,s4,s4],
         "productDetails": "Stay cool and dry with our Moisture-Wicking T-Shirt. Perfect for intense workouts, this shirt wicks away sweat, keeping you comfortable and focused. Whether you're hitting the track or the gym, this moisture-wicking tee is a must-have for active individuals.",
         "productCare":  ["Machine wash cold.",
             "Tumble dry low.",
             "Do not bleach.",
             "Do not iron."]
     }
     , {
         "id": 16,
         "name": "Athletic Socks Set",
         "category": "sports",
         'itemcategoryname':'Socks',
         "price": 15,
         "images": [s5,s5,s5,s5,s5],
         "productDetails": "Keep your feet comfortable during workouts with our Athletic Socks Set. These socks are designed for maximum support and cushioning, making them perfect for running, training, or any sports activity. Stay focused on your game with these high-performance athletic socks.",
         "productCare":  ["Machine wash cold.",
             "Tumble dry low.",
             "Do not bleach.",
             "Do not iron."]
     }

]