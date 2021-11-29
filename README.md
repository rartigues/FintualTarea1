# Tarea postulacion Fintual

Se utilizo el [api de Yahoo Finances](https://www.npmjs.com/package/yahoo-finance) para conseguir precios actuales en las fechas que se piden, el valor final de profit
seria la verdadera ganancia que una persona pudo haber tenido teniendo aquellas acciones en su portafolio en esas fechas.

Primero se requiere NodeJs instalado y las dependencias:
```
npm install
```
Una vez instalado todo se pueden modificar las acciones que se quieren agregar al portafolio y las fechas para comparar al final del archivo tarea.js
```
port.addStock(new Stock("AAPL"));
port.addStock(new Stock("GOOG"));
port.addStock(new Stock("MSFT"));

port.profit("2021-01-01", "2021-03-07");
```

Para ejecutar el programa:
```
npm test
```
