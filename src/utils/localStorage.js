const getFromLocalStorage = (storage) => {
    const _current_localstorage = localStorage.getItem(storage);
    const current_localstorage = _current_localstorage? JSON.parse(_current_localstorage): [];

    return current_localstorage;
}

const setInLocalStorage = (storage, movies) => {
    const processed_movies = JSON.stringify(movies);
    localStorage.setItem(storage, processed_movies)
}

export {getFromLocalStorage, setInLocalStorage};