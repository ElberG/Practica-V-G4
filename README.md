# RESULTADOS.


**¿Qué significa className en React?**

En React, className se utiliza en lugar de class porque la palabra class está reservada en JavaScript para declarar clases. De esta manera, className cumple exactamente la misma función que class en HTML, permitiendo asignar estilos CSS a los elementos o componentes.

**¿Las props tienen un limite?**

Las props no tienen un límite fijo en React, ya que se pueden pasar tantas como el componente necesite para funcionar correctamente. Sin embargo, si un componente recibe demasiadas props puede volverse difícil de leer y mantener, por lo que es recomendable dividir la lógica en varios componentes más pequeños.

**¿Quién define las props?**

Las props siempre son definidas por el componente padre, que decide qué valores enviar al hijo cuando lo utiliza en su estructura JSX. El componente hijo solamente las recibe como un objeto y las usa para mostrar datos, ejecutar funciones o personalizar su comportamiento.
