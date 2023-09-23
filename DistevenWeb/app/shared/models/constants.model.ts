export class Constants {
    public static getById<T>(id: number) {
        const idPropertyKey = Object.keys(this).find(key => this[key].id === id);
        return idPropertyKey ? this[idPropertyKey] : null;
    }
    
    public static getByTitle<T>(title: string) {
        return Object.keys(this).filter(key => this[key].title === title).map(key => this[key]);
    }

    public static getByName<T>(name: string) {
        return Object.keys(this).filter(key => this[key].name === name).map(key => this[key]);
    }
    
    public static getAll<T>() {
        return Object.keys(this).map(key => this[key]);
    }

    public static getDescriptionById<T>(id: number) {
        return Object.values(this).find(val => val.id === id).description;
    }
}