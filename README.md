# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:

# Bootcamp JS 2 - Laboratorio Módulo 4  - Funciones

Este es el enunciado del laboratorio:

"Queremos implementar una pantalla en la que aparezca un display con el turno actual de una clínica y un botón para pasar al siguiente turno y otro para volver al anterior.

A implementar:

Básico:
En grande se muestra el turno.
El operario puede ir dándole a siguiente o anterior y el turno cambia.
Además de esto vamos a añadir un botón de reset que pone el turno a 0.
Avanzado:
Como challenge puedes añadir una caja de texto y un botón que permita cambiar el turno a un valor que ponga el operario.
Challenge:
Sea el número que sea, lo quiero mostrar siempre con dos digitos (es decir el 1 -> 01, el 2 -> 02, el 10 -> 10, el 11 -> 11, etc), investiga como puedes formatear un número para que siempre tenga dos dígitos."

Resolución del ejercicio:
1. He creado una estructura básica de html y css.
2. He creado una función por cada acción que se pide en el ejercicio (añadir, restar, resetear y añadir de forma manual a través de un input) y he añadido un listener por cada button que activa su función correspondiente.
3. En cada función he comprobado si el turno es distinto de null o undefined y el tipo de instancia que es.
    Ej:  turnNumber !== null && turnNumber !== undefined && turnNumber instanceof HTMLHeadingElement
4. He ido realizando las acciones en cada función (añadir, restar, resetear y añadir manualmente) y le he agregado 0 a 
   los números que solo tenían un dígito con:
  .padStart(2, '0');
5. Por cada button he comprobado si el elemento es distinto de null y si es distinto de undefined.
    Ej: nextBtn !== null && nextBtn !== undefined
6. Una vez terminado el ejercicio:
    - He iniciado el repo local con git init.
    - Me he creado un repositorio nuevo en github y he sincronizado mi repositorio local, con el repositorio remoto de github, con los siguientes comandos.
      git remote add origin "nombre del repo"
      git push -u origin main
