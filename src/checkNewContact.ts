import { Contacto } from "./contactos";

const checkNewContact = (contacto:Contacto) => {
    return contacto.first_name.length != 0 && contacto.last_name.length != 0
}
export {checkNewContact}