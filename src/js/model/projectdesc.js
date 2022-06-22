// This class is an object that contains all the data on the project
// Like title, version, notes etc

export class Project {
    constructor () {
        this.version = "0.1";
        this.title = "Untitled";
        this.desc = ""; // Generic project description
    }

    setTitle (newTitle) {
        this.title = newTitle;
    }

    setDesc (newDesc) {
        this.desc = newDesc;
    }
}
