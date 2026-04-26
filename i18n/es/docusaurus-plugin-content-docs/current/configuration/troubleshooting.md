---
sidebar_position: 9
---

# Resolución de problemas

Problemas comunes y soluciones para la configuración de 7CG.

## Problemas de conexión

### No puedo conectar a CasparCG

1. Verifica que el servidor CasparCG está en ejecución
2. Comprueba la dirección y el puerto en la pestaña Conexión
3. Prueba la conectividad de red: `ping [dirección-del-servidor]`
4. Asegúrate de que el firewall permite el puerto 5250 (o tu puerto personalizado)
5. Revisa los registros del servidor CasparCG

## Problemas de canales

### No se descubrieron canales

1. Asegúrate de estar conectado a CasparCG (revisa la pestaña Conexión)
2. Verifica que la configuración de CasparCG incluye definiciones de canales
3. Comprueba que los canales están correctamente configurados en `casparcg.config`
4. Intenta crear los canales manualmente con el botón Editar

## Problemas con Companion

### Companion no se conecta

1. Verifica que el servidor Companion está activado en 7CG
2. Comprueba que el puerto WebSocket (predeterminado 8099) no está bloqueado por el firewall
3. Asegúrate de que Companion está configurado con el host/IP y puerto correctos si no usas el descubrimiento
4. Si usas emparejamiento por PIN, confirma que la ventana de emparejamiento no ha expirado
5. Inicia una nueva ventana de emparejamiento si el PIN actual ha expirado o ha alcanzado el límite de intentos fallidos
6. Revoca y vuelve a emparejar un dispositivo si la sesión guardada parece obsoleta
7. Prueba a desactivar y reactivar el servidor Companion
8. Comprueba conflictos de puerto con otras aplicaciones

### El descubrimiento de Companion no funciona

1. Confirma que el servidor Companion está en ejecución
2. Asegúrate de que ambas máquinas están en la misma red local
3. Comprueba si tu red bloquea el tráfico mDNS o multicast
4. Recurre a introducir manualmente IP/host y puerto si el descubrimiento no está disponible

## Problemas de exportación

### La exportación de vídeo falla o no produce archivo

1. Confirma que el elemento del rundown admite exportación
2. Asegúrate de que el nombre del archivo termina en `.mov`
3. Verifica que CasparCG puede iniciar y detener el grabador correctamente
4. Mantén el cuadro de exportación abierto hasta que la grabación termine o lo detengas intencionadamente
5. Revisa los registros si ves fallos al iniciar o detener una grabación

### La exportación se inició por error

1. Usa el botón **Detener** en el cuadro de exportación
2. Espera a que 7CG cancele la exportación y desmonte el grabador correctamente
3. Reintenta con el nombre de archivo, duración o elemento correctos

## Errores de la aplicación

### Pantalla de error recuperable

Si algo va mal dentro del renderer, 7CG ya no te deja con una ventana en blanco. Se muestra una pantalla de error amistosa con un botón **Volver a intentar** que recarga la vista afectada sin reiniciar toda la aplicación. Si el error sigue apareciendo, captura el mensaje y sigue [Obtener ayuda](#obtener-ayuda) más abajo.

### Notificaciones en la aplicación

Los mensajes del sistema (errores, avisos, cambios de estado) aparecen dentro de la aplicación como notificaciones toast en lugar de pop-ups nativos del SO. Las notificaciones se apilan en una esquina y se descartan automáticamente — los mensajes más antiguos permanecen visibles brevemente para que puedas leerlos en orden.

## Problemas de ajustes

### Los ajustes no se guardan

1. Comprueba que la aplicación tiene permisos de escritura en la carpeta de ajustes
2. Busca mensajes de error en las notificaciones
3. Aumenta el nivel de registro a Debug y revisa los registros
4. Verifica que hay espacio en disco disponible

## Obtener ayuda

Si los problemas persisten:

1. Establece el **Nivel de registro** en **Debug** (Ajustes de la aplicación)
2. Reproduce el problema
3. Revisa los registros de la aplicación en:
   - Windows: `%APPDATA%/7cg/logs/`
   - macOS: `~/Library/Logs/7cg/`
   - Linux: `~/.config/7cg/logs/`
4. Reporta el problema con los archivos de registro
