<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Machine extends Model
{
    protected $fillable = [
        'title', 
        'description',
        'features',
        'thumbnail',
        'images',
        'category_id',
    ];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}