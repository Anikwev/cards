const carData = [
    
    {
        "id": 1,
        "category": "Sport Sedan",
        "model": "car",
        "horsepower": 473,
        "discount_price": "$53,000",
        "actual_price": "$62,000",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIp-n96c-o3ijd67u3x0BdvxCXQW7BIEBB3Q&s"
    },
    {
        "id": 2,
        "category": "Sport Sedan",
        "model": "car",
        "horsepower": 469,
        "discount_price": null,
        "actual_price": "$75,000",
        "image_url": "https://i.pinimg.com/736x/c5/b9/8c/c5b98c6f6a603ae3d6f0a6ad2647f4bc.jpg"
    },
    {
        "id": 3,
        "category": "Sport Sedan",
        "model": "CAR",
        "horsepower": 446,
        "discount_price": "$40,000",
        "actual_price": "$53,000",
        "image_url": "https://static-01.daraz.com.bd/p/9ba19990807e8ea94e4216202f623465.jpg_750x750.jpg_.webp"
    },
    {
        "id": 4,
        "category": "Sport Sedan",
        "model": "CAR",
        "horsepower": 505,
        "discount_price": "$32,000",
        "actual_price": "$45,000",
        "image_url": "https://www.jenkinsandwynnehonda.com/static/dealer-17689/2024-Honda-Accord.jpg"
    },
    {
        "id": 5,
        "category": "Sport Sedan",
        "model": "parado ",
        "horsepower": 420,
        "discount_price": null,
        "actual_price": "$41,000",
        "image_url": "https://edgecast-img.yahoo.net/mysterio/api/D7BE514F948C955B1ACF37AC5BCB072A3AF637DBD98534F4FFF935ECD462970A/autoblog/resizefill_w1200_h675;quality_85;format_webp;cc_31536000;/http://s.aolcdn.com/commerce/blogcdn/www.autoblog.com/media/2012/05/01-2012-porsche-panamera-turbo-s-review.jpg"
    },
    {
        "id": 6,
        "category": "SUV",
        "model": "yamaha",
        "horsepower": 435,
        "discount_price": "$36,000",
        "actual_price": "$42,000",
        "image_url": "https://vulturbike.com/img/cms/yamaha%20nuovi%20modelli%202021_.jpg"
    },
    {
        "id": 7,
        "category": "SUV ",
        "model": "Mercedes-Benz ML 1",
        "horsepower": 367,
        "discount_price": null,
        "actual_price": "$45,000",
        "image_url": "https://i.gaw.to/content/photos/12/29/122974_2013_Mercedes-Benz_M_Class.jpg"
    },
    {
        "id": 8,
        "category": "SUV",
        "model": "yamaha",
        "horsepower": 493,
        "discount_price": "$43,000",
        "actual_price": "$50,000",
        "image_url": "https://cars.usnews.com/images/new-features/widget-section/2019_Yamaha_YZF_R1_X66O2lQ.jpg"
    },
    {
        "id": 9,
        "category": "SUV",
        "model": "yamaha3",
        "horsepower": 434,
        "discount_price": "$45,000",
        "actual_price": "$55,000",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtl37z8O4zvHVRHSz8oC4iUYpukzH6EJV92i2xJNKxPD6quQEesKVcQ84UuAxAAl0rsI&usqp=CAU"
    },
    {
        "id": 10,
        "category": "SUV",
        "model": "yamaha",
        "horsepower": 288,
        "discount_price": null,
        "actual_price": "$98,000",
        "image_url": "https://cars.usnews.com/images/new-features/widget-section/2020_Yamaha_YZF_R1.jpg"
    },
    {
        "id": 11,
        "category": "Supercar",
        "model": "BMW X5",
        "horsepower": 661,
        "discount_price": "$220,000",
        "actual_price": "$280,000",
        "image_url": " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxS806a3W1Bj7ThpxYFvtPAx4KU5yWFuHoVMdAIqT3xRFDZSDFATl3SB32v5PqQXA-n-4&usqp=CAU"
    },
    {
        "id": 12,
        "category": "Supercar",
        "model": "BMW X6",
        "horsepower": 631,
        "discount_price": null,
        "actual_price": "$300,000",
        "image_url": "https://cloud.leparking.fr/2020/03/12/00/22/bmw-x6-bmw-x6m-mansory-1-of-2-2010-grau_7490930936.jpg"
    },
    {
        "id": 13,
        "category": "Supercar",
        "model": "BMW x7",
        "horsepower": 710,
        "discount_price": null,
        "actual_price": "$310,000",
        "image_url": "https://www.api.acfbmw.pt/Public/images/vehicle/vc1688979824S/gallery/X7-40-D-XDrive-Pack-M.jpg"
    },
    {
        "id": 14,
        "category": "Supercar",
        "model": "BMW X8",
        "horsepower": 572,
        "discount_price": "$190,000",
        "actual_price": "$270,000",
        "image_url": "https://cdn.corrieredellosport.it/img/990/495/2019/07/01/164224403-cbadc4b8-9eb3-4353-bb9b-463d7b76ba40.jpg"
    },
    {
        "id": 15,
        "category": "Supercar",
        "model": "BMW x9",
        "horsepower": 630,
        "discount_price": "$160,000",
        "actual_price": "$220,000",
        "image_url": "https://i.ytimg.com/vi/8VX-X6YTLGM/sddefault.jpg"
    },
    {
        "id": 16,
        "category": "Sport Sedan",
        "model": "BMW ",
        "horsepower": 385,
        "discount_price": "$75,000",
        "actual_price": "$105,000",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-kHdpbLswVuVM0ALfjWI2AYYmoC2AvTPNuw&s"
    },
    {
        "id": 17,
        "category": "Supercar",
        "model": "BMW",
        "horsepower": 700,
        "discount_price": null,
        "actual_price": "$130,000",
        "image_url": "https://car-images.bauersecure.com/wp-images/12143/bentleysupersports_02.jpg"
    },
    {
        "id": 18,
        "category": "Sport Sedan",
        "model": "BMW M5 ",
        "horsepower": 634,
        "discount_price": "$63,000",
        "actual_price": "$70,000",
        "image_url": "https://f90.bimmerpost.com/forums/attachment.php?attachmentid=2941082&stc=1&d=1658865585"
    },
    {
        "id": 19,
        "category": "Supercar",
        "model": "Audi R8",
        "horsepower": 565,
        "discount_price": "$120,000",
        "actual_price": "$190,000",
        "image_url": "https://www.hardwarezone.com.sg/thumbs/705610/og.jpg?1194"
    },
    {
        "id": 20,
        "category": "SUV",
        "model": " TVS-4V5",
        "horsepower": 621,
        "discount_price": "$300,000",
        "actual_price": "$320,000",
        "image_url": "https://imgd.aeplcdn.com/664x374/n/cw/ec/96945/right-side-view25.jpeg?wm=2&q=80"
    },
    {
        "id": 21,
        "category": "Sport Sedan",
        "model": "Dodge Charger Hellcat 08",
        "horsepower": 717,
        "discount_price": null,
        "actual_price": "$80,000",
        "image_url": "https://www.cnet.com/a/img/resize/116e1407d45a721c97e88e76a853e6f46e8a32e6/hub/2020/10/20/a9f8ebb8-9a43-4d24-9347-f04913ae11f6/2020-dodge-charger-srt-hellcat-widebody-ogi-1.jpg?auto=webp&fit=crop&height=675&width=1200"
    },
    {
        "id": 22,
        "category": "SUV",
        "model": "BIKE",
        "horsepower": 420,
        "discount_price": "$95,000",
        "actual_price": "$120,000",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuUveR0qD0YQAnHGHryUR4xhKKqw7gT8un0iq7HOfHbpQSVRDzQbD21DGrAcq1CGTubZ0&usqp=CAU"
    },
    {
        "id": 23,
        "category": "SUV",
        "model": "yamaha",
        "horsepower": 518,
        "discount_price": null,
        "actual_price": "$125,000",
        "image_url": "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fgallery%2Fyamaha%2Fyzf-r1%2Fexterior%2Ftech_black.jpg%3Fv%3D2020-10-23&w=640&q=75"
    },
    {
        "id": 24,
        "category": "SUV",
        "model": "R15",
        "horsepower": 550,
        "discount_price": "$75,000",
        "actual_price": "$90,000",
        "image_url": "https://i.pinimg.com/564x/6e/39/96/6e39965f99dbc749d56a884a9dcb5ac9.jpg"
    },
    
    {
        "id": 25,
        "category": "Supercar",
        "model": "Lamborghini Gallardo",
        "horsepower": 623,
        "discount_price": null,
        "actual_price": "$250,000",
        "image_url": "https://i.pinimg.com/originals/55/c1/bc/55c1bcb2bc55764fe1b7f184e06ef700.jpg"
    }
]

export default carData

