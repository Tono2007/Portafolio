# **Gestión de Dependencias y Paquetes con NPM**

Recien terminé un curso de **NPM** en la plataforma de [PLatzi](https://platzi.com/cursos/npm/) &nbsp;fue un curso sencillo a repaso hago esta publicación.

---

## ¿Qué es NPM (node package manager) ?

Es un gestor de paquetes por defecto para Node.js, el más popular que tiene JavaScript, donde encontrarás una gran cantidad de recursos para poder implementar en tus proyectos. También vas a poder crear tus propios paquetes y compartirlos con toda la comunidad. [NPM](https://www.npmjs.com/)

### **Primeros Pasos**

- Instalar [NodeJs](https://nodejs.org/es/). Node.js trae integrado npm con su instalación
- Podemos también verificar si hay versiones más recientes de NPM e instalarlas con el comando  
  `npm install -g npm@latest`

### **Recomendación**

> Manejar npm es muy fácil, y cualquier duda que tengas sobre algún comando puedes utilizar alguno de los siguientes comandos:
>
> - `npm help` Muestra los comandos más utilizados y su uso, y también todos los comandos disponibles
> - `npm <command> -h` Muestra la ayuda sobre algún comando

Otro buen recurso es buscar documentación

## Configuración básica

### **Iniciar un proyecto**

`npm init` Crea un archivo `package.json` el cual tiene toda la información sobre nuestro proyecto, los paquetes, scripts, etc.

`npm init -y` o `npm init -yes` Crea el archivo `package.json` con la información básica de nuestro proyecto diciendo si a todo, con los datos por defecto.

Y para acelerar el proceso del comando `npm init -y` podemos establecer datos predeterminados:

`npm set init.author.email <email>` Asigna un correo como predeterminado

`npm set init.author.name <name>` Asigna un nombre como predeterminado

`npm set init.license <license>` Asigna una licencia como predeterminada

## Instalación de dependencias

### **Instalación de dependencias Requeridas**

Las dependencias deben ser instaladas en la carpeta raíz de nuestro proyecto.

`npm install <pkg>` || `npm i <pkg> —save` || `npm i <pkg> —S` || `npm i <pkg>` Por defecto lleva el flag -S de save, este comando instala como una dependencia requerida para el proyecto (Necesaria para producción)

Instalar paquete moment `npm install moment`

- Podemos reducir la sintaxis, donde **i** es la abreviatura para install y **-S** la abreviatura para —save
- Carpeta **node_modules**: aquí se van a instalar todos los módulos que agreguemos a nuestro proyecto.
- Archivo **package-lock.json**: evita este comportamiento general de actualizar versiones minor o fix de modo que cuando alguien clona nuestro repositorio y ejecuta **npm install** en su equipo, npm examinará **package-lock.json** e instalará la versión exacta de los paquete que nosotros habíamos instalado, ignorando así los **^** y **~** de package.json.
- Simular la instalación de un paquete `npm i <pkg> --dry-run`
- Forzar la instalación de un paquete ` npm i <pkg> -f` || `npm i <pkg> --force `
- Instalar una versión específica de un paquete `npm i <pkg> @<version>`

### **Instalación de dependencias Globales**

`npm i <pkg> -g` Instala un paquete de manera global para poder utilizarlos en diferentes proyectos.

Luego de su instalación, podemos ver la lista de dependencias que tenemos instaladas de forma global con el siguiente comando: `npm list -g --depth 0`

### **Instalación de dependencias Opcionales**

`npm i <pkg> -O` Podemos instalar de forma opcional un paquete

### **Listar paquetes del proyecto**

`npm list` Para listar los paquetes que tiene un proyecto en específico , Mostrar el árbol de jerarquía de los paquetes

## Actualizar y eliminar paquetes

- `npm update` -- Actualiza todas las dependecias de nuestro proyecto.
- `npm update <pkg>` -- Actualiza un paquete en especifico.
- `npm uninstall <pkg>` -- Desistala del proyecto y el json una dependecia.
- `npm uninstall <pkg>` --no-save -- Desinstala el paquete de node_modules pero no del **package.json**.

---

- `npm outdate` Muestra los paquetes que pueden ser actualizados, la versión actual y la más reciente a la que se puede actualizar, además de su ubicación y si es requerido por otra dependencia también dirá cual es la dependencia que lo necesita.
- `npm outdate —dd` Muestra a mayor detalle los paquetes desactualizados y todas las revisiones
  (El `—dd` activa el modo `—verbose` y lo que hace es que muestra información detallada, también se puede utilizar para otros comandos)

## **Seguridad**

- `npm audit` -- Muestra más información sobre las vulnerabilidades.
- `npm audit --json` -- Hace lo mismo pero con un json.
- `npm update <pkg> --depth 2` -- Actualiza el paquete vulnerable (Depth es la profundidad a la que llegara)

## Símbolos de las versiones de los paquetes

`**^**` Actualiza cuando se hacen cambios menores o parches / bug fixes
Este símbolo se llama _acento circunflejo (En México)_ y se pone con `alt + 94` \*\*

`~` Actualiza cuando se hacen parches / bug fixes
Este símbolo se llama _virgulilla (En México)_ y se pone con `alt + 126`

**`<`** Versión menor a la indicada.

**`<=`** Versión menor o igual a la indicada.

**`>`** Versión mayor a la indicada.

**`>=`** Versión mayor o igual a la indicada.

![ff](https://blog.desdelinux.net/wp-content/uploads/2020/10/NPM.jpg.webp)
