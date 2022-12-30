<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfileModel extends Model
{
    use HasFactory;
    public $table = "profie";
    public $primaryKey = "id";
    public $keyType = "int";
    public $incrementing = "true";
    public $timestamps = "true";
}
