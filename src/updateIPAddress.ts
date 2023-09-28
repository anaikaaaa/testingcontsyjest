import { Contacto } from "./contactos";

const updateIPAddress = (contactos: Contacto[]) => {
  contactos.forEach((contacto) => {
    contacto.ip_address = contacto.ip_address + "." + contacto.id;
  });
  return contactos;
};
export { updateIPAddress };
