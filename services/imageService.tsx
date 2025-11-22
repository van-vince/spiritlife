

export default function getUserImageSrc(imagepath: string) {

    if(imagepath) {
        return {uri: imagepath}
    } 
    
    return (
        require('../assets/avatar.png')
  )
}
