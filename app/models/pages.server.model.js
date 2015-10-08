
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var PageSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Sayfa başlığı boş bırakılamaz.'
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
    lang: {
        type: String,
        default: 'tr'
    },
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
    deletedBy: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Page', PageSchema);