1- 
a => typescript inferira el tipo 'number'. Lo hará así porquè todo el contenido de la variable son numeros.
b => inferira el tipo 'string'. 
c => inferira el tipo 'string'. Tanto el b como el c, lo hará así porquè esta formada por una cadena de caracteres.
d => inferira como una array de boolean. Verá que todos los tipos dentro de la array esta formada por boleanos.
e => un objeto con dentro una variable del tipo 'string'. Identificara que es un objeto y después vera que esta formado por una string.
f => una array formada por un numero y un boolean. Identificará que es una array y que estará formada por un numero y un boleano.
g => una array de numeros. Al igual que en las anteriores, identifica que es una array por los [] y después vera que esta formado por un numero.
h => infiere cualquier tipo de variable 'any'. No inferira ningun tipo porque el valor es null.

2-
El primer error será en la linea 2, debido a que queremos cambiar el valor de una variable constante.
El segundo error será en la linea 6, porque Typescript inferirá el tipo numero a los valores de dentro de la array y no podremos insertar una string.
El siguiente error será en la linea 8, ya que se asigna el valor 4 a una variable de tipo 'never'. El tipo never no puede tener ningún valor.
El último error esta en la linea 11 donde veremos que ejecutamos una operación para una variable de tipo unknown. Este tipo de variables no permiten operaciones.

3-
Una clase tiene propiedades y metodos, además de esto pueden tener un metodo constructor que las inicializa. Mientras que las interfaces describen objetos que también tienen propiedades y objetos pero se les proporciona un metodo para inicializarlo.