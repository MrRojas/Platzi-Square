# ¿Qué es Data Binding?

## Comunicación entre tú código TypeScript y el HTML.

Lo único que al cliente (La empresa que nos contrató) le importa es lo que ve, así que comunicar nuestra lógica (TypeScript) al template (HTML) es de suma importancia. Nuestro proyecto debe de estar presentable y hacerle sentir al cliente que todo va perfecto usando Data Binding.

## Tipos de Data Binding en Angular 4.

*   String Interpolation {{}} TypeScript => HTML: Tener información (Variable, Array, por ejemplo) y presentarla a los usuarios en modo de HTML.

*   Property Binding [] TypeScript <= HTML: Información del lado de HTML que puede ser por ejemplo, información que el usuario ingrese o que nosotros pongamos un valor por defecto. Viajando la información de HTML a TypeScript.

*   Event Binding [] TypeScript <= HTML: Escuchar eventos desde HTML y pasarlo a TypeScript.

*   Two Way Data Binding [()] TypeScript <=> HTML: Comunicación de dos Vías. De lo que el cliente ve a TypeScript como de TypeScript hacia lo que el cliente ve.

En String Interpolation es importante respetar la sintaxis para que HTML pueda entender TypeScript. La sintaxis es {{nombre}}. Las dos llaves son importantes.