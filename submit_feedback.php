<?php
// Define the path to the SQLite3 database file
$dbFile = 'Vichar.db';  // Replace with the actual path to your SQLite3 database file

// Get form data
if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $feedback = $_POST['feedback'];
    $rating = $_POST['rating'];
    
    try 
    {
        // Open the SQLite3 database
        $db = new SQLite3($dbFile);

        // Prepare an SQL statement to insert data into the database
        $stmt = $db->prepare("INSERT INTO feedback (name, email, feedback, rating) VALUES (:name, :email, :feedback, :rating)");

        // Bind parameters
        $stmt->bindValue(':name', $name, SQLITE3_TEXT);
        $stmt->bindValue(':email', $email, SQLITE3_TEXT);
        $stmt->bindValue(':feedback', $feedback, SQLITE3_TEXT);
        $stmt->bindValue(':rating', $rating, SQLITE3_TEXT);

        // Execute the statement
        $result = $stmt->execute();

        if ($result) 
        {
            echo "Aapke Sahyogg ke liye Dhanyavaad!!!";
        } 
        else 
        {
            echo "Error: " . $db->lastErrorMsg();
        }

        // Close the database connection
        $db->close();
    } 
    catch (Exception $e) 
    {
        echo "Error: " . $e->getMessage();
    }
} 
else 
{
    echo "Invalid request.";
}
?>
