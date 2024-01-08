import  Chance from "chance";



let chance = Chance()
export let  fakeUserData =()=>{
    return chance.name({ middle: true })
    
}