## Pre-parcial Programación con Tecnologías Web
- Estudiante: María José Amorocho - 202220179

## Arquitectura de solución

Para solucionar la lista de favoritos se extendió el contexto de autores para crear dos nuevas funciones (añadir favorito y desmarcar favorito) y también se incluyó una lista de autores favoritos que es compartida justamente a través de este mismo componente. en el componente Card se llaman estos elementos para que si clickea el botón de "marcar como favorito" a un autor entonces se tome como prop al autor y este pueda añardirse a la lista de favoritos. Funciona de la misma manera cuando quiere desmarcarse un autor como favorito. 
Nota: cuando un autor está marcado como favorito, entonces el botón para desmarcarlo cambiar de color y pasa a ser amarillo (de esta manera se sabe que está marcado).

## Parte B
Para la parte B, se desarrolló el literal de Accesibilidad. Así pues, se hizo uso de aria-label para describir acciones y aria-invalid para inputs con errores en los formularios. Además, hay navegación con el tabulador. Lo anterior no solo puede comprobarse en el codigo, sino que si se prende el lector en voz alta, se describen adecuadamente los elementos de la página. También se agregó un botón de aria-pressed para indicar el estado del botón de marcado y desmarcado de un autor como favorito. 