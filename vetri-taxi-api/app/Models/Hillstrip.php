<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hillstrip extends Model
{
    use HasFactory;
    protected $table = 'hillstrip_details';
    protected $casts = [
      'created_at' => 'datetime:d-m-Y',
  ];
    protected $fillable = [
        
        'car_id',
         'trip_from',
         'trip_to',
         'cus_name',
          'mobile',
           'payment',
           'members',
           'trip_days',
           'driver_batta',
             'total',
              
   ];
}
