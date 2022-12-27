<?php
    class DbCOnnect
    {
        private $server = 'localhost';
        private $dbname = 'agarsjee_flyboost';
        private $user = 'agarsjee_root';
        private $password = 'databasepassword';

        public function connect()
        {
            try
            {
                $connection = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->password);
				$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $connection;
            }catch (\Exception $e) {
				echo "Database Error: " . $e->getMessage();
			}
        }

    }
?>
