module.exports.parseForId = function (req){
    let fields = req.url.toString().split('/');
    return fields[fields.length-1];
};

module.exports.getJson = function (req){
    const data = req.on('data',function (data){
        return JSON.parse(data);
    };
}
