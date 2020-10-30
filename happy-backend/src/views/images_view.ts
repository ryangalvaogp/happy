import Image from '../models/image'

export default{
    render(image:Image){
        return {
            id: image.id,
            _url: `http://localhost:4444/uploads/${image.path}`,
            get url() {
                 return this._url.replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20')
           },
            set url(value) {
                this._url = value
            },
            
        }
    },
    renderMany(image:Image[]){
        return image.map(image => this.render(image))
    
    }
}

