<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payment', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->unique();
            $table->bigInteger('price');

            $table->bigInteger('card_number')->nullable; //information will be only saved to database if user wants to remember the card for future payments
            $table->integer('CVC')->nullable;

            $table->string('blockchain');
            $table->string('transaction_id');
            $table->string('address_sent_from');
            $table->string('address_sent_to');
            $table->timestamps();
    
            // Define foreign key constraint
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payment');
    }
};