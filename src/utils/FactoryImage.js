export default class FactoryImage{

    constructor(r){
        this.images = r.keys().map(r);
    }
    
    
    getImage = (index) => {
    
        let subtrade = 1;
    
        if(index > this.images.length){
            subtrade += Math.floor(index/this.images.length) * this.images.length;
        }
    
        if(index < subtrade){
            index = this.images.length;
            subtrade = 1;
        }
    
        return this.images[index - subtrade];
    } 

}