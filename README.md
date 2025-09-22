## Pre-parcial Programación con Tecnologías Web
- Estudiante: María José Amorocho - 202220179

## Arquitectura de solución

Para solucionar la lista de favoritos se extendió el contexto de autores para crear dos nuevas funciones (añadir favorito y desmarcar favorito) y también se incluyó una lista de autores favoritos que es compartida justamente a través de este mismo componente. Cada tarjeta permite editar, eliminar o marcar como favorito a un autor. Para marcar como favorito a un autor, este componente toma como prop el id del autor seleccionado y verificando si el id del autor está en la lista favoriteAuthors (que guarda los autores favoritos que el usuario haya seleccionado). Funciona de la misma manera cuando quiere desmarcarse un autor como favorito. Cuando un autor está marcado como favorito, entonces el botón para desmarcarlo cambiar de color y pasa a ser amarillo (de esta manera se sabe que está marcado).

## Parte B
Para la parte B, se desarrolló el literal de Accesibilidad. Así pues, se hizo uso de aria-label para describir acciones y aria-invalid para inputs con errores en los formularios. Además, hay navegación con el tabulador. Lo anterior no solo puede comprobarse en el codigo, sino que si se prende el lector en voz alta, se describen adecuadamente los elementos de la página. También se agregó un botón de aria-pressed para indicar el estado del botón de marcado y desmarcado de un autor como favorito. 