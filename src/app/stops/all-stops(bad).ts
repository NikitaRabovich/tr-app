import { Stop } from '../stop';
import { ROUTES } from '../routes/routes';

export const STOPS: Stop[] = [
    { id: 11, name: 'ДС Зеленый Луг',          routesSet: [ ROUTES[0].id, ROUTES[3].id, ROUTES[4].id, ROUTES[7].id ] },
    { id: 12, name: 'Седых',                   routesSet: [ ROUTES[0].id, ROUTES[3].id, ROUTES[4].id, ROUTES[7].id ] },
    { id: 13, name: 'Калиновского',            routesSet: [ ROUTES[0].id, ROUTES[3].id, ROUTES[4].id, ROUTES[7].id ] },
    { id: 14, name: 'Магазин Электроника',     routesSet: [ ROUTES[0].id, ROUTES[3].id, ROUTES[4].id, ROUTES[7].id ] },
    { id: 15, name: 'Севастопольская',         routesSet: [ ROUTES[0].id, ROUTES[3].id, ROUTES[4].id, ROUTES[7].id ] },
    { id: 16, name: 'Волгоградская',           routesSet: [ ROUTES[0].id, ROUTES[3].id, ROUTES[4].id, ROUTES[7].id ] },
    { id: 17, name: 'Белинского',              routesSet: [ ROUTES[0].id, ROUTES[3].id, ROUTES[4].id, ROUTES[7].id ] },
    { id: 18, name: 'Ломоносова',              routesSet: [ ROUTES[0].id, ROUTES[3].id, ROUTES[4].id, ROUTES[7].id ] },
    { id: 19, name: 'Чернышевского',           routesSet: [ ROUTES[0].id, ROUTES[3].id, ROUTES[4].id, ROUTES[7].id ] },
    { id: 20, name: 'БНТУ',                    routesSet: [ ROUTES[0].id, ROUTES[3].id, ROUTES[4].id, ROUTES[7].id ] },
    { id: 21, name: 'Дорошевича',              routesSet: [ ROUTES[0].id, ROUTES[3].id, ROUTES[4].id, ROUTES[7].id ] },
    { id: 22, name: 'пл. Я.Коласа',            routesSet: [ ROUTES[0].id, ROUTES[3].id, ROUTES[4].id, ROUTES[7].id ] },
    { id: 23, name: 'Пугачевская',             routesSet: [ ROUTES[0].id, ROUTES[3].id, ROUTES[4].id, ROUTES[7].id ] },
    { id: 24, name: 'Красная',                 routesSet: [ ROUTES[0].id, ROUTES[1].id, ROUTES[2].id, ROUTES[4].id, ROUTES[7].id ] },
    { id: 25, name: 'пр-т Независимости',      routesSet: [ ROUTES[0].id, ROUTES[1].id, ROUTES[2].id, ROUTES[4].id, ROUTES[7].id ] }, //
    { id: 26, name: 'Змитрока Бядули',         routesSet: [ ROUTES[0].id, ROUTES[1].id, ROUTES[2].id, ROUTES[4].id ] }, //
    { id: 27, name: 'Захарова',                routesSet: [ ROUTES[0].id, ROUTES[2].id, ROUTES[5].id ] }, //
    { id: 28, name: 'Парк Горького',           routesSet: [ ROUTES[0].id, ROUTES[2].id, ROUTES[5].id ] },
    { id: 29, name: 'Лицей БГУ',               routesSet: [ ROUTES[0].id, ROUTES[2].id, ROUTES[5].id ] },
    { id: 30, name: 'стадион Динамо',          routesSet: [ ROUTES[0].id, ROUTES[2].id, ROUTES[5].id ] },
    { id: 31, name: 'Свердлова',               routesSet: [ ROUTES[0].id, ROUTES[2].id, ROUTES[5].id ] },
    { id: 32, name: 'Вокзал',                  routesSet: [ ROUTES[0].id, ROUTES[2].id, ROUTES[5].id ] },
    { id: 33, name: 'ДС Мясникова',            routesSet: [ ROUTES[0].id, ROUTES[2].id, ROUTES[5].id ] },
    { id: 34, name: 'ДС Озеро',                routesSet: [ ROUTES[1].id, ROUTES[2].id, ROUTES[3].id ] },
    { id: 35, name: 'Веры Слуцкой',            routesSet: [ ROUTES[1].id, ROUTES[2].id, ROUTES[3].id ] },
    { id: 36, name: 'Старовиленский тракт',    routesSet: [ ROUTES[1].id, ROUTES[2].id, ROUTES[3].id ] },
    { id: 37, name: 'Дворец детей и молодежи', routesSet: [ ROUTES[1].id, ROUTES[2].id, ROUTES[3].id ] },
    { id: 38, name: 'Переспа',                 routesSet: [ ROUTES[1].id, ROUTES[2].id, ROUTES[3].id ] },
    { id: 39, name: 'Театральная',             routesSet: [ ROUTES[1].id, ROUTES[2].id, ROUTES[3].id ] },
    { id: 40, name: 'Богдановича М.',          routesSet: [ ROUTES[1].id, ROUTES[2].id, ROUTES[3].id ] },
    { id: 41, name: 'Куйбышева',               routesSet: [ ROUTES[1].id, ROUTES[2].id, ROUTES[3].id ] },
    { id: 42, name: 'ДС Серебрянка',           routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 43, name: 'Серебрянка-3',            routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 44, name: 'Якубова',                 routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 45, name: 'Поликлиника №18',         routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 46, name: 'пр-т Рокоссовского',      routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 47, name: 'Горовца',                 routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 48, name: 'Васнецова',               routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 49, name: 'Народная',                routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 50, name: 'ст. м. Партизанская',     routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 51, name: 'Парк 50-летия Октября',   routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 52, name: 'Буденого',                routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 53, name: 'ст. м. Тракторный завод', routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 54, name: 'Уральская',               routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 55, name: 'пер. Козлова',            routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 56, name: 'Ботаническая',            routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 57, name: 'Платонова',               routesSet: [ ROUTES[1].id, ROUTES[4].id, ROUTES[5].id, ROUTES[6].id ] },
    { id: 58, name: 'Чапаева',                 routesSet: [ ROUTES[5].id ] }, //
    { id: 59, name: 'Тракторный завод',        routesSet: [ ROUTES[6].id ] }, //
    { id: 60, name: 'пр-т Независимости',      routesSet: [ ROUTES[7].id ] }, //
    { id: 61, name: 'Берестянская',            routesSet: [ ROUTES[4].id ] }, //
];