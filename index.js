// Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.
// Пояснение: например, getPercents(30, 200) должно вернуть 60.

export function getPercents (percent, number) {
    return (number / 100) * percent;
}