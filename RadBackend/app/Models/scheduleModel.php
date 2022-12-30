<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class scheduleModel extends Model
{
    use HasFactory;
    public $table = "shedule";
    public $primaryKey = "id";
    public $keyType = "int";
    public $incrementing = "true";
    public $timestamps = "false";
}
