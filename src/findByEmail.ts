import { Contacto, contactos } from "./contactos";

function findByEmail(correo:string) : Contacto[] {
    return contactos.filter(contacto=> contacto.email === correo)
    
}

export {findByEmail}