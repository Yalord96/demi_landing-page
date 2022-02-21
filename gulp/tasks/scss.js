import dardSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'; // Сжатие CSS файла
import webpcss from 'gulp-webpcss'; // Вывод WEBP изображений
import autoPrefixer from 'gulp-autoprefixer'; // Добавление вендерных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Групировка медиа запросов

const sass = gulpSass(dardSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      titile: "SCSS",
      message: "Error: <%= error.message %>"
    })
  ))
  .pipe(app.plugins.replace(/@img\//g, '../img/'))
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .pipe(app.plugins.if(
    app.isBuild,
    groupCssMediaQueries()
  ))
  .pipe(app.plugins.if(
    app.isBuild,
    webpcss({
        webpclass: ".webp",
        noWebpClass: ".no-webp"
      })
  ))
  .pipe(app.plugins.if(
    app.isBuild,
    autoPrefixer({
        grid: true,
        overrideBrowserslist: ["last 3 versions"],
        cascode: true
      })
  ))
  // .pipe(groupCssMediaQueries())
  // .pipe(webpcss({
  //   webpclass: ".webp",
  //   noWebpClass: ".no-webp"
  // }))
  // .pipe(autoPrefixer({
  //   grid: true,
  //   overrideBrowserslist: ["last 3 versions"],
  //   cascode: true
  // }))
  // Раскомментировать, если нужен не  сжатый дубль файла стилей
  .pipe(app.gulp.dest(app.path.build.css))
  .pipe(app.plugins.if(
    app.isBuild,
    cleanCss()
  ))
  //.pipe(cleanCss())
  .pipe(rename({
    extname: ".min.css"
  }))
  .pipe(app.gulp.dest(app.path.build.css))
  .pipe(app.plugins.browserSync.stream());
}