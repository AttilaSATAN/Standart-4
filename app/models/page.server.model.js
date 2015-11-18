'use strict';



/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Page Schema
 */
var PageSchema = new Schema({
    createdAt: {
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
    contentUrl: {
        type: String,
        default: '',
        trim: true
    },
    lang: {
        type: String,
        default: 'tr'
    },
    url: {
        type: String,
        default: '',
        trim: true
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
