import { Contacto, contactos } from "./contactos";

function findOneByEmail(unContacto: string): Contacto {
  const encontrados = contactos.filter((contacto) =>
    contacto.email.includes(unContacto),
  );
  return encontrados[0];
}

export { findOneByEmail };
