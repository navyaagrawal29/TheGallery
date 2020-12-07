const Document = require('vertex-camo').Document
const props = {
    name: {type:String, default:''},
    email: {type:String, default:'', display:true},
    subject: {type:String, default:''},
    message: {type:String, default:''},
    dateString: {type:String, default:''},
	schema: {type:String, default:'subscriber', immutable:true},
	timestamp: {type:Date, default: new Date(), immutable:true}
}

class Subscriber extends Document {
	constructor(){
		super()
		this.schema(props)
		this.timestamp = new Date()
	}

	static get resourceName(){
		return 'subscriber'
	}

	static collectionName(){
		return 'subscribers'
	}
}

module.exports = Subscriber

