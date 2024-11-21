import fs from 'fs';
export default class FilesServices {
    static getFiles(path) {
        if (path == '')
            return [];
        return fs.readdirSync(path);
    }
}
