# Pre-Entrega Node.js - Talento Tech

Proyecto desarrollado como primera pre-entrega para el curso de Node.js de **Talento Tech**


---

## Requisitos Previos:

* **Node.js** (versión 18 o superior)
* **npm** (gestor de paquetes incluido con Node.js)

---

## Instalación y Configuración

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/solprinz/pre-entrega-node-js.git](https://github.com/solprinz/pre-entrega-node-js.git)

2. Ingresar a la carpeta del proyecto:

   ```bash
   cd pre-entrega-node-js

3. Verificá que los archivos package.json e index.js estén presentes.

---

## Comandos de Uso
El script se ejecuta mediante el comando `npm run start` pasando la acción y los argumentos dinámicos que son leídos con process.argv:

* **Consultar todos los productos (GET)**
Realiza una petición asíncrona para obtener el listado completo de productos.

  ```bash
  npm run start GET products

* **Consultar un producto específico por ID (GET)**
Obtiene el detalle de un único producto especificando su ID.

  ```bash
  npm run start GET products/15

* **Crear un producto nuevo (POST)**
Envía una solicitud para agregar un producto pasando los argumentos: <title>, <price> y <category>. Devuelve el nuevo objeto con su id asignado.
  ```bash
  npm run start POST products T-Shirt-Rex 300 remeras

* **Eliminar un producto por ID (DELETE)**
Envía una petición para simular la eliminación del producto indicado.

  ```bash
  npm run start DELETE products/7

---
## Tecnologías e Implementación
* Node.js: Entorno de ejecución para JavaScript.

* ESModules ("type": "module"): Permite el uso de sintaxis moderna de módulos y Top-Level await.

* Fetch API: Cliente HTTP nativo para realizar peticiones asíncronas (async/await).

* Manejo de Errores (try / catch): Previene bloqueos no controlados del programa ante posibles caídas de la red.

* Process.argv & Destructuring: Procesamiento dinámico de los argumentos ingresados desde la consola.

---
## Autora
Sol Prinzen

>  Nota sobre la API utilizada:
> Debido a inestabilidades persistentes en el servidor oficial de la consigna (fakestoreapi.com) —el cual se encontraba devolviendo páginas de error en HTML (<!DOCTYPE html>) e impidiendo el parseo JSON—, se utilizó DummyJSON (dummyjson.com) como base para posibilitar el testing y garantizar la ejecución fluida de todas las operaciones. La lógica de comandos y parámetros en index.js respeta al 100% las especificaciones de la entrega.
