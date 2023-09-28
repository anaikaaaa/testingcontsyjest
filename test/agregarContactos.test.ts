import { Contacto, contactos } from "../src/contactos";
import { agregarContacto } from "../src/agregarContactos";

describe("agregarContacto", () => {
  test("deberia agregar un contacto y mostrarlo en la lista de contactos", () => {
    const contacto: Contacto = {
      id: 11,
      first_name: "carlitos",
      last_name: "rodas",
      email: "hermencides@gmail.com",
      gender: "male",
      ip_address: "1.22.156.1",
    };
    const contactosActualizados: Contacto[] = agregarContacto(
      contactos,
      contacto
    );

    expect(contactosActualizados).toHaveLength(11);
  });
});
