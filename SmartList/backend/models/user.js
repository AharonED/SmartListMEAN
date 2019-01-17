// Pulls Mongoose dependency for creating schemas
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Creates a User Schema. This will be the basis of how user data is stored in the db
const userSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    location: {type: [Number], required: true}, // [Long, Lat]
    gender: {type: String, required: false},
    age: {type: Number, required: false},
    favlang: {type: String, required: false},
    htmlverified: String,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
}, { autoCreate: true});

// Sets the created_at parameter equal to the current time
userSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

// Indexes this schema in 2dsphere format (critical for running proximity searches)
userSchema.index({location: '2dsphere'});

// Exports the userSchema for use elsewhere. Sets the MongoDB collection to be used as: "scotch-users"
module.exports = mongoose.model('User', userSchema);
