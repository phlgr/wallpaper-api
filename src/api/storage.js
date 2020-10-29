export function getFavorites() {
  let favorites = null;
  try {
    favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  } catch (error) {
    // Parsing JSON might fail
    console.error(error);
    favorites = [];
  }
  return favorites;
}
