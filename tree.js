function Tree() {
    this.leaves = [];
    this.branches = [];
    for(var i = 0; i < 500; i++) {
        this.leaves.push(new Leaf());
    }

    this.show = function() {
        for(var i = 0; i < this.leaves.length; i++) {
          this.leaves[i].show();
        }

        for(var i = 0; i < this.branches.length; i++) {
          this.branches[i].show();
        }
    }


    var pos = createVector(width / 2, height);
    var dir = createVector(0, -1);
    var root = new Branch(null, pos, dir);
    this.branches.push(root);

    var current = root;
    var found = false;
    while(!found) {
        for(var i = 0; i < this.leaves.length; i++) {
          var d = p5.Vector.dist(current.pos, this.leaves[i].pos);
          if(d < max_dist) {
            found = true;
          }
        }

        if(!found) {
          var branch = current.next();
          current = branch;
          this.branches.push(current);
        }
    }
}