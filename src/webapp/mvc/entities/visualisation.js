class Visualisation{
    constructor(data, title, div_id) {
        this.data = data;
        this.title = title;
        this.div_id = div_id;
    }

    getData = () => {return this.data;};
    setData = (data) => {this.data = data;};
    getTitle = () => {return this.title;};
    setTitle = (title) => {this.title = title;};
    getDivId= () => {return this.div_id;};
    setDivId = (div_id) => {this.div_id = div_id;};
    create(){}
}