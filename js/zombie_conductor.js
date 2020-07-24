/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion/* parametro/s extra de ZombieConductor*/) {
  /* Completar constructor a partir de Enemigo */
  //Enemigo.call(/* ... */);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
}
/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar metodos para el movimiento y el ataque */
/* Aquí simplemente hice uso del mismo condicional utilizado en ZombieCaminante para lograr que
ZombieConductor regrese por donde vino una vez que alcanzara al final del canvas:*/
ZombieConductor.prototype.mover = function() {
  if(this.direccion == 'V') {
    if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
      this.velocidad *= -1;
    }
    this.y+=this.velocidad; 
  } else if (this.direccion == 'H'){
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
      this.velocidad *= -1;
    }
    this.x+=this.velocidad;
  } else  {
    throw 'Error. Ingresar un valor de direccion valido';
  }
};

ZombieConductor.prototype.atacar = function (jugador) {
  Jugador.perderVidas(jugador.vidas);
};