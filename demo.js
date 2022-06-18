<script>
 
      // Returns the min value in a binary tree
      function findMin(node) {
        if (node == null) return 2147483647;
 
        var res = node.data;
        var lres = findMin(node.left);
        var rres = findMin(node.right);
 
        if (lres < res) res = lres;
        if (rres < res) res = rres;
        return res;
      }
       
</script>