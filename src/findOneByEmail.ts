import { Contacto, contactos } from "./contactos";

function findOneByEmail(parteDeUnCorreo:string) : Contacto {

    const encontrados = contactos.filter(contacto=> contacto.email.includes(parteDeUnCorreo))
     return encontrados[0];
}  
 export {findOneByEmail}