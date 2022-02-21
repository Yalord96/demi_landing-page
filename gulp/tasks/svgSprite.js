import svgSprite from "gulp-svg-sprite";

export const svgSpriteFunc = () => {
  return app.gulp.src(`${app.path.src.svgicons}`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SVG",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../icons/icons.svg`, // Создаем страницу с перечнем иконок
          example: true // Пример, создаетсчя html файл с превью спрайта
        }
      }
    }))
    .pipe(app.gulp.dest(`${app.path.build.img}`));
}