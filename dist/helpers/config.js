import path from 'path';
class Config {
    static getPaths() {
        return {
            productsTypes: path.join(this.rootPath, '../modules/products/types'),
        };
    }
    static getPath(key = '') {
        const paths = this.getPaths();
        if (paths[key]) {
            return paths[key];
        }
        return '';
    }
}
Config.rootPath = __dirname;
export default Config;
