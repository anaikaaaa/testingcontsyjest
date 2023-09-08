import { Contacto, contactos } from "./contactos";

function findByEmail(parteDeUnCorreo:string) : Contacto[] {
    if(parteDeUnCorreo == ""){
        return contactos;
    }
    return contactos.filter(contacto=> contacto.email.includes(parteDeUnCorreo))
    
}

export {findByEmail}