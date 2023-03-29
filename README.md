### App Web del Clima [Developing]

- Esta es una aplicación web del clima que te permite conocer el pronóstico del tiempo para diferentes ciudades. Puedes ver la información del clima actualizada en tiempo real.

#### Características

- Buscar el clima de cualquier ciudad
- Ver la información del clima actualizada en tiempo real
- Ver información detallada del clima para los próximos días

#### Tecnologías utilizadas

- Next.js
- TailwindCSS
- [pnpm - "Use Windows option"](https://pnpm.io/es/installation)
- [WeatherAPI.com - API](https://rapidapi.com/weatherapi/api/weatherapi-com/)
- [GoogleCloudMaps - API](https://mapsplatform.google.com/intl/es-419/)

#### Cómo correr la aplicación

- Clona este repositorio:

```bash
git clone https://github.com/JJozef/geo-weather.git
```
- Ve a la carpeta:

```bash
cd carpeta
```

#### Instala las dependencias:

```bash
pnpm i
```

#### Configura las variables de entorno:

- Busca el .env.example, del proyecto y rellena estas siguientes variables:

```bash
NEXT_PUBLIC_WEATHER_API_KEY=your_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key
```

#### Corre la aplicación:

```bash
pnpm run dev
```

#### Abre la aplicación en tu navegador:

- Ve a http://localhost:3000 para ver la aplicación en acción.

#### Cómo contribuir

Si quieres contribuir a este proyecto, ¡eres bienvenido! Puedes hacerlo de la siguiente manera:

- Crea un fork de este repositorio.
- Crea una nueva rama para tus cambios: git checkout -b mi-rama.
- Haz tus cambios y realiza commits: git commit -am 'mi mensaje de commit'.
- Envía tus cambios a tu repositorio: git push origin mi-rama.
- Crea un pull request desde tu repositorio al repositorio original.
- Espera a que tus cambios sean revisados y aceptados.

