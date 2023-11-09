import data from '../data/quotes.json';


export async function readJsonFile() {
  return data;
}

export function addFavorite(id) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(id);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function removeFavorite(id) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const newFavorites = favorites.filter(favorite => favorite !== id);
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
}

export function isFavorite(id) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return favorites.includes(id);
}

export function findFavorites(idArray) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return favorites;
}