const Base = require('./base');

class Rule extends Base {
    constructor(req, res) {
        super();
        this.req = req;
        this.res = res;
    }

    validateData() {
        try {
            const { rule, data } = this.req.body;


            this.isRequired(this.req.body);
            this.isObject(this.req.body);


            //condition logic
            const field1 = rule.field;
            const field2 = rule.condition;
            const field3 = rule.condition_value;

            if (this.checkConditon(field2, field3, data.missions)) {
                const validation = {
                    error: false,
                    field: rule.field,
                    field_value: data.missions,
                    condition: rule.condition,
                    condition_value: rule.condition_value
                };
                const msg = `field ${rule.field} successfully validated.`;
                return this.res.status(200).json(this.getSuccessResponse(msg, validation));
            } else {
                const validation = {
                    error: true,
                    field: rule.field,
                    field_value: data.missions,
                    condition: rule.condition,
                    condition_value: rule.condition_value
                };
                const msg = `field ${rule.field} successfully validated.`;
                return this.res.status(200).json(this.getSuccessResponse(msg, validation));
            }



        } catch (error) {
            return this.res.status(400).json(this.getErrorResponse(error, null));
        }
    }


    isRequired(field) {
        if (!field.hasOwnProperty('rule')) {
            return this.res.status(400).json(this.getErrorResponse('rule is required.', null));
        }
        if (!field.hasOwnProperty('data')) {
            return this.res.status(400).json(this.getErrorResponse('data is required.', null));
        }

        if (!field.data.hasOwnProperty(field.rule.field)) {
            return this.res.status(400).json(this.getErrorResponse(`field ${field.rule.field} is missing from data.`, null));
        }
    }

    isObject(field) {
        if (typeof field !== 'object') {
            return this.res.status(400).json(this.getErrorResponse('Invalid JSON payload passed.', null));
        }
        if (typeof field.rule !== 'object') {
            return this.res.status(400).json(this.getErrorResponse('rule should be an object.', null));
        }
        if (typeof field.data !== 'object') {
            return this.res.status(400).json(this.getErrorResponse('data should be an object.', null));
        }
    }

    checkConditon(value, fieldConditionValue, fieldData) {
        if (value === 'gte') {
            return fieldData >= fieldConditionValue;
        }
        if (value === 'eq') {
            return fieldConditionValue === fieldData;
        }
        if (value === 'neq') {
            return fieldConditionValue !== fieldData;
        }
        if (value === 'gt') {
            return fieldConditionValue < fieldData;
        }
        if (value === 'contains') {
            return fieldData.includes(fieldCondition);
        }
    }



}

module.exports = Rule;
