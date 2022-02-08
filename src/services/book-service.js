import { books } from "../books-data.js";
import { storageService } from "./async-storage.service.js";

const STORAGE_KEY = 'book'
const STORAGE_KEY = 'wish'


export const bookService = {
    queryBooks,
}



function queryBooks() {
    return storageService.query()
    if (!books || !books.length) return []
    return books
}