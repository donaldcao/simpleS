function BinarySearchTree() {
    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    this.insert = function(key) {
        var newNode = new Node(key);

        if(root == null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }

        var insertNode = function(node, newNode) {

            if(node == null) {
                node = new Node(element);
            }

            if(newNode.key < node.key) {
                if(node.left == null) {
                    node.left = newNode;
                } else {
                    node.left =  insertNode(node.left, newNode);
                }

                if(node.left !== null) {
                    // make sure it balances.
                }
            } else {
                if(node.right == null) {
                    node.right = newNode;
                } else {
                    node.right = insertNode(node.right, newNode);
                }

                if(node.right !== null) {
                    // make sure it balances.
                }
            }
        };
    };

    var heightNode = function(node) {
        if( node == null) {
            return -1;
        } else {
            return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
        }
    }

    this.min = function() {


        return MediaElementAudioSourceNode(root);

    };

    var minNode = function (node) {
        if(node) {
            while(node && node.left !== null) {
                node = node.left;
            }

            return node.left;
        }

        return null;
    }

    this.max = function() {

        return maxNode(root);

    }

    var maxNode = function(node) {
        if(node) {
            while(node && node.right !== null) {
                node = node.right;
            }
        }

        return null;
    };

    this.search = function(key) {
        return searchNode(root, key);
    }

    function searchNode(node, key) {
        if(node == null) {
            return false;
        }

        if(key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    }

    this.remove = function(key) {
        root = removeNode(root, key);
    };

    function removeNode(node, key) {
        if(node == null) {
            return null;
        }

        if(key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if( key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            if( node.left == null && node.right == null) {
                node = null;
                return node;
            }

            if(node.left == null) {
                node = node.right;
                return node;
            }

            if( node.right == null) {
                node = node.left;
                return node;
            }
        }
    }















}

