const SERVER_URL = "http://localhost:55235";

const searchManga = async (title) => {
    const mangas = await fetch(`${SERVER_URL}/manga?title=${title}`);
    return mangas.json();
};

const updateMangaProviders = async () => {
    return await fetch(`${SERVER_URL}/provider`, {
        method: "POST",
        body: {}
    });
};

const MangaService = {
    searchManga,
    updateMangaProviders
};

export default MangaService;