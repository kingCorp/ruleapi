
const Base = require('./base');

class Owner extends Base {

    
    constructor(req, res) {
        super();
        this.data = {
            name: "Attasiem James",
            github: "@kingcorp",
            email: "attasiemj@gmail.com",
            mobile: "08093702195",
            twitter: "@keensley"
        };
        this.req = req;
        this.res = res;
    }

    viewInfo () {
        try {
            let msg = "My Rule-Validation API";
            return this.res.status(200).json(this.getSuccessResponse(msg, this.data));
        } catch (error) {
            return this.res.status(400).json(this.getErrorResponse(error, null));
        }
    }

}

module.exports = Owner