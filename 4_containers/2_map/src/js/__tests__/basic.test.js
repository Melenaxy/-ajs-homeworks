import ErrorRepository from '../app';



test('get error code', () => {
  let appErrors = new ErrorRepository();
  expect(appErrors.translate(3)).toEqual('Ошибка компиляции');
});

test('unknown error', () => {
  let appErrors = new ErrorRepository();
  expect(appErrors.translate(6)).toEqual('Unknown error');
});
