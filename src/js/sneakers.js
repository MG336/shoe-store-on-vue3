export {obj}



let obj = {
    title: "H.ST.20 Men's Training Shoes",
    reviews: 10,
    stars:5,
    stylePickerImg(){
        let images = []
        let img;
        for (let item in this.colors) {
            img = this.colors[item].img?.[0]()
            if(img) {
                images.push(img)
            }
            return images 
        } 
            
    },
    
    colors: {
        
        color0: {
                title:'Puma Black-Puma White',
                priсe:'$85.00',
                img: [
                    ()=> require('../assets/items/item_1/colors/black/1.webp'),
                    ()=> require('../assets/items/item_1/colors/black/video.mp4'),
                    ()=> require('../assets/items/item_1/colors/black/3.webp'),
                    // ()=> require('../assets/items/item_1/colors/black/4.webp'),
                    ()=> require('../assets/items/item_1/colors/black/5.webp'),
                    ()=> require('../assets/items/item_1/colors/black/6.webp'),
                
                ],
                size: {
                    '4': 0,
                    '4.5':0,
                    '5':0,
                    '6':2,
                    '6.5':0,
                    '7':0,
                    '7.5':0,
                    '8':10,
                    '8.5':10,
                    '9':0,
                    '9.5':10,
                    '10':0,
                    '10.5':10,
                    '11':10,
                    '11.5':10,
                    '12':10,
                    '13':10,
                    '14':10
                }, 
            },
            color1: {
                title:'High Risk Red-Puma Black-Puma White',
                priсe:'$90',
                img: [
                    ()=> require('../assets/items/item_1/colors/red/1.webp'),
                    ()=> require('../assets/items/item_1/colors/black/video.mp4'),
                    ()=> require('../assets/items/item_1/colors/red/3.webp'),
                    // ()=> require('../assets/items/item_1/colors/red/4.webp'),
                    ()=> require('../assets/items/item_1/colors/red/5.webp'),
                    ()=> require('../assets/items/item_1/colors/red/6.webp'),
                
                ],
                size: {
                    '4': 10,
                    '4.5':10,
                    '5':10,
                    '6':0,
                    '6.5':0,
                    '7':0,
                    '7.5':10,
                    '8':0,
                    '8.5':10,
                    '9':0,
                    '9.5':0,
                    '10':10,
                    '10.5':10,
                    '11':10,
                    '11.5':10,
                    '12':10,
                    '13':10,
                    '14':10
                }, 
            },
            color2: {
                title:'Puma White-Ethereal Blue-High Risk Red',
                priсe:'$59.99',
                img: [
                    ()=> require('../assets/items/item_1/colors/blue/1.webp'),
                    ()=> require('../assets/items/item_1/colors/black/video.mp4'),
                    ()=> require('../assets/items/item_1/colors/blue/3.webp'),
                    // ()=> require('../assets/items/item_1/colors/blue/4.webp'),
                    ()=> require('../assets/items/item_1/colors/blue/5.webp'),
                    ()=> require('../assets/items/item_1/colors/blue/6.webp'),
                
                ],
                size: {
                    '4': 10,
                    '4.5':10,
                    '5':0,
                    '6':0,
                    '6.5':0,
                    '7':10,
                    '7.5':10,
                    '8':0,
                    '8.5':0,
                    '9':0,
                    '9.5':0,
                    '10':10,
                    '10.5':10,
                    '11':10,
                    '11.5':10,
                    '12':10,
                    '13':10,
                    '14':10
                }, 
            },
            color3: {
                title:'Puma White-Dark Denim-High Risk Red',
                priсe:'$54.99',
                img: [
                    ()=> require('../assets/items/item_1/colors/yellow/1.webp'),
                    ()=> require('../assets/items/item_1/colors/black/video.mp4'),
                    ()=> require('../assets/items/item_1/colors/yellow/3.webp'),
                    // ()=> require('../assets/items/item_1/colors/yellow/4.webp'),
                    ()=> require('../assets/items/item_1/colors/yellow/5.webp'),
                    ()=> require('../assets/items/item_1/colors/yellow/6.webp'),
                
                ],
                size: {
                    '4': 10,
                    '4.5':10,
                    '5':10,
                    '6':0,
                    '6.5':0,
                    '7':10,
                    '7.5':10,
                    '8':0,
                    '8.5':0,
                    '9':0,
                    '9.5':10,
                    '10':0,
                    '10.5':0,
                    '11':0,
                    '11.5':10,
                    '12':10,
                    '13':10,
                    '14':10
                }, 
            },
    }
}
    

obj.stylePickerImg()