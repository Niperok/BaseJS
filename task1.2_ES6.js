'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    
    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
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