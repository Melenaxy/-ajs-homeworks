export default class ErrorRepository{
    constructor() {
        this.errors = new Map([
            [1, 'Логическая ошибка'],
            [2, 'Синтаксическая ошибка'],
            [3, 'Ошибка компиляции'],
            [4, 'Арифметическая ошибка']
        ])
    }

    translate(code) {
        if (!this.errors.has(code)) {
            return 'Unknown error'
        }
        return this.errors.get(code);
    }
}