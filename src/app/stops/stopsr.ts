import { Stopr } from '../stopr';
import { Route } from '../route';
import { ROUTES } from '../routes/routes';

export const STOPSR: Stopr[] = [
    { id: 11, name: 'ДС Зеленый Луг',           altroutes: [ ROUTES[0], ROUTES[3], ROUTES[4], ROUTES[7] ] },
    { id: 12, name: 'Седых',                    altroutes: [ ROUTES[0], ROUTES[3], ROUTES[4], ROUTES[7] ] },
    { id: 13, name: 'Калиновского',             altroutes: [ ROUTES[0], ROUTES[3], ROUTES[4], ROUTES[7] ] },
    { id: 14, name: 'Магазин Электроника',      altroutes: [ ROUTES[0], ROUTES[3], ROUTES[4], ROUTES[7] ] },
    { id: 15, name: 'Севастопольская',          altroutes: [ ROUTES[0], ROUTES[3], ROUTES[4], ROUTES[7] ] },
    { id: 16, name: 'Волгоградская',            altroutes: [ ROUTES[0], ROUTES[3], ROUTES[4], ROUTES[7] ] },
    { id: 17, name: 'Белинского',               altroutes: [ ROUTES[0], ROUTES[3], ROUTES[4], ROUTES[7] ] },
    { id: 18, name: 'Ломоносова',               altroutes: [ ROUTES[0], ROUTES[3], ROUTES[4], ROUTES[7] ] },
    { id: 19, name: 'Чернышевского',            altroutes: [ ROUTES[0], ROUTES[3], ROUTES[4], ROUTES[7] ] },
    { id: 20, name: 'БНТУ',                     altroutes: [ ROUTES[0], ROUTES[3], ROUTES[4], ROUTES[7] ] },
    { id: 21, name: 'Дорошевича',               altroutes: [ ROUTES[0], ROUTES[3], ROUTES[4], ROUTES[7] ] },
    { id: 22, name: 'Площадь Якуба Коласа',     altroutes: [ ROUTES[0], ROUTES[3], ROUTES[4], ROUTES[7] ] },
    { id: 23, name: 'Пугачевская',              altroutes: [ ROUTES[0], ROUTES[3], ROUTES[4], ROUTES[7] ] },
    { id: 24, name: 'Красная',                  altroutes: [ ROUTES[0], ROUTES[1], ROUTES[2], ROUTES[4], ROUTES[7] ] },
    { id: 25, name: 'Проспект Независимости',   altroutes: [ ROUTES[0], ROUTES[1], ROUTES[2], ROUTES[4], ROUTES[7] ] }, //
    { id: 26, name: 'Змитрока Бядули',          altroutes: [ ROUTES[0], ROUTES[1], ROUTES[2], ROUTES[4] ] }, //
    { id: 27, name: 'Захарова',                 altroutes: [ ROUTES[0], ROUTES[2], ROUTES[5] ] }, //
    { id: 28, name: 'Парк Горького',            altroutes: [ ROUTES[0], ROUTES[2], ROUTES[5] ] },
    { id: 29, name: 'Лицей БГУ',                altroutes: [ ROUTES[0], ROUTES[2], ROUTES[5] ] },
    { id: 30, name: 'Стадион Динамо',           altroutes: [ ROUTES[0], ROUTES[2], ROUTES[5] ] },
    { id: 31, name: 'Свердлова',                altroutes: [ ROUTES[0], ROUTES[2], ROUTES[5] ] },
    { id: 32, name: 'Вокзал',                   altroutes: [ ROUTES[0], ROUTES[2], ROUTES[5] ] },
    { id: 33, name: 'ДС Мясникова',             altroutes: [ ROUTES[0], ROUTES[2], ROUTES[5] ] },
    { id: 34, name: 'ДС Озеро',                 altroutes: [ ROUTES[1], ROUTES[2], ROUTES[3] ] },
    { id: 35, name: 'Веры Слуцкой',             altroutes: [ ROUTES[1], ROUTES[2], ROUTES[3] ] },
    { id: 36, name: 'Старовиленский тракт',     altroutes: [ ROUTES[1], ROUTES[2], ROUTES[3] ] },
    { id: 37, name: 'Дворец детей и молодежи',  altroutes: [ ROUTES[1], ROUTES[2], ROUTES[3] ] },
    { id: 38, name: 'Переспа',                  altroutes: [ ROUTES[1], ROUTES[2], ROUTES[3] ] },
    { id: 39, name: 'Театральная',              altroutes: [ ROUTES[1], ROUTES[2], ROUTES[3] ] },
    { id: 40, name: 'Богдановича',              altroutes: [ ROUTES[1], ROUTES[2], ROUTES[3] ] },
    { id: 41, name: 'Куйбышева',                altroutes: [ ROUTES[1], ROUTES[2], ROUTES[3] ] },
    { id: 42, name: 'ДС Серебрянка',            altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 43, name: 'Серебрянка-3',             altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 44, name: 'Якубова',                  altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 45, name: 'Поликлиника №18',          altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 46, name: 'Проспект Рокоссовского',   altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 47, name: 'Горовца',                  altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 48, name: 'Васнецова',                altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 49, name: 'Народная',                 altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 50, name: 'Станция Партизанская',     altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 51, name: 'Парк 50-летия Октября',    altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 52, name: 'Буденого',                 altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 53, name: 'Станция Тракторный завод', altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 54, name: 'Уральская',                altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 55, name: 'Переулок Козлова',         altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 56, name: 'Ботаническая',             altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 57, name: 'Платонова',                altroutes: [ ROUTES[1], ROUTES[4], ROUTES[5], ROUTES[6] ] },
    { id: 58, name: 'Чапаева',                  altroutes: [ ROUTES[5] ] }, //
    { id: 59, name: 'Тракторный завод',         altroutes: [ ROUTES[6] ] }, //
    { id: 60, name: 'Проспект Независимости',   altroutes: [ ROUTES[7] ] }, //
    { id: 61, name: 'Берестянская',             altroutes: [ ROUTES[4] ] }, //
];