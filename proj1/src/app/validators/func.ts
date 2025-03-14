import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function capitalLetterVAlidator(control: AbstractControl):ValidationErrors | null{

    const value = control.value;
    const ascii:string[]=[];
    for (let n = 65; n<=90; n++){
        ascii.push(String.fromCharCode(n));
    }
    if(ascii.indexOf(value[0])== -1){
        return {capitalLetter:true}
    }
    return null
}

export function capitalLetterVAlidatorWithParameter(count:number):ValidatorFn{
    return(control:AbstractControl): ValidationErrors | null =>{
        const value = control.value;
        const ascii:string[]=[];
    for (let n = 65; n<=90; n++){
        ascii.push(String.fromCharCode(n));
    }
    let state: boolean = true;
    for (let c =0; c<count; c++){

    
    if(ascii.indexOf(value[c])== -1){
        state= false;
        break;
    }

    }
if(!state)
    return {capitalLetter:true}

return null;
};
    
}