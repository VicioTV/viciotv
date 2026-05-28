# 📺 VicioTV

> Plataforma de streaming en un único archivo HTML. Películas, series y anime con múltiples reproductores, perfiles de usuario y soporte PWA.

![HTML](https://img.shields.io/badge/HTML-Un_solo_archivo-e50914?style=flat-square&logo=html5&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-Vanilla-f7df1e?style=flat-square&logo=javascript&logoColor=black)
![API](https://img.shields.io/badge/API-TMDB-01b4e4?style=flat-square)
![PWA](https://img.shields.io/badge/PWA-Instalable-5a0fc8?style=flat-square)
![Sin backend](https://img.shields.io/badge/Backend-Ninguno-2ea44f?style=flat-square)

---

## ¿Qué es VicioTV?

VicioTV es una interfaz de streaming completa contenida en un único archivo `.html`. No requiere servidor, instalación ni dependencias. Abrís el archivo y tenés una experiencia tipo Netflix funcional en el navegador.

Consume la API pública de TMDB para obtener catálogo actualizado y utiliza múltiples proveedores de embeddings para la reproducción de contenido.

---

## ✨ Características

- 🎬 **Catálogo completo** — Películas, series y anime con búsqueda y filtros por género
- 🔀 **Multi-provider** — 6 reproductores configurables; si uno falla cambiás al siguiente
- 👤 **Perfiles de usuario** — Hasta 6 perfiles con avatares personalizados vía DiceBear
- ▶️ **Continuar viendo** — Guarda el progreso por episodio y perfil
- ❤️ **Lista de favoritos** — Persistida en localStorage, sin cuenta necesaria
- 📱 **PWA** — Instalable en Android e iOS como app nativa
- 🎨 **Temas personalizables** — Color principal y fondo configurables en runtime
- 📺 **Hero dinámico** — Portada rotatoria con trending del momento

---

## 📡 Providers de reproducción

| Provider | Películas | Series |
|---|:---:|:---:|
| StreamIMDB | ✅ | ✅ |
| EmbedMaster | ✅ | ✅ |
| VixSrc | ✅ | ✅ |
| VidFlix | ✅ | ✅ |
| VidSrc.net | ✅ | ✅ |
| VidSrc.to | ✅ | ✅ |

---

## 🚀 Uso

No hay build, no hay `npm install`, no hay nada que configurar:

```bash
# 1. Clonar el repositorio
git clone https://github.com/boch4maN/viciotv.git

# 2. Abrir en el navegador
open streamapp.html    # macOS
start streamapp.html   # Windows
```

O simplemente descargá `streamapp.html` y abrilo directamente en tu navegador.

---

## 🛠️ Stack técnico

| Tecnología | Uso |
|---|---|
| Vanilla JS | Sin frameworks. DOM nativo y fetch |
| TMDB API | Catálogo, metadatos e imágenes |
| DiceBear API | Generación de avatares para perfiles |
| localStorage | Perfiles, favoritos y progreso sin BD |
| Web App Manifest | Instalación PWA |
| CSS Variables | Sistema de temas dinámico |

---

## 📁 Estructura del archivo

Todo el proyecto vive en `streamapp.html`:

```
streamapp.html
├── <head>
│   ├── Variables CSS y reset
│   └── Estilos completos
│
├── <body>
│   ├── Pantalla de perfiles
│   ├── Modal editor de perfil
│   ├── Navbar + búsqueda
│   ├── Hero rotatorio
│   ├── Grillas de contenido
│   └── Modal de reproducción
│
└── <script>
    ├── Configuración de providers
    ├── Sistema de perfiles
    ├── Integración TMDB
    ├── Reproductor + episodios
    ├── Favoritos y progreso
    └── Temas y PWA
```

---

## ⚠️ Aviso legal

Este proyecto es de uso personal y sin fines de lucro. Los datos del catálogo son provistos por [TMDB](https://www.themoviedb.org). VicioTV no aloja ningún contenido multimedia propio.

---

<p align="center">Hecho por <a href="https://github.com/boch4maN">boch4maN</a></p>
