const SERVER_URL = "http://localhost:55235";

const searchManga = async (title) => {
    const mangas = await fetch(`${SERVER_URL}/manga?title=${title}`);
    return mangas.json();
};

const getManga = async (location) => {
    const l = encryptParam(location);
    const manga = await fetch(`${SERVER_URL}/manga/${l}`);
    return manga.json();
};

const updateMangaProviders = async () => {
    return await fetch(`${SERVER_URL}/provider`, {
        method: "POST",
        body: {}
    });
};

const encryptParam = (param) => {
    return btoa(param);
};

const MangaService = {
    searchManga,
    getManga,
    updateMangaProviders
};

export default MangaService;