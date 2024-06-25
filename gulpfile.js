// Основной модуль
import gulp from "gulp";

// Импорт путей
import {basePath, blocks, path} from "./gulp/config/path.js";

// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значения в глобальную переменную
global.app = {
    path: path,
    basePath: basePath,
    blocks: blocks,
    gulp: gulp,
    plugins: plugins,
}

// Импорт задач
import  { reset } from "./gulp/tasks/reset.js";
import  { html } from "./gulp/tasks/html.js";
import  { server } from "./gulp/tasks/server.js";
import  { scss } from "./gulp/tasks/scss.js";
import  { copycss } from "./gulp/tasks/copy.js";
import  { js } from "./gulp/tasks/js.js";
import  { copyjs } from "./gulp/tasks/copy.js";
import  { img } from "./gulp/tasks/images.js";
import  { copyimg } from "./gulp/tasks/copy.js";
import  { imgopt } from "./gulp/tasks/images.js";
import  { copysvg } from "./gulp/tasks/images.js";
import  { svgOpt } from "./gulp/tasks/svg.js";
import  { svgSprive } from "./gulp/tasks/svg.js";
import {otfToTtf, ttfToWoff, ttfToWoff2, fontsStyle} from "./gulp/tasks/fonts.js";

// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, img);
}

// Создание svg-спрайта
export { svg };


// Последовательная обработка шрифтов
const fonts = gulp.series( otfToTtf, ttfToWoff, ttfToWoff2, fontsStyle);
const svg = gulp.series(svgOpt, svgSprive);

// Основные задачи
const mainTasks = gulp.series(svg, gulp.parallel(copycss, copyjs, html, scss, js, img, copysvg));

// Построение сценариев выполнения задач
const dev = gulp.series(mainTasks, gulp.parallel(watcher, server));

const test = gulp.series(imgopt);

//Экспорт сценариев
export { fonts }
export { dev }
export { test }


//Выполнение сценария по умолчанию
gulp.task('default', dev);