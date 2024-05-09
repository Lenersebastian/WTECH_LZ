<?php

use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email_address')->unique();
            $table->string('street_address');
            $table->string('password');
            $table->enum('permissions', ['ADMIN', 'USER'])->default('USER');
            $table->timestamps();
        });

        DB::table('users')->insert([
            'name' => 'Dominik Zatovic',
            'email_address' => 'dominik.zatovic@gmail.com',
            'street_address' => 'Pohankova 69',
            'password' => Hash::make('password'),
            'permissions' => 'ADMIN',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('users')->insert([
            'name' => 'Sebastian Lener',
            'email_address' => 'lenersebastian@gmail.com',
            'street_address' => 'Osadnicka 420',
            'password' => Hash::make('drowssap'),
            'permissions' => 'ADMIN',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};