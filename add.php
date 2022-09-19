<?php 
if(isset($_GET['submit'])){
    echo $_GET["email"] .'<br/>';
    echo $_GET["name"] .'<br/>';
    echo $_GET["ingredients"] .'<br/>';

}
?>
<html lang="en">
<?php require('header.php')?>
    <section class="container gray-text">
<h4 class="center">
    Add Pizza
</h4>
<form action="add.php" class="white" method="GET">
    <label for="">Add Your Emaail</label>
    <input type="text" name="email" required />
    <label for="">Pizza Name</label>
    <input type="text" name="name" />
    <label for="">Pizza Ingredient</label>
    <input type="text" name="ingredients" />
    <div class="center">
        <input type="submit" name="submit" class="btn brand z-index-"/>
    </div>
</form>
    </section>
    <?php require('footer.php')?>
</html>