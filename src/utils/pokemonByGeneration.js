export default (generation) => {

    switch (generation){
        case 1:
            return [0, 150]
        case 2:
            return [151, 250]
        case 3:
            return [251, 385]
        case 4:
            return [386, 492]
        case 5:
            return [493, 648]
        case 6:
            return [649, 720]
        case 7:
            return [721, 808]
        case 8:
            return [809, 898]
        default:
            return []
    }
}