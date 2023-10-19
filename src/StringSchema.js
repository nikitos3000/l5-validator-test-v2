function up(bb){
return `${bb.slice(0,1).toUpperCase()}${bb.slice(1,bb.length)}`
}


export default class ValidateString{
    constructor(option){
        this.option
    }

    isValid(value){
        if(typeof value !== 'string'){
            return false
        }
        if(this.option === 'startsFromUpperCase'){
            if(value !== up(value) || value.startsWith(' ') || value.startsWith('!')){
                return false
            }
        }
        if(this.option){
            if(this.option !== value.length){
                    return false
            }
        }
        if(this.option === 'hasExclamation'){
            return value.includes('!')
        }return true

        
    }
    startsFromUpperCase(){
    this.option = 'startsFromUpperCase'
    return this
    }
    length(newlen){
    this.option = newlen
    return this
    }
    hasExclamation(){
    this.option = 'hasExclamation'
    return this
    }
}
