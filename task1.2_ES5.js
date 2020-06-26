'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

let myPost = new Post('Alex', 'lorem ipsum', '25.06.2020');
console.log(myPost);
myPost.edit('New text');
console.log(myPost);

let myAttachedPost = new AttachedPost('Ivan', 'Lorem ipsum dolor', '26.06.2020');
console.log(myAttachedPost);
myAttachedPost.edit('New text');
myAttachedPost.makeTextHighlighted();
console.log(myAttachedPost);