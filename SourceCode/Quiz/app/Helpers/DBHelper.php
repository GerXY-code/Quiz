<?php 

namespace App\Helpers;

use Illuminate\Support\Facades\DB;

class DBHelper {

    public static function getRandomId($table, $id): int {
        return rand(1, DB::table($table)->count($id));
    }

}

