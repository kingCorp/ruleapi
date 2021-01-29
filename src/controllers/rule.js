
const Base = require('./base');

class Rule extends Base {

    constructor(req, res) {
        super();
        this.req = req;
        this.res = res;
    }


}

module.exports = Rule;