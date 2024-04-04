import Movie from '../domain/Movie';
import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('creating new movie', () => {
  const expected = {id: 1,
    name: 'Мстители',
    price: 300,
    year: 2012,
    country: 'США',
    slogan: 'Avengers Assemble!',
    genre: ['фантастика', 'боевик', 'фентези'],
    duration: 137};
  expect(new Movie(1, 'Мстители', 300, 2012, 'США','Avengers Assemble!', ['фантастика', 'боевик', 'фентези'], 137)).toEqual(expected);
});

test('adding movie to cart', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'Мстители', 300, 2012, 'США','Avengers Assemble!', ['фантастика', 'боевик', 'фентези'], 137);
  cart.add(movie);
  expect(cart.items.length).toBe(1);
});